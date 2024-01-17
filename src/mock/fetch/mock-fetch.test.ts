import { FetchResponse } from "@tabletop-playground/api";
import { mockFetch } from "./mock-fetch";
import * as http from "http";

it("fetch (ok)", async () => {
  // Setup a local HTTP server.
  let serveCount = 0;
  const response: string = "hello from localhost!";
  const requestListener = (
    req: http.IncomingMessage,
    res: http.ServerResponse
  ) => {
    serveCount++;
    res.writeHead(200);
    res.end(response);
  };
  const server = http.createServer(requestListener);
  const port = 8013;
  server.listen(port, "localhost");

  // Fetch!
  const url = `http://localhost:${port}/path-here`;
  const options = {};

  let successCount = 0;
  let rejectCount = 0;
  let result: FetchResponse | undefined;
  const onSuccess = (arg: FetchResponse) => {
    successCount++;
    result = arg;
  };
  const onReject = (arg: FetchResponse) => {
    rejectCount++;
    result = arg;
  };

  await mockFetch(url, options).then(onSuccess, onReject);

  server.close();

  expect(serveCount).toEqual(1);
  expect(successCount).toEqual(1);
  expect(rejectCount).toEqual(0);
  expect(result?.ok).toEqual(true);
  expect(result?.status).toEqual(200);
  expect(result?.text()).toEqual(response);
});

it("fetch (err)", async () => {
  // Setup a local HTTP server.
  let serveCount = 0;
  const requestListener = (
    req: http.IncomingMessage,
    res: http.ServerResponse
  ) => {
    serveCount++;
    res.writeHead(404);
    res.end();
  };
  const server = http.createServer(requestListener);
  const port = 8013;
  server.listen(port, "localhost");

  // Fetch!
  const url = `http://localhost:${port}/path-here`;
  const options = {};

  let successCount = 0;
  let rejectCount = 0;
  let result: FetchResponse | undefined;
  const onSuccess = (arg: FetchResponse) => {
    successCount++;
    result = arg;
  };
  const onReject = (arg: FetchResponse) => {
    rejectCount++;
    result = arg;
  };

  await mockFetch(url, options).then(onSuccess, onReject);

  server.close();

  expect(serveCount).toEqual(1);
  expect(successCount).toEqual(0);
  expect(rejectCount).toEqual(1);
  expect(result?.ok).toEqual(false);
  expect(result?.status).toEqual(404);
});
