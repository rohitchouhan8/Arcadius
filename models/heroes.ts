import { FactionId, Hero, HeroName } from "./types"

import ArchmagusImage from "../public/arcane_academy/archmagus.png"
import HelixImage from "../public/technomancers/helix.png"
import MoonfireImage from "../public/wildhunt/moonfire.png"
import NightshadeImage from "../public/shadowclaw_clan/nightshade.png"
import SeraphinaImage from "../public/order_of_radiant_sun/seraphina.png"
import ThunderfistImage from "../public/ironfist_legion/thunderfist.png"

export const SERAPHINA: Hero = {
	name: HeroName.SERAPHINA,
	description: `As a member of the Order of Radiant Sun, Seraphina took vows to uphold the values of the organization and use her powers for the greater good. She spent many years training and serving within the Order, becoming one of their most skilled and respected members.

Seraphina's dedication to the Order and her strong sense of justice often put her at odds with those who sought to use their powers for personal gain or to spread chaos and destruction. She often found herself on dangerous missions, fighting against dark forces and powerful enemies who threatened the peace and prosperity of the world.

Despite the challenges she faced, Seraphina remained steadfast in her commitment to the Order and the cause of good. She knew that her powers were a gift, and she used them to bring hope and healing to those in need. With her unwavering faith and her powerful holy magic, Seraphina became a shining example of what it meant to be a member of the Order of Radiant Sun.`,
	image: {
		data: SeraphinaImage,
		alt: "Seraphina",
	},
	stats: {
		strength: 5,
		endurance: 8,
		defense: 9,
		dexterity: 7,
		intelligence: 9,
		charisma: 6,
		wisdom: 10,
		perception: 8,
	},
	faction: FactionId.ORDER_OF_RADIANT_SUN,
}

export const NIGHTSHADE: Hero = {
	name: HeroName.NIGHTSHADE,
	description: `Nightshade was a male dark elf who had been trained in the art of stealth and assassination from a young age. He was known for his exceptional cunning and ability to outmaneuver his opponents, using poison and shadow magic to strike from the shadows and eliminate his targets.

As he grew older, Nightshade became one of the most skilled and feared members of the Nightclaw Clan, renowned for his ability to plot and execute complex schemes to further the clan's goals of power and control. Despite his loyalty to the clan, Nightshade was not above using underhanded tactics and manipulating those around him to get what he wanted.

However, Nightshade's true strength lay in his ability to think on his feet and adapt to any situation. He was a master of improvisation, able to come up with creative solutions to seemingly impossible problems in the heat of battle. This made him a valuable asset to the Nightclaw Clan, and he was often called upon to lead crucial missions on their behalf.

Despite his cunning and ruthless nature, Nightshade was not without his own code of ethics. He believed in the power of the Nightclaw Clan and their right to rule, but he also understood the importance of fairness and justice. He was a complex character, driven by a desire for power and control, but also capable of showing compassion and mercy when the situation called for it.`,
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
	description: `Thunderfist was born into the Ironfist Legion, the son of a renowned warrior and a skilled blacksmith. From a young age, he was trained in the ways of combat and honed his strength and discipline. He quickly rose through the ranks, earning the respect of his fellow soldiers with his fierce loyalty and tireless determination.

Despite his youth, Thunderfist proved to be a formidable force on the battlefield, leading his comrades to victory time and time again. His tactics and strategies were unmatched, and he became a symbol of hope and strength for the Ironfist Legion.

As he grew older, Thunderfist took on more responsibilities within the organization, eventually becoming a commander of one of its largest and most respected units. He continued to serve with distinction, always putting the needs of the Ironfist Legion above his own. His name became synonymous with honor and bravery, and he remained a beloved figure among his people for the rest of his days.`,
	image: {
		data: ThunderfistImage,
		alt: "Thunderfist",
	},
	stats: {
		strength: 10,
		endurance: 10,
		defense: 8,
		dexterity: 7,
		intelligence: 6,
		charisma: 8,
		wisdom: 7,
		perception: 6,
	},
	faction: FactionId.IRONFIST_LEGION,
}

export const MOONFIRE: Hero = {
	name: HeroName.MOONFIRE,
	description: `Moonfire was born into the Wildhunt, a fierce and independent group of warriors who valued freedom above all else. From a young age, she was drawn to the primal magic of the Wildhunt, and she spent countless hours studying and practicing the ancient arts.

As she grew older, Moonfire became a skilled practitioner of magic, able to call upon the spirits of nature to aid her in battle. She was also a skilled tamer of beasts, often leading the charge into battle alongside her wolf companion. The two were inseparable, bonded by their love of freedom and their desire to roam the wild.

Moonfire's fierce spirit and love of freedom made her a natural leader among the Wildhunt, and she quickly rose through the ranks. She became a fierce and respected warrior, feared by her enemies and revered by her allies. Her name became synonymous with the Wildhunt's desire for freedom and chaos, and she remains a beloved figure among her people to this day.`,
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
	description: `Archmagus was a brilliant and ambitious young wizard who dedicated his life to the pursuit of knowledge and the study of magic. He had a particular affinity for the arcane arts and spent years studying various magical disciplines, always striving to learn more and improve his skills.

Eventually, Archmagus came across the Arcane Academy, a society of like-minded mages who shared his passion for knowledge and research. He was immediately drawn to the organization and applied to become a member. His application was accepted, and he eagerly joined the Arcane Academy, eager to contribute his skills and knowledge to the society.

As a member of the Arcane Academy, Archmagus quickly made a name for himself with his deep understanding of arcane magic and his innovative approaches to research. He became an invaluable member of the society, always seeking to push the boundaries of magic and to share his knowledge with others. Though the Arcane Academy had no leaders, Archmagus's intelligence, dedication, and expertise earned him the respect and admiration of his fellow mages, and he became a respected figure within the organization.`,
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
	description: `Helix was born into a world of science and technology, surrounded by gadgets and gizmos from a young age. He showed an early aptitude for engineering and spent much of his time tinkering and experimenting, always seeking to learn more and improve his skills.

As he grew older, Helix became a skilled technomancer, dedicated to the pursuit of knowledge and innovation. He always had a strong dislike for magic, viewing it as something that couldn't be explained or understood through logical means. He preferred the certainty and predictability of science and technology.

When Helix discovered the Technomancers, a group of like-minded individuals who shared his passion for technology and progress, he knew he had found his true home. He eagerly joined the organization, eager to contribute his skills and knowledge to the cause.

Within the Technomancers, Helix quickly made a name for himself with his exceptional technical expertise and his innovative ideas. He became a key member of the organization, always pushing the boundaries of science and technology in order to achieve their goals. His contributions to the field were invaluable, and he became a respected figure within the Technomancers.`,
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

export const HEROES_BY_FACTION: Record<FactionId, Hero[]> = {
	[FactionId.SHADOWCLAW_CLAN]: [NIGHTSHADE],
	[FactionId.IRONFIST_LEGION]: [THUNDERFIST],
	[FactionId.WILDHUNT]: [MOONFIRE],
	[FactionId.ARCANE_ACADEMY]: [ARCHMAGUS],
	[FactionId.TECHNOMANCERS]: [HELIX],
	[FactionId.ORDER_OF_RADIANT_SUN]: [SERAPHINA],
}

export const ALL_HEROES: Hero[] = [
	NIGHTSHADE,
	THUNDERFIST,
	MOONFIRE,
	ARCHMAGUS,
	HELIX,
	SERAPHINA,
]
