import { useStore } from '@/store'
import type { FormData } from '../type'

export const useSaveProfile = () => {
	const { setLoading } = useStore()

	const saveProfile = async ({ id, form }: { id: number; form: FormData }) => {
		setLoading(true)

		try {
			const resp = await fetch(`/api/profile/${id}`, {
				method: 'PATCH',
				body: JSON.stringify(form),
				headers: { 'Content-Type': 'application/json' },
			})

			if (resp.ok) {
				const resp_json = await resp.json()
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

	return { saveProfile }
}
