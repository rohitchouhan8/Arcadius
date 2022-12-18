import "../styles/globals.css"

import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className="font-serif text-gray-50 text-lg bg-gray-900">
			<Component {...pageProps} />
		</div>
	)
}
