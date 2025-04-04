import { auth } from '@/auth'
import SignIn from '@/components/sign-in'
import { SignOut } from '@/components/sign-out'
import Link from 'next/link'

export default async function Home() {
  const session = await auth()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {session?.user ? (
          <>
            <h1 className="font-semibold">ZEN大学Slackのチャンネル一覧</h1>
            <ul className="list-disc list-inside">
              <li>
                <Link href="/active-club">賑やかなサークル</Link>
              </li>
              <li>
                <Link href="/active-times">賑やかな個人チャンネル</Link>
              </li>
            </ul>

            <p className="text-sm text-gray-500">
              以下のアカウントでログインしています。
              <br />
              {session.user.email}
            </p>

            <SignOut />
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold">ZEN大学Slackのチャンネル一覧</h1>
            <SignIn />
          </>
        )}
      </main>
    </div>
  )
}
