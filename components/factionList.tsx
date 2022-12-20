import { Faction } from "../models/types"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { factionById } from "../models/factions"

export default function FactionList() {
	return (
		<ul className='w-full flex flex-col gap-8'>
			{Object.entries(factionById).map(([key, faction]) => (
				<FactionCard key={key} url={key} faction={faction} />
			))}
		</ul>
	)
}

function FactionCard({ url, faction }: { url: string; faction: Faction }) {
	return (
		<li
			className={`w-full relative h-64 group overflow-clip border border-gray-600`}
		>
			<Link href={`/${url}`}>
				<Image
					className='absolute h-full w-full object-cover object-top group-hover:scale-110 transition-all duration-300 ease-linear'
					src={faction.armyImage.data}
					alt={faction.armyImage.alt}
				/>
				<div className='absolute w-full h-full bg-gradient-to-t from-gray-900 to-transparent opacity-60'></div>
				<div className='absolute bottom-8 md:left-8 md:right-auto left-0 right-0 mx-2 border border-gray-50 p-2 flex justify-center'>
					<h2 className='font-semibold'>{faction.name}</h2>
				</div>
			</Link>
		</li>
	)
}
