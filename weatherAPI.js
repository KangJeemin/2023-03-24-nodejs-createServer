const { parseStringPromise } = require('xml2js');

fetch('https://www.kma.go.kr/wid/queryDFSRSS.jsp?zone=3017063000')
  .then(res => res.text())
  .then(xml => {
    parseStringPromise(xml)
      .then(result => {
        console.log(result.rss.channel[0].item[0].description[0].header[0].tm);
      })
      .catch(err => {
        console.error(err);
      });
  })
  .catch(err => {
    console.error(err);
  });