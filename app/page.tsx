import SignIn from "@/components/signin/signin";
import { SignOut } from "@/components/signin/signout";
import styles from "./page.module.css";
import Session from "@/components/signin/session";
import Header from "@/components/header/header";
import NextAuthProvider from "@/context/NextAuthContext";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <NextAuthProvider>
        <Header />
        <Session />
        <SignIn />
        <SignOut />
        </NextAuthProvider>
      </main>
    </div>
  );
}
