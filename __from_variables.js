// ERRORES:

switch (name) {
	case 'ans__anthropometry__current_weight':
		return val < 30 || val > 150 ? 'Por favor confirme el valor' : null
	case 'ans__anthropometry__current_bmi':
		return val < 15 || val > 35 ? 'Por favor confirme el valor' : null
	case 'ans__anthropometry__calf_circumference':
		return val < 20 || val > 50 ? 'Por favor confirme el valor' : null
	// case 'bi__hydratation':
	// 	return val < 50 || val > 80 ? 'Por favor confirme el valor' : null
	// case 'bi__ffm':
	// 	return val < 20 || val > 70 ? 'Por favor confirme el valor' : null
	// case 'bi__fm':
	// 	return val < 10 || val > 35 ? 'Por favor confirme el valor' : null
	// case 'bi__bcm':
	// 	return val < 10 || val > 40 ? 'Por favor confirme el valor' : null
	// case 'bi__phase_angle':
	// 	return val < 3 || val > 25 ? 'Por favor confirme el valor' : null
	// case 'au__total_adipose_tissue':
	// 	return val > 12 ? 'Por favor confirme el valor' : null
	// case 'au__superficial':
	// case 'au__preperitoneal':
	// 	return val > 12 ? 'Por favor confirme el valor' : null
	// case 'mu__area':
	// 	return val < 5 ? 'Por favor confirme el valor' : null
	// case 'mu__circumference':
	// 	return val > 25 ? 'Por favor confirme el valor' : null
	// case 'mu__axes_xax':
	// case 'mu__axes_yax':
	// case 'mu__adipose_tissue':
	// 	return val > 12 ? 'Por favor confirme el valor' : null
	case 'hfnr__percentage_of_adherece_to_recommendations':
		console.log('val', val)
		return 'error...'
	default:
		return null
}
// ----------------------

// date
// inclusion_q1
// inclusion_q2
// inclusion_q3
// exclusion_q1
// exclusion_q2
// exclusion_q3
// exclusion_q4
// exclusion_q5
// birth_date
// gender
// mh__diabetes
// mh__epoc
// mh__heart_failure
// mh__cancer
// mh__neurological_disease
// mh__liver_diseases
// mh__inflammatory_bowel_disease
// mh__renal_failure
// mh__other_chronic_diseases
// mh__others
// mh__others_description
// scheduled_visit
// hospitalization
// hospitalization_reason
// current_body_weight
// usual_body_weight
// loss_last_six_months
// weight_loss_percentage
// BMI
// height
// calf_circumference
// ns__must
// ns__nrs_2002
// ns__mna_sf
// ns__mis
// ns__snaq
// ns__conut
// ns__other
// ns__other_description
// ns__result
// ms__sarc_f
// ms__other
// ms__other_description
// ms__result
// nd__glim
// nd__mna
// nd__vgs
// nd__other
// nd__other_description
// patient_malnourished
// patient_malnourished__diagnosis
// patient_malnourished__procedure
// does_the_patient_have_sarcopenia
// sarcopenia__diagnosis
// dynamometry__not_possible
// dynamometry
// test_chair__not_possible
// test_chair_five_repetitions
// bi__hydratation
// bi__tbm
// bi__ecw
// bi__icw
// bi__ffm
// bi__fm
// bi__bcm
// bi__bcm_h
// bi__asmm
// bi__smi
// bi__body_fat
// bi__resistance
// bi__reactance
// bi__phase_angle
// bi__standarized_phase_angle
// dexa__ffm
// dexa__fm
// tc__ffm
// tc__fm
// au__preperitoneal
// au__superficial
// au__total_adipose_tissue
// mu__area
// mu__circumference
// mu__axes_xax
// mu__axes_yax
// mu__adipose_tissue
// mar__normal
// nt__planted_objectives__weight_gain
// nt__planted_objectives__muscle_gain
// nt__planted_objectives__preservation_status
// nt__planted_objectives__other
// nt__planted_objectives__other_description
// nt__start
// nti__parental_nutrition
// nti__dietary_modifications
// nti__son
// nti__son__option
// nti__son__other_description
// nti__en
// nti__en__option
// nti__en__other_description
// refers_patient_to_begin_nutritional_treatment
// pa__prescribed
// pa__prescribed_reasons
// pa__aerobic_predominance
// pa__predominance_muscular_strength
// pa__mixed

pa__hpftppar
pa__hpftppar_percent
pa__reason
nt__has_not_got_improvement_reason
nt__improvement
nt__objective_reached
nt__objective_reached_reason
nt__pnr
nt__pnr_percent
nt__reason
patient_current_situation
patient_current_situation_date
patient_id
ans__anthropometry__calf_circumference
ans__anthropometry__current_bmi
ans__anthropometry__current_weight
ans__anthropometry__difference_percentage
ans__anthropometry__initial_weight
cppi__considers_that_patient_perceives_improvement
cppi__considers_that_patient_perceives_improvement_reasons
created_at
hfnr__followed_prescribed_nutritional_recommendation
hfnr__not_followed_prescribed_recommendation
hfnr__percentage_of_adherece_to_recommendations
hfppar__not_followed_prescribed_recommendation
hfppar_followed_prescribed_physical_activity_recommendation
hfppar_percentage_of_adherece_to_recommendations
rng__has_reached_nutritional_goal
rng__has_reached_nutritional_goal_reasons
updated_at
valuation_date
visit_type
