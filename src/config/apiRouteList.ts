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
		patch?: string
		delete?: string
		password?: string
	}
}

export const api: Api = {
	doctors: `${apiPath}/doctors`,
	patients: `${apiPath}/patients`,
	centers: `${apiPath}/centers`,
	users: `${apiPath}/users`,
	visits: `${apiPath}/crd`,
	specialties: `${apiPath}/specialties`,
	profile: `${apiPath}/profile`,
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
	doctors: {
		index: `${laravelApiPath}/doctors`,
	},
	centers: {
		index: `${laravelApiPath}/centers`,
	},
	users: {
		index: `${laravelApiPath}/users`,
	},
	specialties: {
		index: `${laravelApiPath}/specialties`,
	},
	profile: {
		index: `${laravelApiPath}/profile`,
		password: `${laravelApiPath}/profile/password-update`,
	},
}
