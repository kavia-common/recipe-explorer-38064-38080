#!/usr/bin/env node
/**
 * PUBLIC_INTERFACE
 * A tiny HTTP server that returns 200 "ok" on any request.
 * Useful for CI healthchecks where we don't want to start a heavy dev server.
 */
const http = require('http');

const port = process.env.REACT_APP_PORT || process.env.PORT || 3000;
const host = '0.0.0.0';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('ok');
});

server.listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.log(`Health server listening on http://${host}:${port}`);
});
