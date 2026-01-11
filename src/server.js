import { fastify } from "fastify";
// import { DatabaseMemory } from "./database-memory.js";
import { videosRouter } from "./routes/videos.js";

const host = "127.0.0.1";
const port = 3132;
const server = fastify();

server.register(videosRouter);

server.listen({
  host: host,
  port: process.env.PORT ?? port,
});
