import type { NextRequest } from 'next/server'
import { serverApi } from '@/config'
import { useGetToken } from '@/hooks'

export async function POST(req: NextRequest) {
	const { token } = await useGetToken()
	const body = await req.text()

	try {
		const resp = await fetch(serverApi.visits.post, {
			method: 'post',
			headers: {
				Authorization: token,
				'Content-Type': 'application/json',
			},
			body,
		})

		const resp_json = await resp.json()
		console.log('resp_json', resp_json)
		return Response.json(resp_json)
	} catch (err) {
		console.log(err)
		return Response.json(err)
	}
}

export async function PATCH(req: NextRequest) {
	const { token } = await useGetToken()
	const body = await req.text()

	console.log('body', body)
	return Response.json({ action: 'CRD PATCH' })
}
