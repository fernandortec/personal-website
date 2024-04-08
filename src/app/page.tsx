import { ExperienceTabs } from "@/components/experience-tabs";
import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
	return (
		<main className="container relative z-10 w-full pt-20 md:pt-0">
			<Spotlight
				className="top-[-20rem] left-0 md:left-60 md:top-[-2rem] w-[50rem]  w-[138%]"
				fill="white"
			/>
			<h1
				className="
						text-[2rem] md:text-6xl h-64 md:h-36 font-bold bg-clip-text
						text-transparent bg-gradient-to-b from-neutral-50
						to-neutral-400 bg-opacity-50 text-start leading-tight
					"
			>
				Sou um desenvolvedor Full Stack que ama{" "}
				<span className="text-primary-500">escrever código</span>.
			</h1>

			<p className="font-normal text-lg text-base text-neutral-300 text-start  md:w-[80%]">
				Spotlight effect is a great way to draw attention to a specific part of
				the page. Here, we are drawing the attention towards the text section of
				the page. I don&apos;t know why but I&apos;m running out of of the page.
				Spotlight effect is a great way to draw attention to a specific part of
				the page. Here, we are drawing the attention towards the text section of
				the page. I don&apos;t know why but I&apos;m running out of of the page.
			</p>

			<section className="py-40 w-full flex flex-col justify-center">
				<header className="mb-10 self-start">
					<h2 className="text-4xl text-base-white font-bold">
						Experiência profissional
					</h2>
					<p className="mt-6 md:mt-0">Atuei em vários projetos, alguns grandes, outros pequenos</p>
				</header>

				<ExperienceTabs />
			</section>

			<h1 className="text-4xl font-bold">
				Eu tenho construído algumas coisas{" "}
			</h1>
		</main>
	);
}
