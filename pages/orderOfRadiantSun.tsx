import FactionDetail from "../components/factionDetail"
import { FactionId } from "../models/types"
import Layout from "../components/layout"
import React from "react"
import { getFactionById } from "../models/factions"

export default function OrderOfRadiantSun() {
	const faction = getFactionById(FactionId.ORDER_OF_RADIANT_SUN)
	return (
		<Layout>
			<FactionDetail faction={faction} />
		</Layout>
	)
}
