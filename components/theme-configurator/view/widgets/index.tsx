import { TextBg } from "../../model";
import { Fn } from "../../util";

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
