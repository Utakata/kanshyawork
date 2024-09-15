import { useLocation } from "@remix-run/react";
import { LoaderFunctionArgs, json } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  // ステータスコード404を設定
  return json({}, { status: 404 });
}

export default function CatchAll() {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">404 - ページが見つかりません</h1>
      <p className="text-xl mb-8">
        申し訳ありませんが、お探しのページ「{location.pathname}」は存在しません。
      </p>
      <a
        href="/"
        className="px-4 py-2 bg-blue-500 text-white rounde