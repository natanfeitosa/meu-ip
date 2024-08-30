import getClientIp from "./getClientIp";

const server = Bun.serve({
  fetch(req): Response | Promise<Response> {
    //@ts-ignore
    return Response.json({ ip: getClientIp(req) });
  },

  // Optional port number - the default value is 3000
  port: process.env.PORT || 3000,
});

console.log(`Your server is listening at: ${server.url}`);
