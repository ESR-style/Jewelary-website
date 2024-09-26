import { useRouteError } from "react-router-dom";

export default function Errorpage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-700 p-4">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-xl mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-lg mb-4">
        <i>{error?.statusText || error?.message || "Unknown error"}</i>
      </p>
      <p className="text-base">
        Please check the URL or go back to the <a href="/" className="text-blue-500 hover:underline">homepage</a>.
      </p>
    </div>
  );
}