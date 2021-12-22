// @ts-nocheck

const {exec} = require('child_process');
const fs = require('fs');

const DIGSHARE_API = 'https://api.staging.dingshao.cn/v1';
const DIGSHARE_REGISTRY_URL = 'https://script.staging.dingshao.cn/registry/';

if (process.env['DIGSHARE_REGISTRY']) {
  fs.writeFileSync('.npmrc', process.env['DIGSHARE_REGISTRY']);
}

let child = exec(`npm publish --registry=${DIGSHARE_REGISTRY_URL}`, {
  env: {
    DIGSHARE_API,
    DIGSHARE_REGISTRY_URL,
    ...process.env,
  },
});

child.on('exit', code => process.exit(code ?? 0));

process.stdin.pipe(child.stdin);

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
