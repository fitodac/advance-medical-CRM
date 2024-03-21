import type { NextRequest } from 'next/server'
import { serverApi } from '@/config'
import { useGetToken } from '@/hooks'

export async function GET(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	const { token } = await useGetToken()

	try {
		const resp = await fetch(`${serverApi.users.index}/${params.id}`, {
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


export async function PATCH(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	const { token } = await useGetToken()
	const body = await req.text()

	try {
		const resp = await fetch(`${serverApi.users.index}/${params.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
			body,
		})

		const resp_json = await resp.json()
		return Response.json(resp_json)
	} catch (err) {
		return Response.json(err)
	}
}


export async function DELETE(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	const { token } = await useGetToken()

	try {
		const resp = await fetch(`${serverApi.users.index}/${params.id}`, {
			method: 'DELETE',
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