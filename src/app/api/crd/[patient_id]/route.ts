import { type NextRequest } from 'next/server'
import { serverApi } from '@/config'
import { useGetToken } from '@/hooks'

export async function GET(
	req: NextRequest,
	{ params }: { params: { patient_id: string } }
) {
	const { token } = await useGetToken()

	const resp = await fetch(`${serverApi.visits}/${params.patient_id}`, {
		cache: 'no-store',
		headers: {
			Authorization: token,
		},
	})

	const resp_json = await resp.json()

	return Response.json(resp_json)
}
