import {script} from '@digshare/script';

import fetch from 'node-fetch';
import * as Cheerio from 'cheerio';

interface Payload {}

interface Storage {}

export default script<Payload, Storage>(async (payload, {storage}) => {
  // 使用 fetch 获取页面内容。
  // let html = await fetch('https://www.example.com').then(response =>
  //   response.text(),
  // );

  // 使用 Cheerio 解析 HTML 内容。
  // let $ = Cheerio.load(html);

  return {
    content: '这是一条价值不菲的消息！',
  };
});
