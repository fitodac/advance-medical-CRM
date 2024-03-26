const LoginLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<section className="bg-login-image border-b-[46px] border-secondary w-screen h-screen p-6 grid grid-cols-1 place-content-center">
				<div className="col-span-1 flex justify-center">{children}</div>
			</section>
		</>
	)
}

export default LoginLayout
