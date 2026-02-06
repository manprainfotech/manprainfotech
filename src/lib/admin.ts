import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "";
}

export function isAdmin() {
  const password = getAdminPassword();
  if (!password) return false;
  const token = cookies().get("admin_auth")?.value;
  return token === password;
}

export function requireAdmin() {
  if (!isAdmin()) {
    redirect("/admin/login");
  }
}
