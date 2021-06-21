import fs from 'fs';

const WalkDirAndCollectJsFiles = (dir) => {
  const files = [];
  fs.readdirSync(dir).forEach((file) => {
    if (file !== 'index.js') {
      if (file.match(/\.js$/) !== null) {
        files.push(`${dir}/${file}`);
      } else if (fs.lstatSync(`${dir}/${file}`)) {
        files.push(...WalkDirAndCollectJsFiles(`${dir}/${file}`));
      }
    }
  });
  return files;
};

module.exports.WalkDirAndCollectJsFiles = WalkDirAndCollectJsFiles;
