import { useGetToken } from '.'
import { api } from '@/config'

export const useFetchList = async (apiURL: string) => {
	const { sessionCookie } = await useGetToken()
	// const { token } = await useGetToken()

	try {
		const resp = await fetch(apiURL, {
			headers: {
				Cookie: sessionCookie,
			},
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

export const useGetCRD = async (id: string) => {
	const { sessionCookie } = await useGetToken()

	try {
		const resp = await fetch(`${api.visits}/patient/${id}`, {
			headers: {
				Cookie: sessionCookie,
			},
			next: { tags: ['useGetCRD'] },
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
