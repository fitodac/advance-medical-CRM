import { Navbar, Header, Footer } from '.'

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
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

						<Footer />
					</div>
				</div>
			</section>
		</>
	)
}
