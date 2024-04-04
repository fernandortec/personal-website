import { HoverEffect } from "@/components/ui/hover-effect";
import { Spotlight } from "@/components/ui/spotlight";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col items-center relative">
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

			<h2>Experiência profissional</h2>
			<p>Atuei em vários projetos, alguns grandes, outros pequenos</p>

			<section className="flex items-center gap-8 px-20">
				<Tabs defaultValue="dygo" className="flex items-center gap-8 ">
					<TabsList className="flex-col h-64 bg-transparent gap-4 border-r border-r-base-accent rounded-none pr-4">
						<HoverEffect
							className="flex flex-col"
							items={[
								<TabsTrigger className="w-32 bg-transparent h-10 relative z-20 hover:bg-transparent" value="dygo">
									Dygo Brasil
								</TabsTrigger>,
								<TabsTrigger className="w-32 bg-transparent h-10 relative z-20 hover:bg-transparent" value="uds">
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
							]}
						/>
					</TabsList>
					<TabsContent value="dygo" className="h-56 w-[40rem]">
						<h2 className="text-2xl font-bold text-base-white">
							Dev Full Stack Pleno{" "}
							<Link href="https://dygo.com.br/" className="text-primary-500">
								@ Dygo
							</Link>
						</h2>
						<p className="text-sm text-base-accent">
							Novembro 2023 - Abril 2024
						</p>
						<p className="my-1 text-sm">
							Belo Horizonte - Brasil -{" "}
							<span className="font-bold">Remoto</span>
						</p>
						<ul className="mt-4 text-base flex flex-col gap-2">
							<li className="flex items-center gap-2 text-sm">
								<CheckIcon className="w-5 h-5 text-primary-500 " /> Criei um
								programa de fidelidade do zero
							</li>
							<li className="flex items-center gap-2 text-sm ">
								<CheckIcon className="w-5 h-5 text-primary-500" /> Criei um
								programa de fidelidade do programa de fidelidade do zero
							</li>
							<li className="flex items-center gap-2 text-sm">
								<CheckIcon className="w-5 h-5 text-primary-500" /> Criei um
								programa de fidelidade do zero
							</li>
						</ul>
					</TabsContent>
					<TabsContent value="password">Change your password here.</TabsContent>
				</Tabs>
			</section>
		</main>
	);
}
