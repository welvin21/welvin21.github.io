const fs = require('fs');

const siteConfigPath = `${__dirname}/../siteConfig.json`;

fs.readFile(
  siteConfigPath,
  'utf8',
  (readFileCallback = (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const siteConfig = JSON.parse(data);

      const [date, time] = new Date()
        .toLocaleString('en-GB', { timeZone: 'UTC' })
        .split(' ');
      siteConfig.lastUpdated = `${date} at ${time} UTC`;
      siteConfigJSON = JSON.stringify(siteConfig);
      fs.writeFile(siteConfigPath, siteConfigJSON, 'utf8', err => {
        console.log(
          err ? err : 'Successfully updated last updated field in siteConfig'
        );
      });
    }
  })
);
