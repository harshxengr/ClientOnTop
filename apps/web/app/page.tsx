"use client";

import { useMutation, useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.addUser);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <h2>
        {JSON.stringify(users, null, 2)}
      </h2>
      <div>
        <Button onClick={() => addUser()}>Add User</Button>
      </div>
    </div>
  )
}
