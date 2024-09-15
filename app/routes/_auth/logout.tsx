import { ActionFunction, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { destroySession, getSession } from "~/services/session.server";

// ログアウト処理を行うアクション関数
export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  
  // セッションを破棄してログアウト
  return redirect("/login", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};

// ログアウトページのコンポーネント
export default function Logout() {
  return (
    <div className="logout-container">
      <h1>ログアウト</h1>
      <p>ログアウトしてもよろしいですか？</p>
      <Form method="post">
        <button type="submit" className="logout-button">ログアウト</button>
      </Form>
    </div>
  