import { HeaderWhenLgLayout } from "@/layouts/header-when-lg-layout";
import { HeaderWhenMobileLayout } from "@/layouts/header-when-mobile-layout";

export function HeaderLayout() {
	return (
		<header>
			<HeaderWhenLgLayout />
			<HeaderWhenMobileLayout />
		</header>
	);
}
