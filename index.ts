const server = Bun.serve({
  fetch(req: Request): Response | Promise<Response> {
    const { port, ...ip } = this.requestIP(req) || { port: undefined };
    return Response.json(ip);
  },

  // Optional port number - the default value is 3000
  port: process.env.PORT || 3000,
});

console.log(`Your server is listening at: ${server.url}`);
