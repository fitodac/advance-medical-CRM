import { Navbar, Header } from '@/components'

const MainTemplate = ({
	children,
}: {
	children: React.ReactNode
}): JSX.Element => {
	return (
		<>
			<div className="grid grid-cols-12">
				<div
					className="bg-teal w-screen min-h-screen -left-full fixed 
				sm:w-auto sm:relative sm:left-auto sm:col-span-3 
				lg:col-span-2"
				>
					<Navbar />
				</div>

				<section
					className="col-span-12 w-full min-h-screen overflow-hidden 
					sm:col-span-9 lg:col-span-10"
				>
					<div className="max-w-full">
						<div className="grid max-w-full">
							<Header />

							<div className="row-span-2 px-6 py-5 overflow-x-auto">
								{children}
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export default MainTemplate
