
import { signIn, auth } from "@/auth"
 
export default async function SignIn() {

  const session = await auth()

  if (!session?.user) return null

  console.log(session.user)
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  )
} 