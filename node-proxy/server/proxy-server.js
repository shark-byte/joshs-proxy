const express = require('express');
const axios = require('axios');
const app = express();

const proxyHost = 'proxy';

app.get('/restaurants/:id', async (req, res) => {
  const nearbyReq = await axios.get(`http://${proxyHost}:8888/nearby/restaurants/${req.params.id}`);
  const nearbyComponent = nearbyReq.data;
  const html = `
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <link rel="stylesheet" type="text/css" href="/styles.css">
      <link href="https://fonts.googleapis.com/css?family=Raleway:400,700|Roboto:400,700" rel="stylesheet">
      <!-- <link rel="shortcut icon" href="http://res.cloudinary.com/madlicorice/image/upload/v1520448614/WeGot-favicon.ico"> -->
      <title>WeGot</title>
    </head>
    <body>
      <div id="gallery-app"></div>
      <div id="midsection">
        <div id="overview-app"></div>
        <div id="sidebar-app"></div>
      </div>
      <div id="recommendations-app">
        ${nearbyComponent}
      </div>

      <script src="/nearby/bundle.js"></script>
      <!-- <script src="/overview/bundle.js"></script> -->
      <!-- <script src="/sidebar/bundle.js"></script> -->
      <!-- <script src="/recommendations/bundle.js"></script> -->
    </body>
    </html>
  `;

  res.send(html);
});

app.listen(8080, () => console.log('Node proxy listening on 8080!'));