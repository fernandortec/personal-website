"use client";

import {
	Dialog,
	DialogClose,
	DialogOverlay,
	DialogTrigger,
} from "@/components/ui/dialog";
import { DownloadCvButton } from "@/layouts/download-cv-button";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export function HeaderWhenMobileLayout() {
	return (
		<div className="not-sr-only lg:sr-only h-16 p-4 px-6 flex justify-between w-screen">
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

			<Dialog>
				<DialogTrigger>
					<HamburgerMenuIcon className="cursor-pointer" />
				</DialogTrigger>
				<DialogOverlay className="w-screen bg-black/96 ">
					<DialogClose className="cursor-pointer absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-50">
						<Cross2Icon className="h-4 w-4" />
						<span className="sr-only">Close</span>
					</DialogClose>

					<nav className="h-full w-full relative">
						<ul className="h-full w-full  flex flex-col items-center justify-start mt-40 gap-10 text-3xl font-bold text-white">
							<li>Sobre</li>
							<li>Portfólio</li>
							<li>Linguagens</li>
							<li>Contato</li>
						</ul>
						<footer className="absolute z-50 bottom-[64%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
							<DownloadCvButton />
						</footer>
					</nav>
				</DialogOverlay>
			</Dialog>
		</div>
	);
}
