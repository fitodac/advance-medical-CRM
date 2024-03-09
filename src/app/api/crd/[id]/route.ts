import { type NextRequest } from 'next/server'
import { api } from '@/config'
import { useGetToken } from '@/hooks'

export async function GET(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	const { token } = await useGetToken()

	const resp = await fetch(`${api.visits.get}/${params.id}`, {
		cache: 'no-store',
		headers: {
			Authorization: token,
		},
	})

	const resp_json = await resp.text()

	return new Response(resp_json, {
		headers: {
			'content-type': 'application/json',
		},
	})
}
