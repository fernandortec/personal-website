"use client";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export function HeaderWhenMobileLayout() {
	return (
		<div className="not-sr-only lg:sr-only h-16 p-4 flex justify-between w-screen">
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
				<DialogContent className="max-w-[100vw] h-screen m-0">
					<DialogHeader>
						<DialogTitle>Are you absolutely sure?</DialogTitle>
						<DialogDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
}
