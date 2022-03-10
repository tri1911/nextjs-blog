import { Theme } from "../data";
import { Fn, Maybe } from "../util";

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

export function ThemeMenu({
  themes,
  selectedThemeId,
  switchTheme,
}: {
  themes: Theme[];
  selectedThemeId: Maybe<string>;
  switchTheme: Fn<[string], void>;
}) {
  return (
    <div className={`p-4`}>
      <div className={``}>Available Themes </div>
      <ul className={`py-4`}>
        {themes.map((t) => (
          <li className={`ml-0 my-2`} key={t.name}>
            <ThemeItem
              isSelected={selectedThemeId === t.name}
              theme={t}
              onClick={() => switchTheme(t.name)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ThemeDemo({ theme }: { theme: Maybe<Theme> }) {
  return (
    <div className={`p-4`}>
      <div className={`mb-4`}>Theme Demo</div>
      {theme ? (
        <pre>{JSON.stringify(theme, undefined, 2)}</pre>
      ) : (
        <pre>No theme selected</pre>
      )}
    </div>
  );
}
