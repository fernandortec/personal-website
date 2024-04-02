import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from "next/image";

export function HeaderLayout() {
	return (
		<header className="flex items-start justify-evenly w-full gap-4 px-40">
			<div className="flex items-center p-4 bg-zinc-800 w-1/2 h-16 rounded-xl mb-20">
				<div className="flex gap-2 items-center">
					<Image
						src="https://github.com/fernandortec.png"
						alt="@fernandortec"
						width="10"
						height="10"
						className="rounded-full"
					/>
					<h3 className="font-bold text-base-white">Fernando Rodrigues</h3>
				</div>
				<nav className="flex-1">
					<ul className="flex items-center justify-evenly">
						<li>Sobre</li>
						<li>Contato</li>
						<li>Portfólio</li>
						<li>Linguagens</li>
					</ul>
				</nav>
			</div>
			<HoverBorderGradient
				as="button"
				containerClassName="rounded-xl mt-2"
				className="dark:bg-black bg-white text-black dark:text-white flex items-center w-full"
			>
				<span>Baixar currículo</span>
			</HoverBorderGradient>
		</header>
	);
}
