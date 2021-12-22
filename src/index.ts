import {script} from '@digshare/script';

interface StorageData {}

export default script<StorageData>(async function (_payload, _context) {
  return {
    content: '欢迎欢迎，热烈欢迎',
    images: [],
    links: [],
  };
});
