import type { NextRequest } from 'next/server'
import { serverApi } from '@/config'
import { useGetToken } from '@/hooks'

export async function GET(req: NextRequest) {
	try {
		const { token } = await useGetToken()

		const resp = await fetch(serverApi.specialties.index, {
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
