import { TextBg, Theme } from "../data";
import { Fn, Maybe, noop } from "../util";

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
      <div className={`font-bold`}>Available Themes</div>
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

export function Button({
  label,
  onClick,
  buttonStyle,
}: {
  label: string;
  onClick: Fn<[], void>;
  buttonStyle: TextBg;
}) {
  return (
    <button
      className={`${buttonStyle.text} ${buttonStyle.bg} px-3 py-2 rounded`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export function InputField({
  label,
  value,
  onChange,
  fieldStyle,
}: {
  label: string;
  value: string;
  onChange: Fn<[string], void>;
  fieldStyle: TextBg;
}) {
  return (
    <div className={`mb-2`}>
      <label>
        <span className={`mr-3`}>{label}:</span>
        <input
          className={`${fieldStyle.text} ${fieldStyle.bg} py-1 px-2`}
          type="text"
          value={value}
          onChange={(evt) => onChange(evt.target.value)}
        />
      </label>
    </div>
  );
}

function FormDemo({ theme }: { theme: Theme }) {
  return (
    <div className={`${theme.style.root.text} ${theme.style.root.bg}`}>
      <InputField
        label="Input Text Style"
        fieldStyle={theme.style.input}
        value={theme.style.input.text}
        onChange={noop}
      />
      <InputField
        label="Input Background Style"
        fieldStyle={theme.style.input}
        value={theme.style.input.bg}
        onChange={noop}
      />
      <InputField
        label="Primary Button Text Style"
        fieldStyle={theme.style.input}
        value={theme.style.button.primary.text}
        onChange={noop}
      />
      <InputField
        label="Primary Button Background Style"
        fieldStyle={theme.style.input}
        value={theme.style.button.primary.bg}
        onChange={noop}
      />
      <InputField
        label="Secondary Button Text Style"
        fieldStyle={theme.style.input}
        value={theme.style.button.secondary.text}
        onChange={noop}
      />
      <InputField
        label="Secondary Button Background Style"
        fieldStyle={theme.style.input}
        value={theme.style.button.secondary.bg}
        onChange={noop}
      />

      <div className={`my-4 flex gap-2`}>
        <Button
          label="Primary"
          onClick={noop}
          buttonStyle={theme.style.button.primary}
        />
        <Button
          label="Secondary"
          onClick={noop}
          buttonStyle={theme.style.button.secondary}
        />
      </div>
    </div>
  );
}

export function ThemeDemo({ theme }: { theme: Maybe<Theme> }) {
  return (
    <div className={`p-4 ${theme?.style.root.bg} ${theme?.style.root.text}`}>
      <div className={`mb-4 font-bold`}>Theme Demo</div>
      {theme ? <FormDemo theme={theme} /> : <pre>No theme selected</pre>}
    </div>
  );
}
