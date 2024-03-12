const apiPath = `${process.env.BASE_PATH}/api`
const laravelApiPath = `${process.env.API_PATH}`

interface Api {
	[key: string]: string
}

interface ServerApi {
	[key: string]: {
		index?: string
		get?: string
		post?: string
		delete?: string
	}
}

export const api: Api = {
	doctors: `${apiPath}/doctors`,
	patients: `${apiPath}/patients`,
	centers: `${apiPath}/centers`,
	users: `${apiPath}/users`,
	visits: `${apiPath}/crd`,
}

export const serverApi: ServerApi = {
	patients: {
		index: `${laravelApiPath}/patients`,
		post: `${laravelApiPath}/patients/create`,
		delete: `${laravelApiPath}/patients/delete`,
	},
	visits: {
		index: `${laravelApiPath}/visit`,
	},
}
