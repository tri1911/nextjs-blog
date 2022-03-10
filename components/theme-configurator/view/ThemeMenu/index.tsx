import { useAvailableThemes, useFocusedTheme } from "../../context";
import { Theme } from "../../model";
import { Fn, Maybe } from "../../util";

function ThemeItem({
  theme,
  isSelected,
  onClick,
}: {
  theme: { name: string };
  isSelected: boolean;
  onClick: Fn<[], void>;
}) {
  return (
    <div>
      <a
        className={`cursor-pointer hover:underline
          ${isSelected ? "font-semibold" : ""}`}
        onClick={onClick}
      >
        {theme.name}
      </a>
    </div>
  );
}

export function ThemeMenu({}: {}) {
  const { themes } = useAvailableThemes();
  const { focus, switchTheme } = useFocusedTheme();
  return (
    <div className={`p-4`}>
      <div className={`font-bold`}>Available Themes</div>
      <ul className={`py-4`}>
        {themes.map((t) => (
          <li className={`ml-0 my-2`} key={t.name}>
            <ThemeItem
              isSelected={focus === t.name}
              theme={t}
              onClick={() => switchTheme(t.name)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
