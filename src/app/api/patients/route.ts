import { serverApi } from '@/config'
import { useGetToken } from '@/hooks'
import { revalidateTag } from 'next/cache'

export async function GET() {
	try {
		const { token } = await useGetToken()

		const resp = await fetch(`${serverApi.patients.index}`, {
			cache: 'no-store',
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
		revalidateTag('getList')

		return Response.json(resp_json)
	} catch (err) {
		return Response.json(err)
	}
}
