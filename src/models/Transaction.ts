import mongoose from 'mongoose';
import { LocationDocument } from './Location';

export type TransactionType = 'INCOME' | 'EXPENSE';

const transactionSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  amount: {
    type: Number,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['INCOME', 'EXPENSE'],
  },
  locationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',
    required: true,
  },
  runningBalance: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Pre-validate middleware to calculate running balance
transactionSchema.pre('validate', async function(next) {
  try {
    if (!this.isModified('amount') && !this.isNew) {
      return next();
    }

    const Location = mongoose.model('Location');
    const location = await Location.findById(this.locationId) as LocationDocument;
    
    if (!location) {
      throw new Error('Location not found');
    }

    // Calculate new balance based on transaction type
    const transactionAmount = this.type === 'INCOME' ? this.amount : -this.amount;
    this.runningBalance = location.currentBalance + transactionAmount;
    
    next();
  } catch (error) {
    next(error as mongoose.CallbackError);
  }
});

// Post-save middleware to update location balance
transactionSchema.post('save', async function() {
  try {
    const Location = mongoose.model('Location');
    const location = await Location.findById(this.locationId);
    if (location) {
      location.currentBalance = this.runningBalance;
      await location.save();
    }
  } catch (error) {
    console.error('Error updating location balance:', error);
    throw error;
  }
});

export type TransactionDocument = mongoose.Document & {
  date: Date;
  amount: number;
  note: string;
  type: TransactionType;
  locationId: mongoose.Types.ObjectId;
  runningBalance: number;
  createdAt: Date;
  updatedAt: Date;
};

const Transaction = mongoose.models.Transaction || mongoose.model<TransactionDocument>('Transaction', transactionSchema);

export default Transaction;