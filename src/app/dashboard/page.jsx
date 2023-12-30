"use client";

import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("/api/profile");
      setUser(await response.json());
    }

    getUser();
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <div className="flex flex-col items-center bg-gray-900 p-4 rounded-lg gap-3">
        <h2 className="text-3xl font-semibold mb-5">Dashboard</h2>
        <pre>
          {user ? JSON.stringify(user, null, 2) : "Loading..."}
        </pre>
        <button
          className="border rounded-lg p-2 hover:bg-slate-900"
          onClick={() => signOut()}
        >
          Sing out
        </button>
      </div>
    </div>
  )
}

export default Dashboard;
