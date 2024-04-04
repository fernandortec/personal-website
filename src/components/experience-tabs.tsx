import { ExperienceTabsContent } from "@/components/experience-tabs-content";
import { HoverEffect } from "@/components/ui/hover-effect";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import type { ReactNode } from "react";

export function ExperienceTabs(): JSX.Element {
	const allTabsTriggers: ReactNode[] = [
		<TabsTrigger
			className="w-32 bg-transparent h-10 relative z-20 hover:bg-transparent"
			value="dygo"
		>
			Dygo Brasil
		</TabsTrigger>,
		<TabsTrigger
			className="w-32 bg-transparent h-10 relative z-20 hover:bg-transparent"
			value="uds"
		>
			UDS Tecnologia
		</TabsTrigger>,
		<TabsTrigger
			className="w-32 bg-transparent h-10 relative z-20 hover:bg-transparent"
			value="ioasys"
		>
			Ioasys
		</TabsTrigger>,
		<TabsTrigger
			className="w-32 bg-transparent h-10 relative z-20 hover:bg-transparent"
			value="plusdin"
		>
			Plusdin
		</TabsTrigger>,
	];

	return (
		<Tabs defaultValue="dygo" className="flex items-center gap-8 ">
			<TabsList className="flex-col h-64 bg-transparent gap-4 border-r border-r-base-accent rounded-none pr-4">
				<HoverEffect className="flex flex-col" items={allTabsTriggers} />
			</TabsList>
			<ExperienceTabsContent />
		</Tabs>
	);
}
