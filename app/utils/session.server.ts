import { createCookieSessionStorage, Session } from "@remix-run/node";

// セッションの秘密鍵（本番環境では環境変数から取得するべきです）
const sessionSecret = process.env.SESSION_SECRET || "default_secret_key";

// セッションストレージの設定
const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "line_bot_session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30日
    httpOnly: true,
  },
});

// セッションの取得
export async function getSession(request: Request): Promise<Session> {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

// セッションの作成
export async function createSession(data: Record<string, any