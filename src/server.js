const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

function onRequest(request, response) {
  console.log(request.url);

  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/page2':
      htmlHandler.getPage2(request, response);
      break;
    case '/page3':
      htmlHandler.getPage3(request, response);
      break;
    case '/party.mp4':
      mediaHandler.getMedia(request, response, 'party.mp4', 'video/mp4');
      break;
    case '/bird.mp4':
      mediaHandler.getMedia(request, response, 'bird.mp4', 'video/mp4');
      break;
    case '/bling.mp3':
      mediaHandler.getMedia(request, response, 'bling.mp3', 'audio/mp3');
      break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
}

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
