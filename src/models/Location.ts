import mongoose, { CallbackError } from 'mongoose';

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
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

// Middleware to handle duplicate key errors
locationSchema.pre('save', async function(next) {
  try {
    const Location = mongoose.model('Location');
    const existingLocation = await Location.findOne({ name: this.name, _id: { $ne: this._id } });
    if (existingLocation) {
      throw new Error('Location name must be unique');
    }
    next();
  } catch (error) {
    next(error as CallbackError);
  }
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