import sharp from 'sharp';

sharp('images/copy-file-name.svg')
  .resize(128, 128)
  .png()
  .toFile('images/copy-file-name.png')
  .then(() => console.log('Icon converted successfully'))
  .catch(err => console.error('Error converting icon:', err));