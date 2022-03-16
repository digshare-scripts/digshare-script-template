import {script} from '@digshare/script';

interface Payload {}

interface Storage {}

export default script<Payload, Storage>(async (payload, {storage}) => {
  return {
    content: '这是一条价值不菲的消息！',
  };
});
