import { ExperienceTabsContent } from "@/components/experience-tabs-content";
import { HoverEffect } from "@/components/ui/hover-effect";
import { Meteors } from "@/components/ui/meteors";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ExperienceTabs(): JSX.Element {
	const allTabsTriggersContent = [
		{ value: "dygo", label: "Dygo Brasil" },
		{ value: "uds", label: "UDS Tecnologia" },
		{ value: "ioasys", label: "Ioasys" },
		{ value: "plusdin", label: "Plusdin" },
	];

	const triggers = allTabsTriggersContent.map((trigger) => (
		<TabsTrigger
			className="w-32 bg-transparent h-10 relative z-20 hover:bg-transparent"
			value={trigger.value}
			key={trigger.value}
		>
			{trigger.label}
		</TabsTrigger>
	));

	return (
		<Tabs
			defaultValue="dygo"
			className="flex flex-col w-full items-center gap-12 relative  md:px-24 md:flex-row"
		>
			<Meteors className="absolute ml-96" />
			<TabsList className="md:h-64 bg-transparent gap-4 border-r-base-accent rounded-none pr-4 md:border-r">
				<HoverEffect items={triggers} />
			</TabsList>
			<ExperienceTabsContent />
		</Tabs>
	);
}
