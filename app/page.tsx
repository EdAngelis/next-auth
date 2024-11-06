import SignIn from "@/app/signin/signin";
import {SignOut} from "@/app/signin/signout";
import styles from "./page.module.css";
import Session from "@/app/signin/session";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Session />
        <SignIn />
        <SignOut />
      </main>
    </div>
  );
}
