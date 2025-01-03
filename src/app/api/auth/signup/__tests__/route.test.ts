import { createMocks } from 'node-mocks-http';
import mongoose from 'mongoose';
import { POST as signupHandler } from '../route';
import User from '@/models/User';

describe('Auth API - Signup', () => {
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

  beforeEach(async () => {
    await User.deleteMany({});
  });

  it('should create a new user successfully', async () => {
    const testUser = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123'
    };

    const { req } = createMocks({
      method: 'POST',
      body: testUser
    });

    const response = await signupHandler(req);
    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data.user).toBeDefined();
    expect(data.user.email).toBe(testUser.email);
    expect(data.user.name).toBe(testUser.name);
    expect(data.user.password).toBeUndefined();
  });

  it('should reject invalid email', async () => {
    const testUser = {
      name: 'Test User',
      email: 'invalid-email',
      password: 'password123'
    };

    const { req } = createMocks({
      method: 'POST',
      body: testUser
    });

    const response = await signupHandler(req);
    expect(response.status).toBe(400);
  });

  it('should reject short passwords', async () => {
    const testUser = {
      name: 'Test User',
      email: 'test@example.com',
      password: '123'
    };

    const { req } = createMocks({
      method: 'POST',
      body: testUser
    });

    const response = await signupHandler(req);
    expect(response.status).toBe(400);
  });

  it('should prevent duplicate emails', async () => {
    const testUser = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123'
    };

    // Create first user
    const { req: req1 } = createMocks({
      method: 'POST',
      body: testUser
    });
    await signupHandler(req1);

    // Try to create second user with same email
    const { req: req2 } = createMocks({
      method: 'POST',
      body: testUser
    });
    const response = await signupHandler(req2);
    
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toBe('Email already registered');
  });
});