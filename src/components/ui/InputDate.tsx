'use client'
import { useState, useRef, ChangeEvent } from 'react'

interface Props {
	name: string
	value: string
	onChange: ({
		target: { name, value },
	}: {
		target: { name: string; value: string }
	}) => void
	className?: string
	onKeyUp?: () => void
}

const mask = (val: string, event: ChangeEvent<HTMLInputElement>) => {
	if (!val) return ''

	val = String(val).replace(/\D/g, '')

	if (val.length === 2) {
		const day = Math.min(parseInt(val.substring(0, 2), 10), 31)
		val = day.toString().padStart(2, '0') + val.substring(2)
	}

	if (val.length === 4) {
		const month = Math.min(parseInt(val.substring(2, 4), 10), 12)
		val =
			val.substring(0, 2) + month.toString().padStart(2, '0') + val.substring(4)
	}

	if (val.length >= 2) val = val.substring(0, 2) + '/' + val.substring(2)
	if (val.length > 4) val = val.substring(0, 5) + '/' + val.substring(5, 9)

	if (event?.nativeEvent.inputType === 'deleteContentBackward') {
		if (val.length === 3 || val.length === 6)
			val = val.substring(0, val.length - 1)
	}

	val = val.slice(0, 10)

	return val.trim()
}

export const InputDate = ({
	name,
	value,
	onChange,
	className,
	onKeyUp,
}: Props) => {
	const [state, setState] = useState(value)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		const val = mask(value, e)
		setState(val)
		onChange({ target: { name, value: val } })
	}

	return (
		<>
			<input
				type="text"
				name={name}
				value={state}
				onChange={handleChange}
				autoComplete="off"
				className={className}
				onKeyUp={onKeyUp}
			/>
		</>
	)
}
