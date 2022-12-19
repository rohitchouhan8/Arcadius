import { PropsWithChildren } from "react"

export default function Layout({ children }: PropsWithChildren) {
	return (
		<div className="w-full h-full">
			<div className="flex flex-col max-w-3xl min-h-screen items-center mx-auto py-24">
				{children}
			</div>
		</div>
	)
}
