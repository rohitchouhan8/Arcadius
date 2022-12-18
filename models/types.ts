import { StaticImageData } from "next/image"

export const statValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
export type StatValue = typeof statValues[number]

export type Stats = {
	strength: StatValue
	endurance: StatValue
	defense: StatValue
	dexterity: StatValue
	intelligence: StatValue
	charisma: StatValue
	wisdom: StatValue
	perception: StatValue
}

export enum HeroName {
	SERAPHINA = "Seraphina",
	NIGHTSHADE = "Nightshade",
	THUNDERFIST = "Thunderfist",
	MOONFIRE = "Moonfire",
	ARCHMAGUS = "Archmagus",
	HELIX = "Helix",
}

export type Hero = {
	name: HeroName
	description: string
	image: Image
	stats: Stats
	faction: FactionId
}

export enum FactionId {
	ORDER_OF_RADIANT_SUN = "orderOfRadiantSun",
	SHADOWCLAW_CLAN = "shadowclawClan",
	IRONFIST_LEGION = "ironfistLegion",
	WILDHUNT = "wildhunt",
	ARCANE_ACADEMY = "arcaneAcademy",
	TECHNOMANCERS = "technomancers",
}

export type Faction = {
	name: string
	description: string
	armyImage: Image
	homeImage: Image
	heroes: Hero[]
}

export type Image = {
	data: StaticImageData
	alt: string
}
