export const siteName = "Manpra Infotech";

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:5000";
}
