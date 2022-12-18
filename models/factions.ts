import {
	ARCHMAGUS,
	HELIX,
	MOONFIRE,
	NIGHTSHADE,
	SERAPHINA,
	THUNDERFIST,
} from "./heroes"
import { Faction, FactionId } from "./types"

import ArcaneAcademyArmyImage from "../public/arcane_academy/army.png"
import ArcaneAcademyHomeImage from "../public/arcane_academy/home.png"
import IronfistArmyImage from "../public/ironfist_legion/army.png"
import IronfistHomeImage from "../public/ironfist_legion/home.png"
import RadiantSunArmyImage from "../public/order_of_radiant_sun/army.png"
import RadiantSunHomeImage from "../public/order_of_radiant_sun/home.png"
import ShadowclawArmyImage from "../public/shadowclaw_clan/army.png"
import ShadowclawHomeImage from "../public/shadowclaw_clan/home.png"
import TechnomancersArmyImage from "../public/technomancers/army.png"
import TechnomancersHomeImage from "../public/technomancers/home.png"
import WildhuntArmyImage from "../public/wildhunt/army.png"
import WildhuntHomeImage from "../public/wildhunt/home.png"

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
	[FactionId.SHADOWCLAW_CLAN]: {
		name: "Shadowclaw Clan",
		description:
			"This faction is motivated by a desire for power and control. They are skilled in the art of stealth and assassination, using poison and shadow magic to strike from the shadows and eliminate their targets. The Shadowclaw Clan is made up primarily of dark elves and other shadowy races, such as halflings and gnomes.",
		armyImage: {
			data: ShadowclawArmyImage,
			alt: "Shadowclaw Clan Army",
		},
		homeImage: {
			data: ShadowclawHomeImage,
			alt: "Shadowclaw Clan Home",
		},
		heroes: [NIGHTSHADE],
	},
	[FactionId.IRONFIST_LEGION]: {
		name: "Ironfist Legion",
		description:
			"This faction values strength and discipline above all else. They are heavily armed and armored, using brute force and well-coordinated tactics to crush their enemies on the battlefield. The Ironfist Legion is made up mostly of dwarves, orcs, and other stout races, such as minotaurs and ogres.",
		armyImage: {
			data: IronfistArmyImage,
			alt: "Ironfist Legion Army",
		},
		homeImage: {
			data: IronfistHomeImage,
			alt: "Ironfist Legion Home",
		},
		heroes: [THUNDERFIST],
	},
	[FactionId.WILDHUNT]: {
		name: "The Wildhunt",
		description:
			"This faction is driven by a primal desire for freedom and chaos. They are skilled in the use of primal magic and the use of beasts in combat. The Wild Hunt is made up of a variety of races, including humans, centaurs, and lycanthropes.",
		armyImage: {
			data: WildhuntArmyImage,
			alt: "Wildhunt Army",
		},
		homeImage: {
			data: WildhuntHomeImage,
			alt: "Wildhunt Home",
		},
		heroes: [MOONFIRE],
	},
	[FactionId.ARCANE_ACADEMY]: {
		name: "Arcane Academy",
		description:
			"This faction is motivated by a desire for knowledge and the pursuit of magical research. They are skilled in the use of a wide range of magical disciplines and use their knowledge to outmaneuver their enemies in combat. The Arcane Academy is made up primarily of humans, elves, and other intelligent races, such as dragons and griffins.",
		armyImage: {
			data: ArcaneAcademyArmyImage,
			alt: "Arcane Academy Army",
		},
		homeImage: {
			data: ArcaneAcademyHomeImage,
			alt: "Arcane Academy Home",
		},
		heroes: [ARCHMAGUS],
	},
	[FactionId.TECHNOMANCERS]: {
		name: "Technomancers",
		description:
			"This faction is composed of experts in science, technology, and engineering, and they use their knowledge to further their goals and achieve their objectives. They are known for their advanced technological devices and their focus on innovation and progress.",
		armyImage: {
			data: TechnomancersArmyImage,
			alt: "Technomancers Army",
		},
		homeImage: {
			data: TechnomancersHomeImage,
			alt: "Technomancers Home",
		},
		heroes: [HELIX],
	},
}
