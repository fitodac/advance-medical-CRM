declare module 'crd' {
	export interface Initial {
		date: string
		inclusion_q1: 'y' | 'n' | null
		inclusion_q2: 'y' | 'n' | null
		inclusion_q3: 'y' | 'n' | null
		exclusion_q1: 'y' | 'n' | null
		exclusion_q2: 'y' | 'n' | null
		exclusion_q3: 'y' | 'n' | null
		exclusion_q4: 'y' | 'n' | null
		exclusion_q5: 'y' | 'n' | null
		birth_date: string
		gender: 'hombre' | 'mujer' | null
		mh__diabetes: 'y' | null
		mh__epoc: 'y' | null
		mh__heart_failure: 'y' | null
		mh__cancer: 'y' | null
		mh__neurological_disease: 'y' | null
		mh__liver_diseases: 'y' | null
		mh__inflammatory_bowel_disease: 'y' | null
		mh__renal_failure: 'y' | null
		mh__other_chronic_diseases: 'y' | null
		mh__others: 'y' | null
		mh__others_description: string
		valuation_date: string
		hospitalization: 'y' | null
		scheduled_visit: 'y' | null
		current_body_weight: string
		usual_body_weight: string
		loss_last_six_months: string
		weight_loss_percentage: string
		height: string
		BMI: string
		calf_circumference: string
		ns__must: 'y' | null
		ns__nrs_2002: 'y' | null
		ns__mna_sf: 'y' | null
		ns__mis: 'y' | null
		ns__snaq: 'y' | null
		ns__conut: 'y' | null
		ns__other: 'y' | null
		ns__other_description: string
		ns__result: 'y' | 'n' | null
		ms__sarc_f: 'y' | null
		ms__other: 'y' | null
		ms__other_description: string
		ms__result: 'y' | 'n' | null
		nd__glim: 'y' | null
		nd__mna: 'y' | null
		nd__vgs: 'y' | null
		nd__other: 'y' | null
		patient_malnourished: 'si' | 'no' | 'en riesgo' | null
		patient_malnourished__diagnosis:
			| 'E46 Riesgo nutricional (cribado positivo o solo un criterio GLIM que no permite diagnóstico)'
			| 'E44.0 DRE moderada'
			| 'E43 DRE grave'
			| null
		patient_malnourished__procedure:
			| '3E0436Z Nutrición parenteral por vía central'
			| '3E0336Z Nutrición parenteral por vía periférica'
			| '3E0G76Z Suplementos orales / nutrición enteral oral'
			| '3E0G36Z Nutrición enteral por SNG / gastrostomía'
			| '3E0H36Z Nutrición enteral por SNY/yeyunostomía'
			| null
		does_the_patient_have_sarcopenia: 'si' | 'no' | 'en riesgo' | null
		sarcopenia__diagnosis: 'M62.84 Sarcopenia' | null
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
		mar__normal: 'y' | 'n' | null
		nt__planted_objectives__weight_gain: 'y' | null
		nt__planted_objectives__muscle_gain: 'y' | null
		nt__planted_objectives__preservation_status: 'y' | null
		nt__planted_objectives__other: 'y' | null
		nt__planted_objectives__other_description: string
		nt__start: 'n' | 'y' | null
		nti__parental_nutrition: 'y' | null
		nti__dietary_modifications: 'y' | null
		nti__son: 'y' | null
		nti__son__option: string | string[]
		nti__son__other_description: string
		nti__en: 'y' | null
		nti__en__option: string | string[]
		nti__en__other_description: string
		refers_patient_to_begin_nutritional_treatment: 'n' | 'y' | null
		pa__prescribed: 'n' | 'y' | null
		pa__aerobic_predominance: 'y' | null
		pa__predominance_muscular_strength: 'y' | null
		pa__mixed: 'y' | null
	}

	export interface Visit1 {
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
		hfppar_followed_prescribed_physical_activity_recommendation:
			| 'n'
			| 'y'
			| null
		hfppar_percentage_of_adherece_to_recommendations: string
		hfppar__not_followed_prescribed_recommendation: string
	}
}
