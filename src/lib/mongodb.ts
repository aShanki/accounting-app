import mongoose from 'mongoose';

declare global {
  var mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (!process.env.MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      directConnection: true,
      serverSelectionTimeoutMS: 2000,
      dbName: 'accounting-app'
    };

    // Only add event listeners once
    if (!mongoose.connection.hasListeners('connected')) {
      mongoose.connection.once('connected', () => {
        console.log('MongoDB connected successfully');
      });

      mongoose.connection.once('error', (err) => {
        console.error('MongoDB connection error:', err);
      });

      mongoose.connection.once('disconnected', () => {
        console.log('MongoDB disconnected');
      });
    }

    cached.promise = mongoose.connect(process.env.MONGODB_URI, opts);
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;