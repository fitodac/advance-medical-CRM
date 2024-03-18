import { useStore } from '@/store'
import type { UserForm } from '../type'

export const useForm = () => {
	const { setLoading } = useStore()

	const saveUser = async (form: UserForm) => {
		setLoading(true)

		try {
			if (form.id) {
				/**
				 * Edit user
				 */
				const resp = await fetch(`/api/users/${form.id}`, {
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
			} else {
				/**
				 * Create user
				 */
				const resp = await fetch(`/api/users`, {
					method: 'POST',
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
			}
		} catch (err) {
			console.log(err)
			setLoading(false)
			return false
		}
	}

	return { saveUser }
}
