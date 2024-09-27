// Components
import Logo from "./Logo";
import { DesktopMenu } from "./Menu/DesktopMenu";
import { MobileMenu } from "./Menu/MobileMenu";
import RightButtons from "./RightButtons";

export default function Header() {
  return (
    <div className="w-full h-16 border-b dark:bg-gray-900 dark:border-gray-950/30">
      <div className="container py-2 flex items-center h-full justify-between relative">
        <Logo />
        <DesktopMenu />
        <div className="flex gap-2 items-center">
          <MobileMenu />
          <RightButtons />
        </div>
      </div>
    </div>
  );
}
