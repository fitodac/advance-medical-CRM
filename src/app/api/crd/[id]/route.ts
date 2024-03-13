import type { NextRequest } from 'next/server'
import { serverApi } from '@/config'
import { useGetToken } from '@/hooks'


export async function PATCH(req: NextRequest) {
	const { token } = await useGetToken()
	const body = await req.text()

	console.log('body', body)
	return Response.json({ action: 'CRD PATCH' })
}
