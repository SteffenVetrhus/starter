import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to your app" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Start building your app here
        </p>
      </div>
    </div>
  );
}
