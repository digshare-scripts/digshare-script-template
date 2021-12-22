// @ts-nocheck

const {exec} = require('child_process');

const DIGSHARE_API = 'https://api.staging.dingshao.cn/v1';
const DIGSHARE_REGISTRY = 'https://script.staging.dingshao.cn/registry/';

let child = exec(`npm publish --registry=${DIGSHARE_REGISTRY}`, {
  env: {
    DIGSHARE_API,
    DIGSHARE_REGISTRY,
    ...process.env,
  },
});

child.on('exit', code => process.exit(code ?? 0));

process.stdin.pipe(child.stdin);

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
