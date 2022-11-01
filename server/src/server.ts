import Fastify from "fastify";

async function boostrap() {
  const fastify = Fastify({
    logger: true,
  });

  fastify.get("/pools/count", () => {
    return { count: 4 };
  });

  await fastify.listen({ port: 3333 });
}

boostrap();
