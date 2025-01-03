import mongoose from 'mongoose';

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

// Add middleware to validate location exists before saving
transactionSchema.pre('save', async function(next) {
  const Location = mongoose.model('Location');
  const locationExists = await Location.findById(this.locationId);
  if (!locationExists) {
    throw new Error('Referenced location does not exist');
  }
  next();
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