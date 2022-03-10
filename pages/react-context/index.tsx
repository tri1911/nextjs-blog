import { BASE_THEME } from "../../components/theme-configurator/data";
import { ThemeMenu, ThemeDemo } from "../../components/theme-configurator/view";

export default function ThemeDesign() {
  return (
    <div className={`flex gap-2 h-full`}>
      <div className={``}>
        <ThemeMenu themes={BASE_THEME} />
      </div>
      <div className={`flex-1`}>
        <ThemeDemo />
      </div>
    </div>
  );
}
