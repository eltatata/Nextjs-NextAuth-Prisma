import Link from "next/link"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

async function NavBar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="p-5 bg-gray-900 w-full">
      <ul className="flex justify-end gap-3 ">
        <li><Link className='border p-2 rounded-lg' href={"/"}>Home</Link></li>
        {session && (
          <li><Link className='border p-2 rounded-lg' href={"/dashboard"}>Dashboard</Link></li>
        )}
        <li><Link className='border p-2 rounded-lg' href={"/auth/signin"}>Sign in</Link></li>
        <li><Link className='border p-2 rounded-lg' href={"/auth/signup"}>Sign up</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar