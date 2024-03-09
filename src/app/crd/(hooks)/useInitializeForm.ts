'use client'
import { useCrdStore } from '@/store'
import type { Initial, Visit1 } from 'crd'

export const useInitializeForm = () => {
	const { setInitial, setVisit1 } = useCrdStore()

	const initializeForm = (visit: any) => {
		setInitial({
			date: visit.date,
			inclusion_q1: visit.inclusion_q1,
			inclusion_q2: visit.inclusion_q2,
			inclusion_q3: visit.inclusion_q3,
			exclusion_q1: visit.exclusion_q1,
			exclusion_q2: visit.exclusion_q2,
			exclusion_q3: visit.exclusion_q3,
			exclusion_q4: visit.exclusion_q4,
			exclusion_q5: visit.exclusion_q5,
		})

		setVisit1({
			patient_current_situation: visit.patient_current_situation,
			patient_current_situation_date: visit.patient_current_situation_date,
			ns__result: visit.ns__result,
			ms__result: visit.ms__result,
			ans__anthropometry__current_weight:
				visit.ans__anthropometry__current_weight,
			ans__anthropometry__initial_weight:
				visit.ans__anthropometry__initial_weight,
			ans__anthropometry__difference_percentage:
				visit.ans__anthropometry__difference_percentage,
			ans__anthropometry__current_bmi: visit.ans__anthropometry__current_bmi,
			ans__anthropometry__calf_circumference:
				visit.ans__anthropometry__calf_circumference,
			dynamometry: visit.dynamometry,
			dynamometry__not_possible: visit.dynamometry__not_possible,
			test_chair_five_repetitions: visit.test_chair_five_repetitions,
			test_chair__not_possible: visit.test_chair__not_possible,
			bi__hydratation: visit.bi__hydratation,
			bi__tbm: visit.bi__tbm,
			bi__ecw: visit.bi__ecw,
			bi__icw: visit.bi__icw,
			bi__ffm: visit.bi__ffm,
			bi__fm: visit.bi__fm,
			bi__bcm: visit.bi__bcm,
			bi__bcm_h: visit.bi__bcm_h,
			bi__asmm: visit.bi__asmm,
			bi__smi: visit.bi__smi,
			bi__body_fat: visit.bi__body_fat,
			bi__resistance: visit.bi__resistance,
			bi__reactance: visit.bi__reactance,
			bi__phase_angle: visit.bi__phase_angle,
			bi__standarized_phase_angle: visit.bi__standarized_phase_angle,
			dexa__ffm: visit.dexa__ffm,
			dexa__fm: visit.dexa__fm,
			tc__ffm: visit.tc__ffm,
			tc__fm: visit.tc__fm,
			au__total_adipose_tissue: visit.au__total_adipose_tissue,
			au__superficial: visit.au__superficial,
			au__preperitoneal: visit.au__preperitoneal,
			mu__area: visit.mu__area,
			mu__circumference: visit.mu__circumference,
			mu__axes_xax: visit.mu__axes_xax,
			mu__axes_yax: visit.mu__axes_yax,
			mu__adipose_tissue: visit.mu__adipose_tissue,
			mar__normal: visit.mar__normal,
			hfnr__followed_prescribed_nutritional_recommendation:
				visit.hfnr__followed_prescribed_nutritional_recommendation,
			hfnr__percentage_of_adherece_to_recommendations:
				visit.hfnr__percentage_of_adherece_to_recommendations,
			hfnr__not_followed_prescribed_recommendation:
				visit.hfnr__not_followed_prescribed_recommendation,
			rng__has_reached_nutritional_goal:
				visit.rng__has_reached_nutritional_goal,
			rng__has_reached_nutritional_goal_reasons:
				visit.rng__has_reached_nutritional_goal_reasons,
			cppi__considers_that_patient_perceives_improvement:
				visit.cppi__considers_that_patient_perceives_improvement,
			cppi__considers_that_patient_perceives_improvement_reasons:
				visit.cppi__considers_that_patient_perceives_improvement_reasons,
			hfppar_followed_prescribed_physical_activity_recommendation:
				visit.hfppar_followed_prescribed_physical_activity_recommendation,
			hfppar_percentage_of_adherece_to_recommendations:
				visit.hfppar_percentage_of_adherece_to_recommendations,
			hfppar__not_followed_prescribed_recommendation:
				visit.hfppar__not_followed_prescribed_recommendation,
		})
	}

	return { initializeForm }
}
