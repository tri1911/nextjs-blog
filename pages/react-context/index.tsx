import { useState } from "react";
import { BASE_THEME } from "../../components/theme-configurator/data";
import { cloneTheme, Maybe } from "../../components/theme-configurator/util";
import { ThemeDemo, ThemeMenu } from "../../components/theme-configurator/view";

const ThemeRepo = BASE_THEME.map(cloneTheme);

export default function ThemeDesign() {
  const [selectedThemeId, setThemeId] = useState<Maybe<string>>(undefined);
  return (
    <div className={`flex gap-2 h-full`}>
      <div className={``}>
        <ThemeMenu
          themes={ThemeRepo}
          selectedThemeId={selectedThemeId}
          switchTheme={setThemeId}
        />
      </div>
      <div className={`flex-1`}>
        <ThemeDemo
          theme={
            selectedThemeId
              ? ThemeRepo.find((t) => t.name === selectedThemeId)
              : undefined
          }
        />
      </div>
    </div>
  );
}
