export async function GET() {
  return Response.json({
    ok: true,
    status: "healthy",
    time: new Date().toISOString(),
  });
}
