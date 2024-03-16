import type { NextRequest } from 'next/server'
import { serverApi } from '@/config'
import { useGetToken } from '@/hooks'

export async function PATCH(
	req: NextRequest,
	{ params }: { params: { user_id: string } }
) {
	const { token } = await useGetToken()
	const body = await req.text()

	try {
		const resp = await fetch(
			`${serverApi.profile.password}/${params.user_id}`,
			{
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: token,
				},
				body,
			}
		)

		const resp_json = await resp.json()
		return Response.json(resp_json)
	} catch (err) {
		return Response.json(err)
	}
}
