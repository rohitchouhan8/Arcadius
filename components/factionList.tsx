import React from "react"
import { factionById } from "../models/factions"
import { Faction } from "../models/types"
import Image from "next/image"

export default function FactionList() {
	return (
		<ul className="w-full flex flex-col gap-8">
			{Object.entries(factionById).map(([key, faction]) => (
				<Faction key={key} url={key} faction={faction} />
			))}
		</ul>
	)
}

function Faction({ url, faction }: { url: string; faction: Faction }) {
	return (
		<li
			className={`w-full relative h-64 group overflow-clip border-8 shadow-inner border-gray-700`}
		>
			<a href={`/${url}`}>
				<Image
					className="absolute object-cover scale-105 group-hover:scale-110 transition-all duration-300 ease-linear -top-8"
					src={faction.armyImage.data}
					alt={faction.armyImage.alt}
				/>
				<div className="absolute w-full h-full bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
				<div className="absolute bottom-8 left-8 border border-gray-50 p-2">
					<h2 className="font-semibold">{faction.name}</h2>
				</div>
			</a>
		</li>
	)
}
