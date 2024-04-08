import { TabsContent } from "@/components/ui/tabs";
import { CheckIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function ExperienceTabsContent(): JSX.Element {
	return (
		<>
			<TabsContent value="dygo" className="h-56 max-w-[40rem]">
				<h2 className="text-2xl font-bold text-base-white">
					Desenvolvedor Full Stack Pleno{" "}
					<Link href="https://dygo.com.br/" className="text-primary-500">
						@ Dygo
					</Link>
				</h2>
				<p className="text-sm text-base-accent">Novembro 2023 - Abril 2024</p>
				<p className="my-1 text-sm">
					Belo Horizonte - Brasil - <span className="font-bold">Remoto</span>
				</p>
				<ul className="mt-4 text-base flex flex-col gap-2">
					<li className="flex items-center gap-2 text-sm">
						<CheckIcon className="w-5 h-5 text-primary-500 " /> Criei um
						programa de fidelidade do zero
					</li>
					<li className="flex items-center gap-2 text-sm ">
						<CheckIcon className="w-5 h-5 text-primary-500" /> Criei um programa
						de fidelidade do programa de fidelidade do zero
					</li>
					<li className="flex items-center gap-2 text-sm">
						<CheckIcon className="w-5 h-5 text-primary-500" /> Criei um programa
						de fidelidade do zero
					</li>
				</ul>
			</TabsContent>
			<TabsContent value="uds" className="h-56 max-w-[40rem]">
				<h2 className="text-2xl font-bold text-base-white">
					Desenvolvedor Full Stack Pleno{" "}
					<Link href="https://dygo.com.br/" className="text-primary-500">
						@ UDS
					</Link>
				</h2>
				<p className="text-sm text-base-accent">Novembro 2023 - Abril 2024</p>
				<p className="my-1 text-sm">
					Belo Horizonte - Brasil - <span className="font-bold">Remoto</span>
				</p>
				<ul className="mt-4 text-base flex flex-col gap-2">
					<li className="flex items-center gap-2 text-sm">
						<CheckIcon className="w-5 h-5 text-primary-500 " /> Criei um
						programa de fidelidade do zero
					</li>
					<li className="flex items-center gap-2 text-sm ">
						<CheckIcon className="w-5 h-5 text-primary-500" /> Criei um programa
						de fidelidade do programa de fidelidade do zero
					</li>
					<li className="flex items-center gap-2 text-sm">
						<CheckIcon className="w-5 h-5 text-primary-500" /> Criei um programa
						de fidelidade do zero
					</li>
				</ul>
			</TabsContent>
			<TabsContent value="ioasys" className="h-56 max-w-[40rem]">
				<h2 className="text-2xl font-bold text-base-white">
					Desenvolvedor Full Stack Júnior{" "}
					<Link href="https://dygo.com.br/" className="text-primary-500">
						@ Ioasys
					</Link>
				</h2>
				<p className="text-sm text-base-accent">Novembro 2023 - Abril 2024</p>
				<p className="my-1 text-sm">
					Belo Horizonte - Brasil - <span className="font-bold">Remoto</span>
				</p>
				<ul className="mt-4 text-base flex flex-col gap-2">
					<li className="flex items-center gap-2 text-sm">
						<CheckIcon className="w-5 h-5 text-primary-500 " /> Criei um
						programa de fidelidade do zero
					</li>
					<li className="flex items-center gap-2 text-sm ">
						<CheckIcon className="w-5 h-5 text-primary-500" /> Criei um programa
						de fidelidade do programa de fidelidade do zero
					</li>
					<li className="flex items-center gap-2 text-sm">
						<CheckIcon className="w-5 h-5 text-primary-500" /> Criei um programa
						de fidelidade do zero
					</li>
				</ul>
			</TabsContent>
			<TabsContent value="plusdin" className="h-56 max-w-[40rem]">
				<h2 className="text-2xl font-bold text-base-white">
					Desenvolvedor Full Stack Estágio{" "}
					<Link href="https://dygo.com.br/" className="text-primary-500">
						@ Dygo
					</Link>
				</h2>
				<p className="text-sm text-base-accent">Novembro 2023 - Abril 2024</p>
				<p className="my-1 text-sm">
					Belo Horizonte - Brasil - <span className="font-bold">Remoto</span>
				</p>
				<ul className="mt-4 text-base flex flex-col gap-2">
					<li className="flex items-center gap-2 text-sm">
						<CheckIcon className="w-5 h-5 text-primary-500 " /> Criei um
						programa de fidelidade do zero
					</li>
					<li className="flex items-center gap-2 text-sm ">
						<CheckIcon className="w-5 h-5 text-primary-500" /> Criei um programa
						de fidelidade do programa de fidelidade do zero
					</li>
					<li className="flex items-center gap-2 text-sm">
						<CheckIcon className="w-5 h-5 text-primary-500" /> Criei um programa
						de fidelidade do zero
					</li>
				</ul>
			</TabsContent>
		</>
	);
}
