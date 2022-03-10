import {Theme} from "../data";

function ThemeItem({ theme }: { theme: { name: string } }) {
  return <div>{theme.name}</div>;
}

export function ThemeMenu({ themes }: { themes: Theme[] }) {
  return (
    <div>
      <ul>
        {themes.map((t) => (
          <li key={t.name}>
            <ThemeItem theme={t} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ThemeDemo() {
  return <div> Theme Demo</div>;
}
