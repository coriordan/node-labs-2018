import http from 'http';
import dotenv from 'dotenv';
import greeting from './greetings.js';

dotenv.config();

const port = process.env.PORT;

const server = http.createServer((req, res) => {
  let lang = req.headers['accept-language'];
  const defaultLang = 'en';
  if (!greeting[lang]) lang = defaultLang;

  const response = {
    lang: lang,
    message: greeting[lang],
  };
  res.writeHead(200, {'Content-type': 'text/plain',
                      'Content-language': response.lang});
  res.end(response.message);
});

server.listen(port);

console.log(`Server running at ${port}`);
