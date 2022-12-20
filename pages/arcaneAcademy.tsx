import FactionDetail from "../components/factionDetail"
import { FactionId } from "../models/types"
import Layout from "../components/layout"
import React from "react"
import { getFactionById } from "../models/factions"

export default function ArcaneAcademy() {
	const faction = getFactionById(FactionId.ARCANE_ACADEMY)
	return (
		<Layout>
			<FactionDetail faction={faction} />
		</Layout>
	)
}
