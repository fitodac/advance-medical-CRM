import type { NextRequest } from 'next/server'
import { serverApi } from '@/config'
import { useGetToken } from '@/hooks'


export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams
	const page = searchParams.get('page')
	let url = serverApi.doctors.index
	if (page) url += `?page=${page}`

	try {
		const { token } = await useGetToken()

		const resp = await fetch(`${url}`, {
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