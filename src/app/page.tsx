import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
	return (
		<main
			className="
				h-screen w-screen rounded-md flex flex-col py-8 items-center relative overflow-hidden
				bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
				bg-[size:24px_24px]
			"
		>
			<header className="flex items-start justify-evenly w-full gap-4 px-40">
				<div className="flex items-center p-4 bg-zinc-800 w-1/2 h-16 rounded-xl mb-20">
					<div className="flex gap-2 items-center">
						<Avatar className="h-10 w-10">
							<AvatarImage
								src="https://github.com/fernandortec.png"
								alt="@fernandortec"
							/>
							<AvatarFallback>FR</AvatarFallback>
						</Avatar>
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
					<span>BAIXAR CURRÍCULO</span>
				</HoverBorderGradient>
			</header>
			<Spotlight
				className="-top-20 left-0 md:left-60 md:-top-40"
				fill="white"
			/>
			<div className="p-4 max-w-6xl mx-auto relative z-10 w-full pt-20 md:pt-0">
				<h1
					className="
						text-4xl md:text-6xl h-36 font-bold bg-clip-text
						text-transparent bg-gradient-to-b from-neutral-50
						to-neutral-400 bg-opacity-50 text-start
					"
				>
					Sou um desenvolvedor Full Stack
					<br /> que ama{" "}
					<span className="text-primary-500">escrever código</span>.
				</h1>

				<p className="font-normal text-lg text-base text-neutral-300 text-start w-[80%]">
					Spotlight effect is a great way to draw attention to a specific part
					of the page. Here, we are drawing the attention towards the text
					section of the page. I don&apos;t know why but I&apos;m running out of
					of the page. Spotlight effect is a great way to draw attention to a
					specific part of the page. Here, we are drawing the attention towards
					the text section of the page. I don&apos;t know why but I&apos;m
					running out of of the page.
				</p>
			</div>
		</main>
	);
}
