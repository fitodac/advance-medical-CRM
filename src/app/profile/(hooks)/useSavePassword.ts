import { useStore } from '@/store'

export const useSavePassword = () => {
	const { setLoading } = useStore()

	const savePassword = async ({
		id,
		form,
	}: {
		id: number
		form: { password: string; new_password: string }
	}) => {
		setLoading(true)

		try {
			const resp = await fetch(`/api/profile/password/${id}`, {
				method: 'PATCH',
				body: JSON.stringify(form),
				headers: { 'Content-Type': 'application/json' },
			})

			if (resp.ok) {
				const resp_json = await resp.json()
				console.log('resp_json', resp_json)
				setLoading(false)
				return await resp_json
			} else {
				setLoading(false)
			}
		} catch (err) {
			console.log(err)
			setLoading(false)
			return false
		}
	}

	return { savePassword }
}
