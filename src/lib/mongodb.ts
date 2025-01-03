import mongoose from 'mongoose';

export async function connectDB(uri: string) {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

export async function disconnectDB() {
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.error('MongoDB disconnection error:', error);
    throw error;
  }
}