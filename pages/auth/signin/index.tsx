export default function SignInPage() {
  return (
    <>
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <form className="space-y-6 max-w-md max-md:mx-auto w-full">
          <h3 className="text-3xl font-extrabold mb-8 max-md:text-center">
            Sign in
          </h3>
          <div>
            <input
              name="email"
              type="email"
              required
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-600"
              placeholder="Email address"
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              required
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-600"
              placeholder="Password"
            />
          </div>
          <div className="!mt-10">
            <button
              type="button"
              className="w-full py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700">
              Log in
            </button>
          </div>
        </form>
    </div>
    </>
  );
}