import { ALL_HEROES } from "../heroes"
import { Stats } from "../types"

describe("All heroes", () => {
	test("should have unique names", () => {
		const names = ALL_HEROES.map((hero) => hero.name)
		expect(names).toHaveLength(new Set(names).size)
	})

	test("should have non-empty descriptions", () => {
		ALL_HEROES.forEach((hero) => {
			expect(hero.description).toBeTruthy()
		})
	})

	test("average stats should be similar", () => {
		// Get average stat value for each hero
		const averageStats = ALL_HEROES.map((hero) => {
			const { name } = hero
			const stats = Object.values(hero.stats)
			const average = stats.reduce((a, b) => a + b) / stats.length
			return { name, average }
		})

		// Test that the average is within 1 of the median
		const median = averageStats.map((a) => a.average).sort()[
			Math.floor(averageStats.length / 2)
		]

		averageStats.forEach(({ average }) => {
			expect(average).toBeGreaterThanOrEqual(median - 1)
			expect(average).toBeLessThanOrEqual(median + 1)
		})
	})

	test("should have valid stats", () => {
		ALL_HEROES.forEach((hero) => {
			Object.values(hero.stats).forEach((stat) => {
				expect(stat).toBeGreaterThanOrEqual(1)
				expect(stat).toBeLessThanOrEqual(10)
			})
		})
	})
})
