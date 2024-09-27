import HiddenOnMobile from "../../../../layouts/components/HiddenOnMobile";
import Menu from "./Menu";

export const DesktopMenu = () => {
  return (
    <HiddenOnMobile>
      <Menu />
    </HiddenOnMobile>
  );
};
