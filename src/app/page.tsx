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
			<header className="bg-zinc-800 w-[60%] h-20 rounded-xl mb-20">
				
			</header>
			<Spotlight
				className="-top-20 left-0 md:left-60 md:-top-20"
				fill="white"
			/>

			<div className="p-4  max-w-6xl mx-auto relative z-10 w-full pt-20 md:pt-0">
				<h1
					className="
						text-4xl md:text-6xl h-36 font-bold bg-clip-text
						text-transparent bg-gradient-to-b from-neutral-50
						to-neutral-400 bg-opacity-50 text-start
					"
				>
					Sou um desenvolvedor Full Stack
					<br /> que ama{" "}
					<span className="text-primary-700">escrever código</span>.
				</h1>

				<p className="font-normal text-base text-neutral-300 max-w-lg text-start w-full">
					Spotlight effect is a great way to draw attention to a specific part
					of the page. Here, we are drawing the attention towards the text
					section of the page. I don&apos;t know why but I&apos;m running out of
					copy.
				</p>
			</div>
		</main>
	);
}
