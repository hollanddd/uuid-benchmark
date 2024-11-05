# UUID Benchmark

This is a benchmark for UUID generation in Typescript. It compares the performance of different UUID generation libraries.
The libraries that are compared are:

- [uuid](https://www.npmjs.com/package/uuid)
- [crypto](https://nodejs.org/api/crypto.html)

## Project setup

```bash
npm install
npm run build
```

## How to run the Benchmark

Install [hyperfine](https://github.com/sharkdp/hyperfine) and run the following command:

```bash
hyperfine 'node ./dist/native-uuid.js' 'node ./dist/lib-uuid.js'
```

Optionally running `npm start` will build and run the benchmark.
