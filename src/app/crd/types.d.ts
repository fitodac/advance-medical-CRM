declare module 'crd' {
	export interface Visi1 {
		patient_current_situation:
			| 'Alta'
			| 'Reingreso'
			| 'Seguimiento telefónico'
			| 'Deceso'
			| 'No acude a control'
			| null
		patient_current_situation_date: string
		ns__result: 'n' | 'y' | null
		ms__result: 'n' | 'y' | null
		ans__anthropometry__current_weight: string
		ans__anthropometry__initial_weight: string
		ans__anthropometry__difference_percentage: string
		ans__anthropometry__current_bmi: string
		ans__anthropometry__calf_circumference: string
		dynamometry: string
		dynamometry__not_possible: 'y' | null
		test_chair_five_repetitions: string
		test_chair__not_possible: 'y' | null
		bi__hydratation: string
		bi__tbm: string
		bi__ecw: string
		bi__icw: string
		bi__ffm: string
		bi__fm: string
		bi__bcm: string
		bi__bcm_h: string
		bi__asmm: string
		bi__smi: string
		bi__body_fat: string
		bi__resistance: string
		bi__reactance: string
		bi__phase_angle: string
		bi__standarized_phase_angle: string
		dexa__ffm: string
		dexa__fm: string
		tc__ffm: string
		tc__fm: string
		au__total_adipose_tissue: string
		au__superficial: string
		au__preperitoneal: string
		mu__area: string
		mu__circumference: string
		mu__axes_xax: string
		mu__axes_yax: string
		mu__adipose_tissue: string
		mar__normal: 'n' | 'y' | null
		hfnr__followed_prescribed_nutritional_recommendation: 'n' | 'y' | null
		hfnr__percentage_of_adherece_to_recommendations: string
		hfnr__not_followed_prescribed_recommendation: string
		rng__has_reached_nutritional_goal: 'n' | 'y' | null
		rng__has_reached_nutritional_goal_reasons: string
		cppi__considers_that_patient_perceives_improvement: 'n' | 'y' | null
		cppi__considers_that_patient_perceives_improvement_reasons: string
		hfppar_followed_prescribed_physical_activity_recommendation: 'n' | 'y' | null
		hfppar_percentage_of_adherece_to_recommendations: string
		hfppar__not_followed_prescribed_recommendation: string

		// nt__planted_objectives__weight_gain: 'y' | null
		// nt__planted_objectives__muscle_gain: 'y' | null
		// nt__planted_objectives__preservation_status: 'y' | null
		// nt__planted_objectives__other: 'y' | null
		// nt__planted_objectives__other_description: string
		// nt__start: 'n' | 'y' | null
		// nti__parental_nutrition: 'y' | null
		// nti__dietary_modifications: 'y' | null
		// nti__son: 'y' | null
		// nti__son__option: string | []
		// nti__son__other_description: string
		// nti__en: 'y' | null
		// nti__en__option: string
	}
}
