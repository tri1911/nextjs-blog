import { useState } from "react";
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

export function TextArea({
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
        <textarea
          className={`${fieldStyle.text} ${fieldStyle.bg} py-1 px-2`}
          value={value}
          onChange={(evt) => onChange(evt.target.value)}
        />
      </label>
    </div>
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

function cloneTheme(t: Theme): Theme {
  return {
    name: t.name,
    description: t.description,
    style: {
      button: {
        primary: { ...t.style.button.primary },
        secondary: { ...t.style.button.secondary },
      },
      input: { ...t.style.input },
      root: { ...t.style.root },
    },
  };
}

function FormDemo({ theme }: { theme: Theme }) {
  const [currentTheme, updateCurrentTheme] = useState<Theme>(cloneTheme(theme));

  return (
    <div
      className={`p-4 ${currentTheme.style.root.text} ${currentTheme.style.root.bg}`}
    >
      <div className={`mb-4 font-bold`}>Theme Demo</div>

      <div>
        <InputField
          label="Name"
          fieldStyle={currentTheme.style.input}
          value={currentTheme.name}
          onChange={(name) => updateCurrentTheme((s) => ({ ...s, name }))}
        />
        <TextArea
          label="Description"
          fieldStyle={currentTheme.style.input}
          value={currentTheme.description}
          onChange={(description) =>
            updateCurrentTheme((s) => ({ ...s, description }))
          }
        />
        <InputField
          label="Root Text Style"
          fieldStyle={currentTheme.style.input}
          value={currentTheme.style.root.text}
          onChange={(text) =>
            updateCurrentTheme((s) => {
              const c = cloneTheme(s);
              c.style.root.text = text;
              return c;
            })
          }
        />
        <InputField
          label="Root Background Style"
          fieldStyle={currentTheme.style.input}
          value={currentTheme.style.root.bg}
          onChange={(text) =>
            updateCurrentTheme((s) => {
              const c = cloneTheme(s);
              c.style.root.bg = text;
              return c;
            })
          }
        />
        <InputField
          label="Input Text Style"
          fieldStyle={currentTheme.style.input}
          value={currentTheme.style.input.text}
          onChange={(text) =>
            updateCurrentTheme((s) => {
              const c = cloneTheme(s);
              c.style.input.text = text;
              return c;
            })
          }
        />
        <InputField
          label="Input Background Style"
          fieldStyle={currentTheme.style.input}
          value={currentTheme.style.input.bg}
          onChange={(text) =>
            updateCurrentTheme((s) => {
              const c = cloneTheme(s);
              c.style.input.bg = text;
              return c;
            })
          }
        />
        <InputField
          label="Primary Button Text Style"
          fieldStyle={currentTheme.style.input}
          value={currentTheme.style.button.primary.text}
          onChange={(text) =>
            updateCurrentTheme((s) => {
              const c = cloneTheme(s);
              c.style.button.primary.text = text;
              return c;
            })
          }
        />
        <InputField
          label="Primary Button Background Style"
          fieldStyle={currentTheme.style.input}
          value={currentTheme.style.button.primary.bg}
          onChange={(text) =>
            updateCurrentTheme((s) => {
              const c = cloneTheme(s);
              c.style.button.primary.bg = text;
              return c;
            })
          }
        />
        <InputField
          label="Secondary Button Text Style"
          fieldStyle={currentTheme.style.input}
          value={currentTheme.style.button.secondary.text}
          onChange={(text) =>
            updateCurrentTheme((s) => {
              const c = cloneTheme(s);
              c.style.button.secondary.text = text;
              return c;
            })
          }
        />
        <InputField
          label="Secondary Button Background Style"
          fieldStyle={currentTheme.style.input}
          value={currentTheme.style.button.secondary.bg}
          onChange={(text) =>
            updateCurrentTheme((s) => {
              const c = cloneTheme(s);
              c.style.button.secondary.bg = text;
              return c;
            })
          }
        />

        <div className={`my-4 flex gap-2`}>
          <Button
            label="Save"
            onClick={noop}
            buttonStyle={currentTheme.style.button.primary}
          />
          <Button
            label="Reset"
            onClick={() => updateCurrentTheme(theme)}
            buttonStyle={currentTheme.style.button.secondary}
          />
        </div>
      </div>
    </div>
  );
}

export function ThemeDemo({ theme }: { theme: Maybe<Theme> }) {
  return theme ? (
    <FormDemo theme={theme} />
  ) : (
    <div className={`p-4`}>
      <div className={`mb-4 font-bold`}>Theme Demo</div>
      <pre>No theme selected</pre>
    </div>
  );
}
