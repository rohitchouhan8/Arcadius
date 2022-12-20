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
			<div className='w-full absolute flex flex-row justify-end z-50 p-10'>
				<a href='/'>
					<h1 className='font-bold text-2xl px-2 py-1 border border-gray-50'>
						Arcadius
					</h1>
				</a>
			</div>
			<Component {...pageProps} />
		</main>
	)
}
