'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import type { User } from 'next-auth'

export const Profile = (): JSX.Element => {
	const { data: session, status } = useSession()
	const user: User = session ? session.user : null

	return (
		<div>
			<h1>Profile</h1>

			{session ? (
				<>
					{session.user && (
						<div>Signed in as {`${user.firstname} ${user.lastname}`}</div>
					)}
					<button
						onClick={() => signOut()}
						className="btn bg-primary text-white"
					>
						Sign out
					</button>

					<pre>{JSON.stringify(session, null, 2)}</pre>
				</>
			) : (
				<>
					<div>Not signed in</div>
					<button
						onClick={() => signIn()}
						className="btn bg-primary text-white"
					>
						Sign in
					</button>
				</>
			)}

			<pre>{JSON.stringify(session)}</pre>
			<pre>{JSON.stringify(status)}</pre>

			<button onClick={() => signOut()} className="btn bg-primary text-white">
				Sign out
			</button>
		</div>
	)
}
