import { serverApi } from '@/config'
import { useGetToken } from '@/hooks'

export async function GET({ params }: { params: { id: string } }) {
	const { token } = await useGetToken()

	try {
		const resp = await fetch(`${serverApi.centers.index}/${params.id}`, {
			headers: {
				Authorization: token,
			},
		})

		const resp_json = await resp.json()
		console.log('resp_json', resp_json)
		return Response.json(resp_json)
	} catch (err) {
		return Response.json(err)
	}
}
