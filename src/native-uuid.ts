import { randomUUID as v4 } from 'crypto';

(async () => {
  for (let i = 0; i < 10_000_000; i++) {
    v4();
  }
})()

