import {
	GlowingStarsBackgroundCard,
	GlowingStarsDescription,
	GlowingStarsTitle,
} from "@/components/ui/glowing-stars-card";
import { Icons } from "@/root/public/icons";
import { ExitIcon, IconJarLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { siTurborepo } from "simple-icons";

export function LatestProjects(): JSX.Element {
	return (
		<div>
			<Link href="#">
				<GlowingStarsBackgroundCard className="relative transition-all">
					<div className="absolute -top-[14px] -left-[18px] -z-10 h-[108%] w-[108%] bg-zinc-700 rounded-xl blur-3xl opacity-30  animate-pulse" />
					<div className="absolute h-full w-full top-0 left-0 bg-gradient-to-br from-gray-300-500 to-zinc-900 rounded-xl" />
					<header className="triangle absolute top-0 right-0 z-50 w-10 rounded-tr-lg">
						<Image
							alt=""
							src="/assets/coffee-shop-banner.svg"
							width="200"
							height="200"
							className="w-full h-full"
						/>
					</header>
					<GlowingStarsTitle>Coffee Shop Delivery</GlowingStarsTitle>
					<div className="flex justify-between items-end">
						<GlowingStarsDescription>Aplicativo de</GlowingStarsDescription>
					</div>
					<footer className="h-8 flex items-center gap-4 mt-4 *:fill-zinc-500 *:w-5 *:h-5">
						<Icons.NextJS />
						<Icons.Tailwind />
						<IconJarLogoIcon />
						<IconJarLogoIcon />
						<IconJarLogoIcon />
						<IconJarLogoIcon />
						<IconJarLogoIcon />
					</footer>
					<p className="flex items-center gap-2 absolute bottom-4 right-4">
						<ExitIcon /> Ver código
					</p>
				</GlowingStarsBackgroundCard>
			</Link>
		</div>
	);
}
