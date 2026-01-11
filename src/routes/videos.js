import { DatabasePostgres } from "../database/database-postgres.js";

const database = new DatabasePostgres();

export async function videosRouter(server) {
  server.post("/videos", async (request, reply) => {
    const { title, description, duration } = request.body;

    await database.create({
      title,
      description,
      duration,
    });

    return reply.status(201).send("vídeo criado com sucesso!");
  });

  server.get("/videos", async (request) => {
    const search = request.query.search;
    const videos = await database.list(search ?? "");

    return videos;
  });

  server.put("/videos/:id", async (request, reply) => {
    const id = request.params.id;
    const { title, description, duration } = request.body;

    await database.update(id, {
      title,
      description,
      duration,
    });

    reply.status(204).send();
  });

  server.delete("/videos/:id", async (request, reply) => {
    const id = request.params.id;

    await database.delete(id);

    reply.status(204).send();
  });
}
