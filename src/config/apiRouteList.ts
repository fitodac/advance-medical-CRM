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
	doctors: `${laravelApiPath}/doctors`,
	patients: `${apiPath}/patients`,
	centers: `${laravelApiPath}/centers`,
	users: `${laravelApiPath}/users`,
	visits: `${laravelApiPath}/visit`,
}

export const serverApi: ServerApi = {
	patients: {
		index: `${laravelApiPath}/patients`,
		post: `${laravelApiPath}/patients/create`,
		delete: `${laravelApiPath}/patients/delete`,
	},
}
