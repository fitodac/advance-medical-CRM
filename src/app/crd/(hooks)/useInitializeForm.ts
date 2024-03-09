import { useGetId } from '.'

export const useInitializeForm = (visit: string) => {
	const id = useGetId()

	switch (visit) {
		case 'initial':
			break
		case 'visit1':
			break
	}
}
