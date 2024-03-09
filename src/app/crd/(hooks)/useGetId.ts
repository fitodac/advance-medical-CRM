'use client'
import { useParams } from 'next/navigation'

export const useGetId = () => {
	const { id } = useParams()
	return id
}
