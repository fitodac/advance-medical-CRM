'use client'
import { useEffect } from 'react'
import { useCrdStore } from '@/store'
import { Sidebar, FormInitial, FormVisit1 } from '.'
import { toast } from 'react-toastify'
import { useInitializeForm } from '../(hooks)'

export const Form = async () => {
	// const { currentForm, setInitial, setVisit1 } = useCrdStore()

	// useEffect(() => {
	// 	setInitial({})
	// 	setVisit1(null)

	// 	const fetchData = async () => {
	// 		try {
	//

	// 			if (resp.success) {
	// 				const { visit } = resp.data
	// 				console.table('VISIT', visit)
	// 				// console.log(useInitializeForm('visit1', visit))

	// 				// 	// setInitial(resp.data.initial)
	// 				setVisit1(useInitializeForm('visit1', visit))
	// 			} else {
	// 				toast.error(resp.error)
	// 				return false
	// 			}
	// 		} catch (err) {
	// 			console.log('Error', err)
	// 			toast.error('Se ha producido un error en la petición al servidor')
	// 		}
	// 	}
	// 	fetchData()
	// }, [])

	return (
		<>
			<div className="border-t -mx-6 mt-6"></div>

			<section className="max-w-7xl -mb-5 xl:mr-0">
				<div className="lg:grid lg:grid-cols-5 lg:gap-x-10">
					<Sidebar />

					<div className="col-span-4 max-h-[80.5vh] scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100 pt-4 pb-28 pr-10 xl:pr-14">
						{/* {currentForm === 'initial' && <FormInitial />} */}
						{/* {currentForm === 'visit1' && <FormVisit1 />} */}
					</div>
				</div>
			</section>
		</>
	)
}
