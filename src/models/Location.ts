import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  description: {
    type: String,
    required: false,
  },
  currentBalance: {
    type: Number,
    required: true,
    default: 0,
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

// Ensure indexes are created
locationSchema.index({ name: 1 }, { unique: true });

// Pre-save middleware to check for duplicates
locationSchema.pre('save', async function(next) {
  const doc = this;
  if (doc.isNew) {
    try {
      const exists = await (mongoose.models.Location || mongoose.model('Location', locationSchema))
        .findOne({ name: doc.name });
      if (exists) {
        throw new Error('Location name must be unique');
      }
    } catch (error) {
      next(error);
      return;
    }
  }
  next();
});

export type LocationDocument = mongoose.Document & {
  name: string;
  description?: string;
  currentBalance: number;
  createdAt: Date;
  updatedAt: Date;
};

const Location = mongoose.models.Location || mongoose.model<LocationDocument>('Location', locationSchema);

export default Location;