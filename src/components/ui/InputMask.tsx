'use client'

const mask = (val) => {
	if (!val) return ''
	val = String(val).replace(/[^0-9,.]/g, '')
	val = val.replaceAll('.', ',')

	if (val.match(/,/g) && val.match(/,/g).length > 1) {
		val = val.replace(/,([^,]*)$/, '$1')
	}

	if (val.includes(',')) {
		const sep = val.split(',')
		val = `${sep[0]},${sep[1][0] ?? ''}${sep[1][1] ?? ''}`
	}

	return val.trim()
}

type Props = {
	type?: string
	name?: string
	readonly?: boolean
}

export const InputMask = ({
	type = 'text',
	name,
	readonly,
}: Props): JSX.Element => {
	return (
		<>
			<input
				type={type}
				name={name}
				style={readonly ? { backgroundColor: '#ebfcfdc9' } : {}}
			/>
		</>
	)
}
