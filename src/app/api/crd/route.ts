import type { NextRequest } from 'next/server'
import { serverApi } from '@/config'
import { useGetToken } from '@/hooks'

export async function POST(req: NextRequest) {
	const { token } = await useGetToken()
	const body = await req.text()

	try {
		const resp = await fetch(serverApi.visits.index, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
			body,
		})

		const resp_json = await resp.json()
		return Response.json(resp_json)
	} catch (err) {
		console.log(err)
		return Response.json(err)
	}
}
