import { describe, it, expect, beforeAll, afterAll, afterEach } from '@jest/globals';
import { connect, clearDatabase, closeDatabase } from '../../lib/db-test-helper';
import Location from '../Location';

beforeAll(async () => await connect());
afterAll(async () => await closeDatabase());
afterEach(async () => await clearDatabase());

describe('Location Model', () => {
  it('should create a new location successfully', async () => {
    const validLocation = {
      name: 'GCash',
      description: 'Digital wallet',
      currentBalance: 1000
    };

    const location = await Location.create(validLocation);
    expect(location.name).toBe(validLocation.name);
    expect(location.currentBalance).toBe(validLocation.currentBalance);
    expect(location.description).toBe(validLocation.description);
  });

  it('should fail to create location without required name', async () => {
    const invalidLocation = {
      description: 'Digital wallet',
      currentBalance: 1000
    };

    await expect(Location.create(invalidLocation)).rejects.toThrow();
  });

  it('should not allow duplicate location names', async () => {
    const locationData = {
      name: 'GCash',
      currentBalance: 1000
    };

    await Location.create(locationData);
    await expect(Location.create(locationData)).rejects.toThrow();
  });

  it('should default currentBalance to 0 if not provided', async () => {
    const location = await Location.create({
      name: 'Cash'
    });

    expect(location.currentBalance).toBe(0);
  });
});