import { FetchResponse } from "@tabletop-playground/api";
import { mockFetch } from "./mock-fetch";
import * as http from "http";

it("fetch", async () => {
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
  const result: FetchResponse = await mockFetch(url, options);

  server.close();

  expect(serveCount).toEqual(1);
  expect(result.ok).toEqual(true);
  expect(result.text()).toEqual(response);
});
