'use client'
import { useEffect } from 'react'
import { useState } from 'react'
import { useCrdStore } from '@/store'
import { Sidebar, FormInitial, FormVisit1 } from '.'
import { toast } from 'react-toastify'
import { useInitializeForm, useResetForm } from '../(hooks)'

export const Form = ({
	retrievedData,
}: {
	retrievedData: {
		success: boolean
		data: { [key: string]: any }
		messages: ''
	}
}) => {
	const { currentForm, setPatient } = useCrdStore()
	const { initializeForm } = useInitializeForm()
	const { resetForm } = useResetForm()
	const [init, setInit] = useState(false)

	useEffect((): (() => void) => {
		if (retrievedData.success) {
			setPatient(retrievedData.data.patient)
			initializeForm(retrievedData.data)
		} else {
			toast.error(
				'El servidor ha devuelto un error al tratar de obtener la información del formulario'
			)
		}

		setInit(true)

		/**
		 * Cuando se desmonta el componente, se resetea el store
		 */
		return () => resetForm()
	}, [])

	return (
		<>
			<div className="border-t -mx-6 mt-6"></div>

			<section className="max-w-7xl -mb-5 xl:mr-0">
				<div className="lg:grid lg:grid-cols-5 lg:gap-x-10">
					<Sidebar />

					<div className="col-span-4 max-h-[80.5vh] scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100 pt-4 pb-28 pr-10 xl:pr-14">
						{init && (
							<>
								{currentForm === 'initial' && <FormInitial />}
								{currentForm === 'visit1' && <FormVisit1 />}
							</>
						)}
					</div>
				</div>
			</section>
		</>
	)
}
