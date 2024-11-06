import { signIn, auth } from "@/auth"

interface User {
  image: string | null;
}

interface Session {
  user: User | null;
}

export default async function SignIn() {
  const session = await auth();

  if (!session?.user) return null;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await signIn("google");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {session.user.image ? (
          <img src={session.user.image} alt="User Avatar" />
        ) : (
          <span>No Avatar</span>
        )}
      </div>
      <button type="submit">Signin with Google</button>
    </form>
  );
}