import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const pagePath = fileURLToPath(new URL('../demo-login.html', import.meta.url));
const port = Number(process.env.PORT ?? 4173);

const server = createServer(async (request, response) => {
  if (request.url === '/favicon.ico') {
    response.writeHead(204);
    response.end();
    return;
  }

  if (request.url !== '/' && request.url !== '/demo-login.html') {
    response.writeHead(404);
    response.end('Not found');
    return;
  }

  try {
    const page = await readFile(pagePath);
    response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    response.end(page);
  } catch (error) {
    console.error('Unable to serve the demo login page:', error);
    response.writeHead(500);
    response.end('Unable to load demo page');
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Demo login page running at http://127.0.0.1:${port}`);
});
