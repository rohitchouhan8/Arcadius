import { FactionId, Hero, HeroName } from "./types"

import ArchmagusImage from "../public/arcane_academy/archmagus.png"
import HelixImage from "../public/technomancers/helix.png"
import MoonfireImage from "../public/wildhunt/moonfire.png"
import NightshadeImage from "../public/shadowclaw_clan/nightshade.png"
import SeraphinaImage from "../public/order_of_radiant_sun/seraphina.png"
import ThunderfistImage from "../public/ironfist_legion/thunderfist.png"

export const SERAPHINA: Hero = {
	name: HeroName.SERAPHINA,
	description: "a powerful paladin and leader of the Order",
	image: {
		data: SeraphinaImage,
		alt: "Seraphina",
	},
	stats: {
		strength: 8,
		endurance: 8,
		defense: 9,
		dexterity: 6,
		intelligence: 9,
		charisma: 10,
		wisdom: 10,
		perception: 8,
	},
	faction: FactionId.ORDER_OF_RADIANT_SUN,
}

export const NIGHTSHADE: Hero = {
	name: HeroName.NIGHTSHADE,
	description: "a skilled assassin and leader of the Shadowclaw Clan",
	image: {
		data: NightshadeImage,
		alt: "Nightshade",
	},
	stats: {
		strength: 6,
		endurance: 6,
		defense: 5,
		dexterity: 10,
		intelligence: 8,
		charisma: 8,
		wisdom: 7,
		perception: 10,
	},
	faction: FactionId.SHADOWCLAW_CLAN,
}

export const THUNDERFIST: Hero = {
	name: HeroName.THUNDERFIST,
	description: " a formidable warrior and leader of the Ironfist Legion",
	image: {
		data: ThunderfistImage,
		alt: "Thunderfist",
	},
	stats: {
		strength: 10,
		endurance: 10,
		defense: 10,
		dexterity: 7,
		intelligence: 6,
		charisma: 7,
		wisdom: 7,
		perception: 6,
	},
	faction: FactionId.IRONFIST_LEGION,
}

export const MOONFIRE: Hero = {
	name: HeroName.MOONFIRE,
	description: "a powerful druid and leader of the Wild Hunt",
	image: {
		data: MoonfireImage,
		alt: "Moonfire",
	},
	stats: {
		strength: 8,
		endurance: 8,
		defense: 6,
		dexterity: 9,
		intelligence: 9,
		charisma: 8,
		wisdom: 10,
		perception: 9,
	},
	faction: FactionId.WILDHUNT,
}

export const ARCHMAGUS: Hero = {
	name: HeroName.ARCHMAGUS,
	description: "a powerful mage and leader of the Arcane Academy",
	image: {
		data: ArchmagusImage,
		alt: "Archmagus",
	},
	stats: {
		strength: 5,
		endurance: 5,
		defense: 6,
		dexterity: 6,
		intelligence: 10,
		charisma: 8,
		wisdom: 10,
		perception: 9,
	},
	faction: FactionId.ARCANE_ACADEMY,
}

export const HELIX: Hero = {
	name: HeroName.HELIX,
	description: "a powerful technomancer and leader of the Technomancers",
	image: {
		data: HelixImage,
		alt: "Helix",
	},
	stats: {
		strength: 5,
		endurance: 6,
		defense: 7,
		dexterity: 8,
		intelligence: 10,
		charisma: 7,
		wisdom: 9,
		perception: 9,
	},
	faction: FactionId.TECHNOMANCERS,
}
