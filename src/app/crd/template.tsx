import { Wrapper } from '@/components'

const Template = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Wrapper>{children}</Wrapper>
		</>
	)
}

export default Template
