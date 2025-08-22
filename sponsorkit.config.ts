import { type BadgePreset, defineConfig, tierPresets } from "sponsorkit";

const past: BadgePreset = {
	avatar: {
		size: 20,
	},
	boxWidth: 22,
	boxHeight: 22,
	container: {
		sidePadding: 35,
	},
};

export default defineConfig({
	tiers: [
		{
			title: "Past Sponsors",
			monthlyDollars: -1,
			preset: past,
		},
		{
			title: "Backers",
			preset: tierPresets.small,
		},
		{
			title: "Sponsors",
			monthlyDollars: 10,
			preset: {
				avatar: {
					size: 42,
				},
				boxWidth: 52,
				boxHeight: 52,
				container: {
					sidePadding: 30,
				},
			},
		},
		{
			title: "Silver Sponsors",
			monthlyDollars: 30,
			preset: tierPresets.medium,
		},
		{
			title: "Gold Sponsors",
			monthlyDollars: 60,
			preset: tierPresets.large,
		},
		{
			title: "Platinum Sponsors",
			monthlyDollars: 100,
			preset: tierPresets.xl,
		},
	],

	outputDir: ".",
	formats: ["svg", "png"],

	renders: [
		{
			name: "sponsors",
			width: 800,
		},
		{
			name: "sponsors.wide",
			width: 1800,
		},
	],
});
