import { useEffect, useState } from "react";
import { Theme } from "../../model";
import { cloneTheme, Fn, Maybe } from "../../util";
import { InputField, TextArea, Button } from "../widgets";

function FormDemo({
  theme,
  saveTheme,
}: {
  theme: Theme;
  saveTheme: Fn<[Theme], void>;
}) {
  const [currentTheme, updateCurrentTheme] = useState<Theme>(cloneTheme(theme));

  // If the focused is changed, we need to update the current them info
  useEffect(() => updateCurrentTheme(cloneTheme(theme)), [theme]);

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
            onClick={() => saveTheme(currentTheme)}
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

export function ThemeDemo({
  theme,
  saveTheme,
}: {
  theme: Maybe<Theme>;
  saveTheme: Fn<[Theme], void>;
}) {
  return theme ? (
    // ⚠ NOTE: Notice how we need to feed this down to FormDemo?
    // That's an indication that a context may be helpful
    <FormDemo saveTheme={saveTheme} theme={theme} />
  ) : (
    <div className={`p-4`}>
      <div className={`mb-4 font-bold`}>Theme Demo</div>
      <pre>No theme selected</pre>
    </div>
  );
}
