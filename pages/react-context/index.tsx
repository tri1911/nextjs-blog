import { createContext, useState } from "react";
import { useThemeRepo } from "../../components/theme-configurator/hook";
import { Maybe, noop } from "../../components/theme-configurator/util";
import { ThemeDemo, ThemeMenu } from "../../components/theme-configurator/view";

// 👋🏻 Here, we start setting up context factories.
// We don't need to restrict ourselves to only a single factory
const AvailableThemesContext = createContext({
  themes: [],

  // Since children need to updateThemes, it's likely we need to create a
  // wrapped provider to include some extra state/logic
  updateThemes: noop,
});

const FocusedThemeContext = createContext({
  focus: undefined,
  focusedTheme: undefined,
  // Same here (see above)
  switchTheme: noop,
});

export default function ThemeDesign() {
  const [selectedThemeId, setThemeId] = useState<Maybe<string>>(undefined);
  const { themes, saveTheme, getTheme } = useThemeRepo();

  /*
   * We can start identifying common things needed by children components
   * - themes / getTheme
   * - selectedThemeId / switchTheme
   * - saveTheme
   *
   * These gives an idea of what the context should have
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
