import { useCrdStore, useStore } from '@/store'

export const useVisitInitialSubmit = () => {
	const { initial, setInitial } = useCrdStore()
	const { setLoading } = useStore()

	const submit = async () => {
		setLoading(true)

		if (initial.id) {
			/**
			 * PATCH
			 */
			try {
				const resp = await fetch(`/api/crd/${initial.id}`, {
					method: 'PATCH',
					body: JSON.stringify(initial),
					headers: { 'Content-Type': 'application/json' },
				})

				if (resp.ok) {
					const resp_json = await resp.json()

					for (const key in resp_json.data.visit) {
						if (resp_json.data.visit[key] === null)
							resp_json.data.visit[key] = ''
					}

					setInitial(resp_json.data.visit)
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
		} else {
			/**
			 * POST
			 */
			try {
				const resp = await fetch('/api/crd', {
					method: 'POST',
					body: JSON.stringify(initial),
				})

				if (resp.ok) {
					const resp_json = await resp.json()

					for (const key in resp_json.data.visit) {
						if (resp_json.data.visit[key] === null)
							resp_json.data.visit[key] = ''
					}

					setInitial(resp_json.data.visit)
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
	}

	return { submit }
}
