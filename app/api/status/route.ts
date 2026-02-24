export async function GET() {
  return Response.json({
    ok: true,
    service: "nsi-web",
    time: new Date().toISOString(),
  });
}