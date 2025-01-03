import { beforeAll, afterAll, afterEach } from '@jest/globals';
import { TextEncoder, TextDecoder } from 'util';

// Add TextEncoder and TextDecoder to global scope
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;