import { PropsWithChildren } from "react"

export default function Layout({ children }: PropsWithChildren) {
	return (
		<div className="w-full h-full">
			<div className="flex flex-col max-w-4xl min-h-screen items-center mx-auto">
				{children}
			</div>
		</div>
	)
}
