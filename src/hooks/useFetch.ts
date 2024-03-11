import { useGetToken } from '.'
import { api } from '@/config'

export const useFetchList = async (apiURL: string) => {
	const { sessionCookie } = await useGetToken()

	// const { token } = await useGetToken()

	try {
		const resp = await fetch(apiURL, {
			cache: 'no-store',
			headers: {
				// Authorization: token,
				Cookie: sessionCookie,
			},
			next: { tags: ['getList'] },
		})

		if (resp.ok) {
			const resp_json = await resp.json()
			return resp_json
		}
	} catch (err) {
		console.log('Error', err)
		return null
	}
}

export const useGetCRD = async (patientId: string) => {}
