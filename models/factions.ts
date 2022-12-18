import { Faction, FactionId } from "./types"

import RadiantSunArmyImage from "../public/order_of_radiant_sun/army.png"
import RadiantSunHomeImage from "../public/order_of_radiant_sun/home.png"
import { SERAPHINA } from "./heroes"

export const factionById: Partial<Record<FactionId, Faction>> = {
	[FactionId.ORDER_OF_RADIANT_SUN]: {
		name: "Order of Radiant Sun",
		description:
			"This faction is motivated by a desire to bring peace and prosperity to the world through the use of holy magic and righteous deeds. They wield powerful magical artifacts and use defensive tactics in combat, relying on their superior healing abilities to outlast their enemies. The Order is made up of a diverse group of races, including humans, elves, and dwarves.",
		armyImage: {
			data: RadiantSunArmyImage,
			alt: "Order of Radiant Sun Army",
		},
		homeImage: {
			data: RadiantSunHomeImage,
			alt: "Order of Radiant Sun Home",
		},
		heroes: [SERAPHINA],
	},
}
