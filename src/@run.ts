import {devRun} from '@digshare/script';

import main from './index';

devRun(main, {
  payload: {},
}).catch(console.error);
