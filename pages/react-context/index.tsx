import {
  AvailableThemes,
  FocusedTheme,
} from "../../components/theme-configurator/context";
import { ThemeDemo, ThemeMenu } from "../../components/theme-configurator/view";

export default function ThemeDesign() {
  return (
    <AvailableThemes>
      <FocusedTheme>
        <div className={`flex gap-2 h-full`}>
          <div className={``}>
            <ThemeMenu />
          </div>
          <div className={`flex-1`}>
            <ThemeDemo />
          </div>
        </div>
      </FocusedTheme>
    </AvailableThemes>
  );
}
