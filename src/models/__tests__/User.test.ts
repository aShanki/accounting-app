import mongoose from 'mongoose';
import User from '../User';

describe('User Model Test', () => {
  beforeAll(async () => {
    if (!process.env.MONGODB_URI) {
      process.env.MONGODB_URI = 'mongodb://localhost:27017/test_db';
    }
    await mongoose.connect(process.env.MONGODB_URI);
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  afterEach(async () => {
    await User.deleteMany({});
  });

  it('should create a new user successfully', async () => {
    const validUser = {
      name: 'Test User',
      email: 'test@test.com',
      password: 'password123'
    };

    const newUser = await User.create(validUser);
    expect(newUser.name).toBe(validUser.name);
    expect(newUser.email).toBe(validUser.email);
    expect(newUser.password).not.toBe(validUser.password); // Password should be hashed
  });

  it('should fail to create user without required fields', async () => {
    const invalidUser = {
      name: 'Test User'
    };

    try {
      await User.create(invalidUser);
      fail('Should not create user without required fields');
    } catch (error: any) {
      expect(error).toBeDefined();
      expect(error.errors.email).toBeDefined();
      expect(error.errors.password).toBeDefined();
    }
  });

  it('should fail to create user with invalid email', async () => {
    const invalidUser = {
      name: 'Test User',
      email: 'invalid-email',
      password: 'password123'
    };

    try {
      await User.create(invalidUser);
      fail('Should not create user with invalid email');
    } catch (error: any) {
      expect(error).toBeDefined();
      expect(error.errors.email).toBeDefined();
    }
  });

  it('should correctly compare passwords', async () => {
    const password = 'password123';
    const user = await User.create({
      name: 'Test User',
      email: 'test@test.com',
      password
    });

    const isMatch = await user.comparePassword(password);
    expect(isMatch).toBe(true);

    const isNotMatch = await user.comparePassword('wrongpassword');
    expect(isNotMatch).toBe(false);
  });
});