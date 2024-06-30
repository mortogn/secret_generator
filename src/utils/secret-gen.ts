import crypto from "node:crypto";

export function generateBase64String(length: number) {
  const buffer = crypto.randomBytes(length);
  return buffer.toString("base64").slice(0, length);
}
