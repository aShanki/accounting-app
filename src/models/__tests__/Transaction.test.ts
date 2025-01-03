import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import Transaction from '../Transaction';
import Location from '../Location';

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  await Transaction.deleteMany({});
  await Location.deleteMany({});
});

describe('Transaction Model', () => {
  let locationId: string;

  beforeEach(async () => {
    const location = await Location.create({
      name: 'GCash',
      currentBalance: 1000
    });
    locationId = location._id.toString();
  });

  it('should create a new transaction successfully', async () => {
    const validTransaction = {
      date: new Date(),
      amount: 100,
      note: 'Test transaction',
      type: 'INCOME',
      locationId: locationId,
      runningBalance: 1100 // Initial balance + transaction amount
    };

    const transaction = await Transaction.create(validTransaction);
    expect(transaction.amount).toBe(validTransaction.amount);
    expect(transaction.type).toBe(validTransaction.type);
    expect(transaction.locationId.toString()).toBe(validTransaction.locationId);
    expect(transaction.runningBalance).toBe(validTransaction.runningBalance);

    // Verify location balance was updated
    const updatedLocation = await Location.findById(locationId);
    expect(updatedLocation?.currentBalance).toBe(1100);
  });

  it('should fail to create transaction without required fields', async () => {
    const invalidTransaction = {
      date: new Date()
    };

    await expect(Transaction.create(invalidTransaction)).rejects.toThrow();
  });

  it('should validate transaction type is either INCOME or EXPENSE', async () => {
    const invalidTransaction = {
      date: new Date(),
      amount: 100,
      note: 'Test transaction',
      type: 'INVALID',
      locationId: locationId,
      runningBalance: 1000
    };

    await expect(Transaction.create(invalidTransaction)).rejects.toThrow();
  });

  it('should require a valid location reference', async () => {
    const invalidLocationId = new mongoose.Types.ObjectId();
    const transaction = {
      date: new Date(),
      amount: 100,
      note: 'Test transaction',
      type: 'INCOME',
      locationId: invalidLocationId,
      runningBalance: 1000
    };

    await expect(Transaction.create(transaction)).rejects.toThrow();
  });
});