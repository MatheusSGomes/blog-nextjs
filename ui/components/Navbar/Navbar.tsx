import { useSession, signOut, signIn } from 'next-auth/react';
import Link from "next/link";

export default function Navbar() {
    const { data: session } = useSession();

    return (
        <div className="p-4 mt-5 mb-10 border-none rounded-xl bg-white">
            <div className="flex items-center justify-between">
            <Link className="text-black text-2xl font-medium" href="/">Meu Blog</Link>

            <div className="flex flex-row gap-2">
                <Link className="text-white bg-black p-2 rounded-md" href="/">Meus posts</Link>

                <Link className="text-white bg-black p-2 rounded-md" href="posts/publish">Novo post</Link>

                {
                    session?.user ?
                    <a className="text-white bg-black p-2 rounded-md cursor-pointer" onClick={() => signOut()}>Sign Out</a> :
                    <a className="text-white bg-black p-2 rounded-md cursor-pointer" onClick={() => signIn()}>Sign In</a>
                }
            </div>
            </div>
        </div>
    );
  }