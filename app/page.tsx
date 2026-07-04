import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-[400px] text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Todo App
        </h1>

        <p className="text-gray-600 mb-8">
          Organize your tasks and boost your productivity.
        </p>

        <div className="space-y-4">
          <Link
            href="/signin"
          className="block w-full border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white py-3 rounded-lg text-lg font-semibold transition duration-300 text-center"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="block w-full border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white py-3 rounded-lg text-lg font-semibold transition duration-300 text-center"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}