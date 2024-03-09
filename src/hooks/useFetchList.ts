import { useGetToken } from '.'

export const useFetchList = async (apiURL: string) => {
	const { token } = await useGetToken()

	try {
		const resp = await fetch(apiURL, {
			cache: 'no-store',
			headers: {
				Authorization: token,
			},
		})

		const resp_json = await resp.json()
		return resp_json
	} catch (err) {
		console.log('Error', err)
		return null
	}
}
