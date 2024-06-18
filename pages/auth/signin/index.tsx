// "use client";

import { signIn } from "next-auth/react";
import { useRef, useState } from "react";

export default function SignInPage() {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  // const userName = useRef("");
  // const password = useRef("");

  const onSubmit = async () => {
    console.log(usernameValue, passwordValue)

    const result = await signIn("credentials", {
      username: usernameValue,
      password: passwordValue,
      redirect: true,
      callbackUrl: "/"
    })

    console.log(result);
  }

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
              className="text-black bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-600"
              placeholder="Email address"
              value={usernameValue}
              onChange={(e) => setUsernameValue(e.target.value)}
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              required
              className="text-black bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-600"
              placeholder="Password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
          </div>
          <div className="!mt-10">
            <button
              onClick={onSubmit}
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