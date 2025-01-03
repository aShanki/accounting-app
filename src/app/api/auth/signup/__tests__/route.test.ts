import { createMocks } from 'node-mocks-http';
import { POST as signupHandler } from '@/app/api/auth/signup/route';
import User from '@/models/User';

describe('Auth API', () => {
  describe('POST /api/auth/signup', () => {
    it('should create a new user successfully', async () => {
      const { req, res } = createMocks({
        method: 'POST',
        body: {
          name: 'Test User',
          email: 'test@example.com',
          password: 'password123'
        },
      });

      await signupHandler(req);

      const jsonResponse = await res._getJSONData();
      expect(res._getStatusCode()).toBe(201);
      expect(jsonResponse.user).toBeDefined();
      expect(jsonResponse.user.email).toBe('test@example.com');
      expect(jsonResponse.user.name).toBe('Test User');
      expect(jsonResponse.user.password).toBeUndefined();

      // Verify user was created in database
      const user = await User.findOne({ email: 'test@example.com' });
      expect(user).toBeTruthy();
      expect(user?.name).toBe('Test User');
    });

    it('should return 400 for missing required fields', async () => {
      const { req, res } = createMocks({
        method: 'POST',
        body: {
          email: 'test@example.com',
          // missing name and password
        },
      });

      await signupHandler(req);

      expect(res._getStatusCode()).toBe(400);
      const jsonResponse = await res._getJSONData();
      expect(jsonResponse.error).toBe('Missing required fields');
    });

    it('should return 400 for invalid email format', async () => {
      const { req, res } = createMocks({
        method: 'POST',
        body: {
          name: 'Test User',
          email: 'invalid-email',
          password: 'password123'
        },
      });

      await signupHandler(req);

      expect(res._getStatusCode()).toBe(400);
      const jsonResponse = await res._getJSONData();
      expect(jsonResponse.error).toBeDefined();
    });

    it('should return 400 for password too short', async () => {
      const { req, res } = createMocks({
        method: 'POST',
        body: {
          name: 'Test User',
          email: 'test@example.com',
          password: 'short'
        },
      });

      await signupHandler(req);

      expect(res._getStatusCode()).toBe(400);
      const jsonResponse = await res._getJSONData();
      expect(jsonResponse.error).toBe('Password must be at least 8 characters');
    });

    it('should return 400 for duplicate email', async () => {
      // Create a user first
      await User.create({
        name: 'Existing User',
        email: 'test@example.com',
        password: 'password123'
      });

      const { req, res } = createMocks({
        method: 'POST',
        body: {
          name: 'Test User',
          email: 'test@example.com',
          password: 'password123'
        },
      });

      await signupHandler(req);

      expect(res._getStatusCode()).toBe(400);
      const jsonResponse = await res._getJSONData();
      expect(jsonResponse.error).toBe('Email already registered');
    });
  });
});