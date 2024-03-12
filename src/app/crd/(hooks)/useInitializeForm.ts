'use client'
import { useCrdStore } from '@/store'

/**
 * Inserta la información del servidor en los formularios
 * @returns
 */
export const useInitializeForm = () => {
	const { setInitial, setVisit1 } = useCrdStore()

	const initializeForm = (visit: any) => {
		setInitial(null)
		setVisit1(null)

		const dataInitial = visit.filter(
			(item: any) => item.visit_type === 'initial'
		)[0]

		const dataVisit1 = visit.filter(
			(item: any) => item.visit_type === 'first'
		)[0]

		if (dataInitial) {
			setInitial({
				date: dataInitial.date,
				inclusion_q1: dataInitial.inclusion_q1,
				inclusion_q2: dataInitial.inclusion_q2,
				inclusion_q3: dataInitial.inclusion_q3,
				exclusion_q1: dataInitial.exclusion_q1,
				exclusion_q2: dataInitial.exclusion_q2,
				exclusion_q3: dataInitial.exclusion_q3,
				exclusion_q4: dataInitial.exclusion_q4,
				exclusion_q5: dataInitial.exclusion_q5,
				birth_date: dataInitial.birth_date,
				gender: dataInitial.gender,
				mh__diabetes: dataInitial.mh__diabetes,
				mh__epoc: dataInitial.mh__epoc,
				mh__heart_failure: dataInitial.mh__heart_failure,
				mh__cancer: dataInitial.mh__cancer,
				mh__neurological_disease: dataInitial.mh__neurological_disease,
				mh__liver_diseases: dataInitial.mh__liver_diseases,
				mh__inflammatory_bowel_disease:
					dataInitial.mh__inflammatory_bowel_disease,
				mh__renal_failure: dataInitial.mh__renal_failure,
				mh__other_chronic_diseases: dataInitial.mh__other_chronic_diseases,
				mh__others: dataInitial.mh__others,
				mh__others_description: dataInitial.mh__others_description,
				valuation_date: dataInitial.valuation_date,
				hospitalization: dataInitial.hospitalization,
				hospitalization_reason: dataInitial.hospitalization_reason,
				scheduled_visit: dataInitial.scheduled_dataInitial,
				current_body_weight: dataInitial.current_body_weight,
				usual_body_weight: dataInitial.usual_body_weight,
				loss_last_six_months: dataInitial.loss_last_six_months,
				weight_loss_percentage: dataInitial.weight_loss_percentage,
				height: dataInitial.height,
				BMI: dataInitial.BMI,
				calf_circumference: dataInitial.calf_circumference,
				ns__must: dataInitial.ns__must,
				ns__nrs_2002: dataInitial.ns__nrs_2002,
				ns__mna_sf: dataInitial.ns__mna_sf,
				ns__mis: dataInitial.ns__mis,
				ns__snaq: dataInitial.ns__snaq,
				ns__conut: dataInitial.ns__conut,
				ns__other: dataInitial.ns__other,
				ns__other_description: dataInitial.ns__other_description,
				ns__result: dataInitial.ns__result,
				ms__sarc_f: dataInitial.ms__sarc_f,
				ms__other: dataInitial.ms__other,
				ms__other_description: dataInitial.ms__other_description,
				ms__result: dataInitial.ms__result,
				nd__glim: dataInitial.nd__glim,
				nd__mna: dataInitial.nd__mna,
				nd__vgs: dataInitial.nd__vgs,
				nd__other: dataInitial.nd__other,
				nd__other_description: dataInitial.nd__other_description,
				patient_malnourished: dataInitial.patient_malnourished,
				patient_malnourished__diagnosis:
					dataInitial.patient_malnourished__diagnosis,
				patient_malnourished__procedure:
					dataInitial.patient_malnourished__procedure,
				does_the_patient_have_sarcopenia:
					dataInitial.does_the_patient_have_sarcopenia,
				sarcopenia__diagnosis: dataInitial.sarcopenia__diagnosis,
				dynamometry: dataInitial.dynamometry,
				dynamometry__not_possible: dataInitial.dynamometry__not_possible,
				test_chair_five_repetitions: dataInitial.test_chair_five_repetitions,
				test_chair__not_possible: dataInitial.test_chair__not_possible,
				bi__resistance: dataInitial.bi__resistance,
				bi__hydratation: dataInitial.bi__hydratation,
				bi__reactance: dataInitial.bi__reactance,
				bi__phase_angle: dataInitial.bi__phase_angle,
				bi__standarized_phase_angle: dataInitial.bi__standarized_phase_angle,
				bi__tbm: dataInitial.bi__tbm,
				bi__ecw: dataInitial.bi__ecw,
				bi__icw: dataInitial.bi__icw,
				bi__ffm: dataInitial.bi__ffm,
				bi__fm: dataInitial.bi__fm,
				bi__bcm: dataInitial.bi__bcm,
				bi__bcm_h: dataInitial.bi__bcm_h,
				bi__asmm: dataInitial.bi__asmm,
				bi__smi: dataInitial.bi__smi,
				bi__body_fat: dataInitial.bi__body_fat,
				dexa__ffm: dataInitial.dexa__ffm,
				dexa__fm: dataInitial.dexa__fm,
				tc__ffm: dataInitial.tc__ffm,
				tc__fm: dataInitial.tc__fm,
				au__total_adipose_tissue: dataInitial.au__total_adipose_tissue,
				au__superficial: dataInitial.au__superficial,
				au__preperitoneal: dataInitial.au__preperitoneal,
				mu__area: dataInitial.mu__area,
				mu__circumference: dataInitial.mu__circumference,
				mu__axes_xax: dataInitial.mu__axes_xax,
				mu__axes_yax: dataInitial.mu__axes_yax,
				mu__adipose_tissue: dataInitial.mu__adipose_tissue,
				mar__normal: dataInitial.mar__normal,
				nt__planted_objectives__weight_gain:
					dataInitial.nt__planted_objectives__weight_gain,
				nt__planted_objectives__muscle_gain:
					dataInitial.nt__planted_objectives__muscle_gain,
				nt__planted_objectives__preservation_status:
					dataInitial.nt__planted_objectives__preservation_status,
				nt__planted_objectives__other:
					dataInitial.nt__planted_objectives__other,
				nt__planted_objectives__other_description:
					dataInitial.nt__planted_objectives__other_description,
				nt__start: dataInitial.nt__start,
				nti__parental_nutrition: dataInitial.nti__parental_nutrition,
				nti__dietary_modifications: dataInitial.nti__dietary_modifications,
				nti__son: dataInitial.nti__son,
				nti__son__option: dataInitial.nti__son__option,
				nti__son__other_description: dataInitial.nti__son__other_description,
				nti__en: dataInitial.nti__en,
				nti__en__option: dataInitial.nti__en__option,
				nti__en__other_description: dataInitial.nti__en__other_description,
				refers_patient_to_begin_nutritional_treatment:
					dataInitial.refers_patient_to_begin_nutritional_treatment,
				pa__prescribed: dataInitial.pa__prescribed,
				pa__prescribed_reasons: dataInitial.pa__prescribed_reasons,
				pa__aerobic_predominance: dataInitial.pa__aerobic_predominance,
				pa__predominance_muscular_strength:
					dataInitial.pa__predominance_muscular_strength,
				pa__mixed: dataInitial.pa__mixed,
			})
		}

		if (dataVisit1) {
			setVisit1({
				date: dataVisit1.date,
				patient_current_situation: dataVisit1.patient_current_situation,
				patient_current_situation_date:
					dataVisit1.patient_current_situation_date,
				ns__result: dataVisit1.ns__result,
				ms__result: dataVisit1.ms__result,
				ans__anthropometry__current_weight:
					dataVisit1.ans__anthropometry__current_weight,
				ans__anthropometry__initial_weight:
					dataVisit1.ans__anthropometry__initial_weight,
				ans__anthropometry__difference_percentage:
					dataVisit1.ans__anthropometry__difference_percentage,
				ans__anthropometry__current_bmi:
					dataVisit1.ans__anthropometry__current_bmi,
				ans__anthropometry__calf_circumference:
					dataVisit1.ans__anthropometry__calf_circumference,
				dynamometry: dataVisit1.dynamometry,
				dynamometry__not_possible: dataVisit1.dynamometry__not_possible,
				test_chair_five_repetitions: dataVisit1.test_chair_five_repetitions,
				test_chair__not_possible: dataVisit1.test_chair__not_possible,
				bi__hydratation: dataVisit1.bi__hydratation,
				bi__tbm: dataVisit1.bi__tbm,
				bi__ecw: dataVisit1.bi__ecw,
				bi__icw: dataVisit1.bi__icw,
				bi__ffm: dataVisit1.bi__ffm,
				bi__fm: dataVisit1.bi__fm,
				bi__bcm: dataVisit1.bi__bcm,
				bi__bcm_h: dataVisit1.bi__bcm_h,
				bi__asmm: dataVisit1.bi__asmm,
				bi__smi: dataVisit1.bi__smi,
				bi__body_fat: dataVisit1.bi__body_fat,
				bi__resistance: dataVisit1.bi__resistance,
				bi__reactance: dataVisit1.bi__reactance,
				bi__phase_angle: dataVisit1.bi__phase_angle,
				bi__standarized_phase_angle: dataVisit1.bi__standarized_phase_angle,
				dexa__ffm: dataVisit1.dexa__ffm,
				dexa__fm: dataVisit1.dexa__fm,
				tc__ffm: dataVisit1.tc__ffm,
				tc__fm: dataVisit1.tc__fm,
				au__total_adipose_tissue: dataVisit1.au__total_adipose_tissue,
				au__superficial: dataVisit1.au__superficial,
				au__preperitoneal: dataVisit1.au__preperitoneal,
				mu__area: dataVisit1.mu__area,
				mu__circumference: dataVisit1.mu__circumference,
				mu__axes_xax: dataVisit1.mu__axes_xax,
				mu__axes_yax: dataVisit1.mu__axes_yax,
				mu__adipose_tissue: dataVisit1.mu__adipose_tissue,
				mar__normal: dataVisit1.mar__normal,
				hfnr__followed_prescribed_nutritional_recommendation:
					dataVisit1.hfnr__followed_prescribed_nutritional_recommendation,
				hfnr__percentage_of_adherece_to_recommendations:
					dataVisit1.hfnr__percentage_of_adherece_to_recommendations,
				hfnr__not_followed_prescribed_recommendation:
					dataVisit1.hfnr__not_followed_prescribed_recommendation,
				rng__has_reached_nutritional_goal:
					dataVisit1.rng__has_reached_nutritional_goal,
				rng__has_reached_nutritional_goal_reasons:
					dataVisit1.rng__has_reached_nutritional_goal_reasons,
				cppi__considers_that_patient_perceives_improvement:
					dataVisit1.cppi__considers_that_patient_perceives_improvement,
				cppi__considers_that_patient_perceives_improvement_reasons:
					dataVisit1.cppi__considers_that_patient_perceives_improvement_reasons,
				hfppar_followed_prescribed_physical_activity_recommendation:
					dataVisit1.hfppar_followed_prescribed_physical_activity_recommendation,
				hfppar_percentage_of_adherece_to_recommendations:
					dataVisit1.hfppar_percentage_of_adherece_to_recommendations,
				hfppar__not_followed_prescribed_recommendation:
					dataVisit1.hfppar__not_followed_prescribed_recommendation,
			})
		}
	}

	return { initializeForm }
}
