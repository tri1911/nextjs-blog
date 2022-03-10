import { useState } from "react";
import { BASE_THEME } from "../../components/theme-configurator/data";
import { Maybe } from "../../components/theme-configurator/util";
import { ThemeMenu, ThemeDemo } from "../../components/theme-configurator/view";

export default function ThemeDesign() {
  const [selectedThemeId, setThemeId] = useState<Maybe<string>>(undefined);
  return (
    <div className={`flex gap-2 h-full`}>
      <div className={``}>
        <ThemeMenu
          themes={BASE_THEME}
          selectedThemeId={selectedThemeId}
          switchTheme={setThemeId}
        />
      </div>
      <div className={`flex-1`}>
        <ThemeDemo
          theme={
            selectedThemeId
              ? BASE_THEME.find((t) => t.name === selectedThemeId)
              : undefined
          }
        />
      </div>
    </div>
  );
}
