import {
	GlowingStarsBackgroundCard,
	GlowingStarsDescription,
	GlowingStarsTitle,
} from "@/components/ui/glowing-stars-card";
import { IconJarLogoIcon } from "@radix-ui/react-icons";

export function LatestProject(): JSX.Element {
	return (
		<div className="flex py-20 items-center justify-center antialiased">
			<GlowingStarsBackgroundCard>
				<GlowingStarsTitle>Next.js 14</GlowingStarsTitle>
				<div className="flex justify-between items-end">
					<GlowingStarsDescription>
						The power of full-stack to the frontend. Read the release notes.
					</GlowingStarsDescription>
					<div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
						<IconJarLogoIcon />
					</div>
				</div>
			</GlowingStarsBackgroundCard>
		</div>
	);
}
