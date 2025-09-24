export default {
  async fetch(request, env) {
    const index = request.url.indexOf('?');
    const query = index !== -1 ? request.url.slice(index) : '';
    const params = new URLSearchParams(query);
    const inputs = {
      prompt: params.get('p') || "cyberpunk cat",
    };

    const response = await env.AI.run(
      "@cf/stabilityai/stable-diffusion-xl-base-1.0",
      inputs,
    );

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  },
} satisfies ExportedHandler<Env>;
