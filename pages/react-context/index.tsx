import { useState } from "react";
import { useThemeRepo } from "../../components/theme-configurator/hook";
import { Maybe } from "../../components/theme-configurator/util";
import { ThemeDemo, ThemeMenu } from "../../components/theme-configurator/view";

export default function ThemeDesign() {
  const [selectedThemeId, setThemeId] = useState<Maybe<string>>(undefined);
  const { themes, saveTheme, getTheme } = useThemeRepo();

  /*
   * We can start identifying common things needed by children components
   * - themes / getTheme
   * - selectedThemeId / switchTheme
   * - saveTheme
   *
   * These gives an idea of the context should have
   */
  return (
    <div className={`flex gap-2 h-full`}>
      <div className={``}>
        <ThemeMenu
          themes={themes}
          selectedThemeId={selectedThemeId}
          switchTheme={setThemeId}
        />
      </div>
      <div className={`flex-1`}>
        <ThemeDemo
          theme={selectedThemeId ? getTheme(selectedThemeId) : undefined}
          saveTheme={saveTheme}
        />
      </div>
    </div>
  );
}
