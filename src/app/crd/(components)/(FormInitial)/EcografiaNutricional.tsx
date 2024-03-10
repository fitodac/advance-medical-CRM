import { useCrdStore } from '@/store'
import { useCheckboxHandleChange } from '../../(hooks)'

export const EcografiaNutricional = () => {
	const { initial } = useCrdStore()
	const { handleChange } = useCheckboxHandleChange('initial')

	if (!initial) return <></>

	return (
		<>
			<section className="">
				<div className="text-slate-600 text-base font-medium">
					Ecografía nutricional
				</div>

				<div className="text-slate-500 text-sm leading-tight pt-4 space-y-2">
					<p>
						Realizar de acuerdo con el protocolo SEEN (anotar la referencia
						medida en cm en la que se ha realizado la medición en abdomen y
						recto anterior. Para más información acceder a García-Almeida JM,
						García-García C, Vegas-Aguilar IM, Ballesteros Pomar MD,
						Cornejo-Pareja IM, Fernández Medina B, de Luis Román DA, Bellido
						Guerrero D, Bretón Lesmes I, Tinahones Madueño FJ. Nutritional
						ultrasound®: Conceptualisation, technical considerations and
						standardisation. Endocrinol Diabetes Nutr (Engl Ed). 2023 Mar;70
						Suppl 1:74-84. doi: 10.1016/j.endien.2022.11.010. PMID: 36935167.)
						Acceso:
					</p>
					<p>
						<a
							href="https://www.sciencedirect.com/science/article/abs/pii/S2530018022001688?via%3Dihub"
							target="_blank"
							rel="noreferrer"
							className="text-primary italic underline"
						>
							https://www.sciencedirect.com/science/article/abs/pii/S2530018022001688?via%3Dihub
						</a>
					</p>
				</div>
			</section>
		</>
	)
}
