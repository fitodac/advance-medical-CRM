import type { NextRequest } from 'next/server'
import { serverApi } from '@/config'
import { useGetToken } from '@/hooks'

export async function GET(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	const { token } = await useGetToken()
	const { id } = params

	try {
		const resp = await fetch(`${serverApi.visits.index}/${id}`, {
			headers: {
				Authorization: token,
			},
		})

		const resp_json = await resp.json()
		return Response.json(resp_json)
	} catch (err) {
		return Response.json(err)
	}
}
