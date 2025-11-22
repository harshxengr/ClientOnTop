"use client";

import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.addUser);

  return (
    <>
      <Authenticated>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <h2>
            {JSON.stringify(users, null, 2)}
          </h2>
          <div>
            <Button onClick={() => addUser()}>Add User</Button>
          </div>
        </div>
        <UserButton/>
      </Authenticated>
      <Unauthenticated>
        <SignInButton/>
      </Unauthenticated>
    </>
  )
}
