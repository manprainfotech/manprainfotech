import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = String(formData.get("password") || "");
  const adminPassword = process.env.ADMIN_PASSWORD || "";

  if (!adminPassword || password !== adminPassword) {
    return NextResponse.redirect(new URL("/admin/login?error=1", request.url));
  }

  const response = NextResponse.redirect(
    new URL("/admin/products", request.url)
  );
  response.cookies.set({
    name: "admin_auth",
    value: password,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
  return response;
}
