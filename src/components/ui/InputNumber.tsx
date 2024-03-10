'use client'
import { useState, ChangeEvent } from 'react'

interface Props {
	name: string
	value: string
	onChange: ({
		target: { name, value },
	}: {
		target: { name: string; value: string }
	}) => void
}

const mask = (val: string) => {
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

export const InputNumber = ({ name, value, onChange }: Props) => {
	const [state, setState] = useState(value)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		const val = mask(value)
		setState(val)
		onChange({ target: { name, value: val } })
	}

	return (
		<input
			type="text"
			name={name}
			value={state}
			onChange={handleChange}
			autoComplete="off"
		/>
	)
}
