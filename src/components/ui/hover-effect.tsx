"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";

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
				"flex h-24 md:flex-col py-10 md:h-auto w-screen md:w-auto px-4 whitespace-nowrap overflow-x-scroll overflow-y-hidden",
				className,
			)}
		>
				{items.map((item, idx) => (
					<div
						key={item?.toString()}
						className="relative flex items-center justify-center group block h-full w-full p-2"
						onMouseEnter={() => setHoveredIndex(idx)}
						onMouseLeave={() => setHoveredIndex(null)}
					>
						{item}
						<AnimatePresence>
							{hoveredIndex === idx && (
								<motion.span
									className="absolute mx-auto self-center inset-0 z-10 h-14 md:h-full w-[90%] bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-md "
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
