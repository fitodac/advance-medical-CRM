import { useCrdStore } from '@/store'
import {
	initial as menuInicialList,
	visit1 as menuVisit1List,
	handleScroll,
} from '../(helpers)'

const menuClass = {
	title: 'text-slate-600 text-xs font-semibold px-3 pt-5',
	container:
		'max-h-[68vh] scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100 pb-20',
	ul: 'text-slate-500 pt-4',
	nav: 'border-slate-100 border-l-2 text-sm text-left leading-none inline-block px-3 py-2 flex gap-x-1.5 select-none transition-all hover:text-teal-400 hover:border-primary',
}

export const Sidebar = () => {
	const { currentForm, setCurrentForm } = useCrdStore()

	return (
		<>
			<div className="bg-slate-100 -ml-6 hidden relative lg:block">
				<div className="tabs">
					<input
						type="radio"
						name="tabsNav"
						id="initial"
						onChange={() => setCurrentForm('initial')}
						checked={currentForm === 'initial'}
					/>
					<input
						type="radio"
						name="tabsNav"
						id="first"
						onChange={() => setCurrentForm('visit1')}
						checked={currentForm === 'visit1'}
					/>

					<div className="tabs-nav">
						<label htmlFor="initial" className="tab-item" data-tab="first">
							Visita inicial
						</label>
						<label htmlFor="first" className="tab-item" data-tab="initial">
							Seguimiento 1
						</label>
					</div>

					<div className="tabs-content">
						<div className="tab-body">
							<div className={menuClass.title}>Visita inicial</div>
							<div className={menuClass.container}>
								<ul className={menuClass.ul}>
									{menuInicialList.map(({ toId, label }, i) => (
										<li key={toId}>
											<button
												className={menuClass.nav}
												onClick={() => handleScroll(toId)}
											>
												<span className="text-teal-400">{i}</span>
												<span className="">{label}</span>
											</button>
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className="tab-body">
							<div className={menuClass.title}>Seguimiento 1</div>
							<div className={menuClass.container}>
								<ul className={menuClass.ul}>
									{menuVisit1List.map(({ toId, label }, i) => (
										<li key={toId}>
											<button
												className={menuClass.nav}
												onClick={() => handleScroll(toId)}
											>
												<span className="text-teal-400">{i}</span>
												<span className="">{label}</span>
											</button>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
