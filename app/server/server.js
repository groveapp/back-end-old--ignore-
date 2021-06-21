import process from 'process';

import app from './app';

process.on('uncaughtException', (err) => {
  /* eslint-disable-next-line no-console */
  console.log(err);
});

/* Start Express server */
app.listen(8080, () => {
  /* eslint-disable-next-line no-console */
  console.log(`🙌 App running on port 8080 🙌`);
});
