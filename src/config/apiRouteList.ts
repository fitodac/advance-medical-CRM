const laravelApiPath = `${process.env.API_PATH}`

interface Api {
	[key: string]: {
		get: string
	}
}

export const api: Api = {
	doctors: {
		get: `${laravelApiPath}/doctors`,
	},
	patients: {
		get: `${laravelApiPath}/patients`,
	},
	centers: {
		get: `${laravelApiPath}/centers`,
	},
	users: {
		get: `${laravelApiPath}/users`,
	},
	visits: {
		get:	`${laravelApiPath}/visit`
	}
}
