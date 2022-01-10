import {Script} from '@digshare/script';

interface Storage {}

interface Payload {}

const script: Script<Storage, Payload> = async function (_payload, _context) {
  return {
    content: '欢迎欢迎，热烈欢迎',
    // images: [],
    // links: [],
    // tags: []
  };
};

export default script;
