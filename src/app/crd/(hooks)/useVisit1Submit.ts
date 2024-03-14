import { useCrdStore } from '@/store'

export const useVisit1Submit = () => {
	const { visit1, setVisit1 } = useCrdStore()

	const submit = async () => {
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

					return await resp_json
				}
			} catch (err) {
				console.log(err)
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

					return await resp_json
				}
			} catch (err) {
				console.log(err)
				return false
			}
		}
	}

	return { submit }
}
