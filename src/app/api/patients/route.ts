import type { NextRequest } from 'next/server'
import { serverApi } from '@/config'
import { useGetToken } from '@/hooks'
import { revalidateTag } from 'next/cache'

export async function GET(req: NextRequest) {
	// { params }: { params: { id: string } }

	const searchParams = req.nextUrl.searchParams
	const page = searchParams.get('page')
	let url = serverApi.patients.index
	if (page) url += `?page=${page}`

	try {
		const { token } = await useGetToken()

		const resp = await fetch(url, {
			headers: {
				Authorization: token,
			},
			// next: { revalidate: 0 },
		})

		const resp_json = await resp.json()
		return Response.json(resp_json)
	} catch (err) {
		return Response.json(err)
	}
}

export async function POST() {
	const { token } = await useGetToken()

	try {
		const resp = await fetch(`${serverApi.patients.post}`, {
			method: 'post',
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
