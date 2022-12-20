import "../styles/globals.css"

import type { AppProps } from "next/app"
import { Josefin_Slab } from "@next/font/google"

const josefinSlab = Josefin_Slab({
	subsets: ["latin"],
	variable: "--font-josefin-slab",
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main
			className={`${josefinSlab.variable} font-serif text-gray-300 text-lg bg-gray-900`}
		>
			<Component {...pageProps} />
		</main>
	)
}
