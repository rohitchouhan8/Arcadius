import { FactionId, Hero, HeroName } from "./types"

import SeraphinaImage from "../public/order_of_radiant_sun/seraphina.png"

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
