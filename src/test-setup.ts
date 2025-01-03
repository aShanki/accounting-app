import { TextEncoder, TextDecoder } from 'util';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Session } from 'next-auth';

// Add TextEncoder and TextDecoder to global scope
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;

// Mock Next Auth
jest.mock("next-auth", () => ({
  getServerSession: jest.fn(() => null),
}));

// Mock Next Auth Session
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeValidMongoId(): R;
    }
  }
}

// Add custom jest matchers
expect.extend({
  toBeValidMongoId(received) {
    const pass = mongoose.Types.ObjectId.isValid(received);
    if (pass) {
      return {
        message: () => `expected ${received} not to be a valid Mongo ID`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be a valid Mongo ID`,
        pass: false,
      };
    }
  },
});

// MongoDB Memory Server setup
let mongod: MongoMemoryServer;

beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
});

beforeEach(async () => {
  // Clear all collections before each test
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
});