import { Navbar, Header } from '@/components'

const MainTemplate = ({
	children,
}: {
	children: React.ReactNode
}): JSX.Element => {
	return (
		<>
			<div className="grid grid-cols-12">
				<div className="min-h-screen -left-full fixed z-30 sm:w-auto sm:relative sm:left-auto sm:col-span-4 md:col-span-3 xl:col-span-2">
					<Navbar />
				</div>

				<section className="col-span-12 w-full min-h-screen overflow-hidden sm:col-span-8 md:col-span-9 xl:col-span-10">
					<div className="max-w-full">
						<div className="grid max-w-full">
							<Header />

							<div className="row-span-2 px-6 py-5 overflow-x-auto xl:px-10">
								{children}
							</div>

							<div className="text-slate-400 w-full px-6 py-8 flex justify-end">
								<span className="text-xxs select-none">
									&copy;2023 Advance experts
								</span>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export default MainTemplate
