import { v4 } from 'uuid'; 

(async () => {
  for (let i = 0; i < 10_000_000; i++) {
    v4();
  }
})()

