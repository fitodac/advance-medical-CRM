export const useHelpers = () => {
	const toCapitalize = (text: string) => {
		return text.toLowerCase().replace(/\b\w/g, function (l) {
			return l.toUpperCase()
		})
	}

	return { toCapitalize }
}
