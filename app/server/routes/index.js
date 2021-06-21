import { WalkDirAndCollectJsFiles } from '../utils/utils';

export default (app) => {
  WalkDirAndCollectJsFiles(`${__dirname}`).forEach((file) => {
    /* eslint-disable-next-line */
    const addFileRoutes = require(file).default;

    if (typeof addFileRoutes === 'function') {
      addFileRoutes(app);
    } else {
      /* eslint-disable-next-line no-console */
      console.log(`🚨 ${file} did not export a function to add routes 🚨`);
    }
  });
};
