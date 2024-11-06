
import { signIn, auth } from "@/auth"
 
export default async function SignIn() {

  const session = await auth()

  if (!session?.user) return null
  const image = session.user.image
  return (
    <>
    <div>
      <img src={image} alt="User Avatar" />
    </div>
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
    </>
    
  )
} 