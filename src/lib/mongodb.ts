import mongoose from 'mongoose';

declare global {
  var mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

let isConnected = false;

async function connectDB() {
  if (isConnected) {
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env');
  }

  try {
    if (!global.mongoose) {
      global.mongoose = { conn: null, promise: null };
    }

    if (!global.mongoose.promise) {
      const opts = {
        directConnection: true,
        serverSelectionTimeoutMS: 2000,
        dbName: 'accounting-app'
      };

      global.mongoose.promise = mongoose.connect(process.env.MONGODB_URI, opts);
    }

    global.mongoose.conn = await global.mongoose.promise;
    isConnected = true;

    // Only add event listeners once
    if (!mongoose.connection.listenerCount('connected')) {
      mongoose.connection.once('connected', () => {
        console.log('MongoDB connected successfully');
      });
    }

    return global.mongoose.conn;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

export default connectDB;