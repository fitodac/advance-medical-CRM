import { useCrdStore, useStore } from '@/store'

export const useVisit1Submit = () => {
	const { visit1, setVisit1 } = useCrdStore()
	const { setLoading } = useStore()

	const submit = async () => {
		setLoading(true)

		if (visit1.id) {
			/**
			 * PATCH
			 */
			try {
				const resp = await fetch(`/api/crd/${visit1.id}`, {
					method: 'PATCH',
					body: JSON.stringify(visit1),
					headers: { 'Content-Type': 'application/json' },
				})

				if (resp.ok) {
					const resp_json = await resp.json()

					for (const key in resp_json.data.visit) {
						if (resp_json.data.visit[key] === null)
							resp_json.data.visit[key] = ''
					}

					setVisit1(resp_json.data.visit)
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
					body: JSON.stringify(visit1),
				})

				if (resp.ok) {
					const resp_json = await resp.json()

					for (const key in resp_json.data.visit) {
						if (resp_json.data.visit[key] === null)
							resp_json.data.visit[key] = ''
					}

					setVisit1(resp_json.data.visit)
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
