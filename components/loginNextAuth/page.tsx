'use client'
import { useEffect } from "react"
import styles from './page.module.css'
import { useSession, signOut, signIn } from "next-auth/react"
import { useRouter, usePathname } from 'next/navigation'

export default function Component() {

  const { data: session, status } = useSession()
  const router = useRouter()
  const pathname = usePathname()

  if (session) {
    return (
      <>
         <span>{session.user?.email || "" }</span>
        <button className={styles.authButton} onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <button className={styles.authButton} onClick={() => signIn("google")}>Sign in</button>
    </>
  )
}