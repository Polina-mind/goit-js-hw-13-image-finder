import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import { defaultModules } from '@pnotify/core/dist/PNotify.js';
import { defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import { alert } from '@pnotify/core';

defaults.styling = 'material';
defaults.icons = 'material';

defaultModules.set(PNotifyMobile, {});

const emptyStringAlert = alert({
  text: 'Find nothing! Please input your query!',
  delay: 2000,
});

const invalidRequestAlert = alert({
  text: 'Invalid request, try again!',
  delay: 2000,
});

const noPicturesAlert = alert({
  text: 'No more pictures...',
  delay: 2000,
});

export { emptyStringAlert, invalidRequestAlert, noPicturesAlert };
