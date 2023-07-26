import Link from "next/link";
// import Image from "next/image";

export default function Signup() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6  my-6 bg-white rounded-md shadow-md lg:max-w-xl">
        {/* <Image className="justify-center" src="/assets/logo.png" width={164} height={32} alt="Logo" /> */}
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-[#d8a642]">
          Create An Account To Vote
        </h1>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-800"
            >
              Name
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-800"
            >
              Matric Number
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-800"
            >
              Email
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-800"
            >
              Mobile Number
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-800"
            >
              Re-Enter Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <Link
            href="/forget"
            className="text-xs text-[#d8a642] hover:underline"
          >
            Forget Password?
          </Link>
          <div className="mt-2">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-[#d8a642] focus:outline-none focus:bg-gray-600">
              Sign up
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-center text-gray-700">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-[#d8a642] hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
