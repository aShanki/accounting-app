import { TextEncoder, TextDecoder } from 'util';
import fetch from 'node-fetch';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
global.fetch = fetch;