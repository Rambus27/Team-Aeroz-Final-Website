export default async () => {
  return new Response(
    JSON.stringify({ ok: true, source: "netlify-edge-function" }),
    {
      status: 200,
      headers: {
        "content-type": "application/json"
      }
    }
  );
};
