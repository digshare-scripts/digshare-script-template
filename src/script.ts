import {script} from '@digshare/script';

interface State {
  count: number;
}

export default script<State>(async (state = {count: 0}) => {
  state.count += 1;

  return {
    // 消息内容
    message: `这是第 ${state.count} 次执行`,
    // 更新状态
    state,
  };
});
