import { type NextRequest } from 'next/server'
import { serverApi } from '@/config'
import { useGetToken } from '@/hooks'
import { revalidateTag } from 'next/cache'

export async function DELETE(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	const { token } = await useGetToken()

	try {
		const resp = await fetch(`${serverApi.patients.delete}/${params.id}`, {
			method: 'delete',
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

	console.log('REQ', params.id)
	return Response.json({ objective: 'Eliminar un paciente' })
}
