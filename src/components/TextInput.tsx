interface TextInputProps {
    label: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
}

export default function TextInput({label, placeholder = "insert...", value, onChange}: TextInputProps) {
  return (
    <div className="flex flex-col gap-3 text-center">
      <p className="font-bold text-2xl">{label}</p>
      <input
        value={value}
        placeholder={placeholder}
        className="text-2xl w-[196px] text-center outline-none focus:outline-none"
        onChange={(e) => onChange(e.target.value)}
      ></input>
    </div>
  );
}
