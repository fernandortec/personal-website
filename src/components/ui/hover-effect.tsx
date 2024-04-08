"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode, useState } from "react";

interface HoverEffectProps {
	items: ReactNode[];
	className?: string;
}

export const HoverEffect = ({
	items,
	className,
}: HoverEffectProps): JSX.Element => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div
			className={cn(
				"flex md:flex-col py-10 h-14 md:h-auto w-screen md:w-auto px-4 whitespace-nowrap overflow-scroll",
				className,
			)}
		>
				{items.map((item, idx) => (
					<div
						key={item?.toString()}
						className="relative flex items-center justify-center group  block p-2 h-full w-full"
						onMouseEnter={() => setHoveredIndex(idx)}
						onMouseLeave={() => setHoveredIndex(null)}
					>
						{item}
						<AnimatePresence>
							{hoveredIndex === idx && (
								<motion.span
									className="absolute inset-0 z-10 p-0 h-32 mt-[-1.2rem] md:mt-0 md:h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-lg "
									layoutId="hoverBackground"
									initial={{ opacity: 0 }}
									animate={{
										opacity: 1,
										transition: { duration: 0.15 },
									}}
									exit={{
										opacity: 0,
										transition: { duration: 0.15, delay: 0.2 },
									}}
								/>
							)}
						</AnimatePresence>
					</div>
				))}
		</div>
	);
};
