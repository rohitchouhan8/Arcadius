import FactionList from "../components/factionList"
import Head from "next/head"
import Image from "next/image"
import Layout from "../components/layout"
import arcadiusImage from "../public/home/arcadius.png"

export default function Home() {
	return (
		<>
			<Head>
				<title>Arcadius</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='flex flex-col'>
				<div className='relative flex flex-col items-center justify-center h-screen bg-blend-darken'>
					<Image
						className='absolute h-full w-full object-cover'
						src={arcadiusImage}
						alt='Arcadius'
					/>
					<div className='absolute h-full w-full bg-gradient-to-b from-transparent via-gray-900 to-transparent opacity-50'></div>
					<div className='flex flex-col justify-center items-center gap-8 max-w-2xl z-10'>
						<h1 className='text-6xl font-bold text-white'>
							Arcadius
						</h1>
						<p className='text-gray-50 text-xl'>
							A place of idyllic beauty and perfect happiness. It
							is a world of magic and wonder, where ancient powers
							and modern technologies coexist and where the forces
							of light and darkness are constantly at odds.
						</p>
					</div>
				</div>
				<Layout>
					<FactionList />
				</Layout>
			</div>
		</>
	)
}
