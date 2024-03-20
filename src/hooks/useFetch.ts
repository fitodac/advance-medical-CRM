import { useGetToken } from '.'
import { api } from '@/config'

export const useFetchList = async (apiURL: string) => {
	const { sessionCookie } = await useGetToken()

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

export const useGetProfile = async (id: number) => {
	const { sessionCookie } = await useGetToken()

	try {
		const resp = await fetch(`${api.profile}/${id}`, {
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

export const useGetMedicalCenter = async (id: number) => {
	const { sessionCookie } = await useGetToken()

	try {
		const resp = await fetch(`${api.centers}/${id}`, {
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

export const useGetUser = async (id: number) => {
	const { sessionCookie } = await useGetToken()

	try {
		const resp = await fetch(`${api.users}/${id}`, {
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

export const useGetDoctor = async (id: number) => {
	const { sessionCookie } = await useGetToken()

	try {
		const resp = await fetch(`${api.doctors}/${id}`, {
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

export const useGetSpecialtiesList = async () => {
	const { sessionCookie } = await useGetToken()

	try {
		const resp = await fetch(`${api.specialties}/list`, {
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

export const useGetMedicalCentersList = async () => {
	const { sessionCookie } = await useGetToken()

	try {
		const resp = await fetch(`${api.centers}/list`, {
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
