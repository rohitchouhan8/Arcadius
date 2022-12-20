import FactionDetail from "../components/factionDetail"
import { FactionId } from "../models/types"
import Layout from "../components/layout"
import React from "react"
import { getFactionById } from "../models/factions"

export default function ShadowclawClan() {
	const faction = getFactionById(FactionId.SHADOWCLAW_CLAN)
	return (
		<Layout>
			<FactionDetail faction={faction} />
		</Layout>
	)
}
