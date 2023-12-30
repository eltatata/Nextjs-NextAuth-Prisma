import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex items-center justify-center h-[70vh]">
      <div className='flex flex-col items-center justify-between w-[400px] h-[300px] bg-gray-900 p-10 rounded-lg'>
        <h2 className='text-3xl font-semibold'>
          Nextjs and Prisma
        </h2>
        <p className='my-4'>
          Basic example of how to use NextAuth in a nextjs and prisma project as an ORM to connect to a database
        </p>
        <div className='flex gap-3'>
          <Link className='border p-2 rounded-lg' href={"/auth/signin"}>Sing in</Link>
          <Link className='border p-2 rounded-lg' href={"/auth/signup"}>Sing up</Link>
        </div>
      </div>
    </main>
  )
}
