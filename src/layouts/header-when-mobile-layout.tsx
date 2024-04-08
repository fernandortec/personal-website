import Image from "next/image";

export function HeaderWhenMobileLayout() {
	return (
		<div className="not-sr-only lg:sr-only">
			<Image
				src="https://github.com/fernandortec.png"
				alt="@fernandortec"
				width="28"
				height="28"
				className="rounded-full"
			/>
			<h3 className="font-bold text-base-white">Fernando Rodrigues</h3>
		</div>
	);
}
