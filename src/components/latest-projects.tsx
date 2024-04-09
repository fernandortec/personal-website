import {
	GlowingStarsBackgroundCard,
	GlowingStarsDescription,
	GlowingStarsTitle,
} from "@/components/ui/glowing-stars-card";
import { ExitIcon, IconJarLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export function LatestProjects(): JSX.Element {
	return (
		<GlowingStarsBackgroundCard className="relative">
			<div className="triangle absolute top-0 right-0 ">
				<Image
					alt=""
					src="/assets/coffee-shop-banner.svg"
					layout="fill"
					objectFit="cover"
					className=" w-full h-full z-50"
				/>
			</div>
			<GlowingStarsTitle>Next.js 14</GlowingStarsTitle>
			<div className="flex justify-between items-end">
				<GlowingStarsDescription>
					The power of full-stack to the frontend. Read the release notes.
				</GlowingStarsDescription>
			</div>
			<footer className="h-8 flex items-center gap-4 mt-4">
				<IconJarLogoIcon />
				<IconJarLogoIcon />
				<IconJarLogoIcon />
				<IconJarLogoIcon />
				<IconJarLogoIcon />
				<IconJarLogoIcon />
				<IconJarLogoIcon />
			</footer>
			<Link
				href="/"
				className="flex items-center gap-2 hover:text-cyan-300 absolute bottom-4 right-4"
			>
				<ExitIcon /> Ver código
			</Link>
		</GlowingStarsBackgroundCard>
	);
}
