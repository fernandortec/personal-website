import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from "next/image";

export function HeaderWhenLgLayout() {
	return (
		<div className="flex items-start justify-evenly w-full gap-4 px-20 xl:md-40 sr-only lg:not-sr-only">
			<div className="flex items-center p-4 bg-zinc-800 w-1/2 h-16 rounded-xl mb-20">
				<div className="flex gap-2 items-center">
					<Image
						src="https://github.com/fernandortec.png"
						alt="@fernandortec"
						width="28"
						height="28"
						className="rounded-full"
					/>
					<h3 className="font-bold text-base-white">Fernando Rodrigues</h3>
				</div>
				<nav className="flex-1">
					<ul className="flex items-center justify-evenly">
						<li>Sobre</li>

						<li>Portfólio</li>
						<li>Linguagens</li>
						<li className="relative">
							<button
								type="button"
								className="relative inline-flex overflow-hidden  rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
							>
								<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
								<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-zinc-800 px-3 py-1 text-white backdrop-blur-3xl">
									Contato
								</span>
							</button>
						</li>
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
		</div>
	);
}
