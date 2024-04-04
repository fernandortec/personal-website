import { ExperienceTabs } from "@/components/experience-tabs";
import { Spotlight } from "@/components/ui/spotlight";

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
				<ExperienceTabs />
			</section>
		</main>
	);
}
