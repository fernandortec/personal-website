import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function DownloadCvButton() {
	return (
		<HoverBorderGradient
			as="button"
			containerClassName="rounded-xl mt-2"
			className="dark:bg-black bg-white text-black dark:text-white flex items-center w-full"
		>
			<span>Baixar currículo</span>
		</HoverBorderGradient>
	);
}
