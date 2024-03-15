import type { Initial, Visit1 } from 'crd'

export const initialEmptyData: Initial = {
	patient_id: null,
	visit_type: 'initial',
	date: '',
	inclusion_q1: null,
	inclusion_q2: null,
	inclusion_q3: null,
	exclusion_q1: null,
	exclusion_q2: null,
	exclusion_q3: null,
	exclusion_q4: null,
	exclusion_q5: null,
	birth_date: '',
	gender: null,
	mh__diabetes: null,
	mh__epoc: null,
	mh__heart_failure: null,
	mh__cancer: null,
	mh__neurological_disease: null,
	mh__liver_diseases: null,
	mh__inflammatory_bowel_disease: null,
	mh__renal_failure: null,
	mh__other_chronic_diseases: null,
	mh__others: null,
	mh__others_description: '',
	valuation_date: '',
	hospitalization: null,
	hospitalization_reason: '',
	scheduled_visit: null,
	current_body_weight: '',
	usual_body_weight: '',
	loss_last_six_months: '',
	weight_loss_percentage: '',
	height: '',
	BMI: '',
	calf_circumference: '',
	ns__must: null,
	ns__nrs_2002: null,
	ns__mna_sf: null,
	ns__mis: null,
	ns__snaq: null,
	ns__conut: null,
	ns__other: null,
	ns__other_description: '',
	ns__result: null,
	ms__sarc_f: null,
	ms__other: null,
	ms__other_description: '',
	ms__result: null,
	nd__glim: null,
	nd__mna: null,
	nd__vgs: null,
	nd__other: null,
	nd__other_description: '',
	patient_malnourished: null,
	patient_malnourished__diagnosis: null,
	patient_malnourished__procedure: null,
	does_the_patient_have_sarcopenia: null,
	sarcopenia__diagnosis: null,
	dynamometry: '',
	dynamometry__not_possible: null,
	test_chair_five_repetitions: '',
	test_chair__not_possible: null,
	bi__resistance: '',
	bi__hydratation: '',
	bi__reactance: '',
	bi__phase_angle: '',
	bi__standarized_phase_angle: '',
	bi__tbm: '',
	bi__ecw: '',
	bi__icw: '',
	bi__ffm: '',
	bi__fm: '',
	bi__bcm: '',
	bi__bcm_h: '',
	bi__asmm: '',
	bi__smi: '',
	bi__body_fat: '',
	dexa__ffm: '',
	dexa__fm: '',
	tc__ffm: '',
	tc__fm: '',
	au__total_adipose_tissue: '',
	au__superficial: '',
	au__preperitoneal: '',
	mu__area: '',
	mu__circumference: '',
	mu__axes_xax: '',
	mu__axes_yax: '',
	mu__adipose_tissue: '',
	mar__normal: null,
	nt__planted_objectives__weight_gain: null,
	nt__planted_objectives__muscle_gain: null,
	nt__planted_objectives__preservation_status: null,
	nt__planted_objectives__other: null,
	nt__planted_objectives__other_description: '',
	nt__start: null,
	nti__parental_nutrition: null,
	nti__dietary_modifications: null,
	nti__son: null,
	nti__son__option: '',
	nti__son__other_description: '',
	nti__en: null,
	nti__en__option: '',
	nti__en__other_description: '',
	refers_patient_to_begin_nutritional_treatment: null,
	pa__prescribed: null,
	pa__prescribed_reasons: '',
	pa__aerobic_predominance: null,
	pa__predominance_muscular_strength: null,
	pa__mixed: null,
}

export const visit1EmptyData: Visit1 = {
	patient_id: null,
	visit_type: 'first',
	date: '',
	patient_current_situation: null,
	patient_current_situation_date: '',
	ns__result: null,
	ms__result: null,
	ans__anthropometry__current_weight: '',
	ans__anthropometry__initial_weight: '',
	ans__anthropometry__difference_percentage: '',
	ans__anthropometry__current_bmi: '',
	ans__anthropometry__calf_circumference: '',
	dynamometry: '',
	dynamometry__not_possible: null,
	test_chair_five_repetitions: '',
	test_chair__not_possible: null,
	bi__hydratation: '',
	bi__tbm: '',
	bi__ecw: '',
	bi__icw: '',
	bi__ffm: '',
	bi__fm: '',
	bi__bcm: '',
	bi__bcm_h: '',
	bi__asmm: '',
	bi__smi: '',
	bi__body_fat: '',
	bi__resistance: '',
	bi__reactance: '',
	bi__phase_angle: '',
	bi__standarized_phase_angle: '',
	dexa__ffm: '',
	dexa__fm: '',
	tc__ffm: '',
	tc__fm: '',
	au__total_adipose_tissue: '',
	au__superficial: '',
	au__preperitoneal: '',
	mu__area: '',
	mu__circumference: '',
	mu__axes_xax: '',
	mu__axes_yax: '',
	mu__adipose_tissue: '',
	mar__normal: null,
	hfnr__followed_prescribed_nutritional_recommendation: null,
	hfnr__percentage_of_adherece_to_recommendations: '',
	hfnr__not_followed_prescribed_recommendation: '',
	rng__has_reached_nutritional_goal: null,
	rng__has_reached_nutritional_goal_reasons: '',
	cppi__considers_that_patient_perceives_improvement: null,
	cppi__considers_that_patient_perceives_improvement_reasons: '',
	hfppar_followed_prescribed_physical_activity_recommendation: null,
	hfppar_percentage_of_adherece_to_recommendations: '',
	hfppar__not_followed_prescribed_recommendation: '',
}
