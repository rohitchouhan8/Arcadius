import React from "react"
import { factionById } from "../models/factions"
import { Faction } from "../models/types"
import Image from "next/image"

export default function FactionList() {
	return (
		<ul className="w-full">
			{Object.entries(factionById).map(([key, faction]) => (
				<Faction key={key} url={key} faction={faction} />
			))}
		</ul>
	)
}

function Faction({ url, faction }: { url: string; faction: Faction }) {
	return (
		<li className={`w-full relative h-64 group overflow-clip`}>
			<a href={`/${url}`}>
				<Image
					className="absolute my-auto object-cover hover:scale-110 transition-all duration-500"
					src={faction.armyImage.data}
					alt={faction.armyImage.alt}
				/>
				<div className="absolute bottom-10 left-10">
					<h2 className="font-semibold">{faction.name}</h2>
				</div>
			</a>
		</li>
	)
}
