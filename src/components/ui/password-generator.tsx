"use client";

import { Copy, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

type PasswordOptions = {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
};

const Checkbox = ({ value, setValue }: { value: boolean; setValue: (value: boolean) => void }) => {
  return (
    <div className="relative inline-flex items-center cursor-pointer" onClick={() => setValue(!value)}>
      <input
        type="checkbox"
        checked={value}
        className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-green-300 checked:border-green-300"
      />
      <span className="absolute text-gray-700 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
    </div>
  );
};

const PasswordGenerator = () => {
  const [passwordOptions, setPasswordOptions] = useState<PasswordOptions>({
    length: 16,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  const [copied, setCopied] = useState<boolean>(false);

  const [password, setPassword] = useState<string>("");

  const generatePassword = (): string => {
    setCopied(false);

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+";

    let characters = "";
    characters += passwordOptions.uppercase ? uppercase : "";
    characters += passwordOptions.lowercase ? lowercase : "";
    characters += passwordOptions.numbers ? numbers : "";
    characters += passwordOptions.symbols ? symbols : "";

    let password = "";
    for (let i = 0; i < passwordOptions.length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
  };

  useEffect(() => {
    setPassword(generatePassword());
  }, [passwordOptions, generatePassword]);

  const setUppercase = (value: boolean) => {
    if (!value && !passwordOptions.lowercase && !passwordOptions.numbers && !passwordOptions.symbols) return;

    setPasswordOptions({ ...passwordOptions, uppercase: value });
  };

  const setLowercase = (value: boolean) => {
    if (!value && !passwordOptions.uppercase && !passwordOptions.numbers && !passwordOptions.symbols) return;

    setPasswordOptions({ ...passwordOptions, lowercase: value });
  };

  const setNumbers = (value: boolean) => {
    if (!value && !passwordOptions.uppercase && !passwordOptions.lowercase && !passwordOptions.symbols) return;

    setPasswordOptions({ ...passwordOptions, numbers: value });
  };

  const setSymbols = (value: boolean) => {
    if (!value && !passwordOptions.uppercase && !passwordOptions.lowercase && !passwordOptions.numbers) return;

    setPasswordOptions({ ...passwordOptions, symbols: value });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center space-y-16">
      {/* Password */}
      <div className="w-full flex flex-col items-center justify-center space-y-4">
        <h2 className="text-secondary text-xl md:text-4xl font-medium">{password}</h2>

        <div className="w-full flex flex-row items-center justify-center space-x-4">
          {/* Copy button */}
          <Copy
            size={24}
            className={`${copied ? "text-green-300" : "text-secondary"} cursor-pointer transition-colors duration-300`}
            onClick={() => {
              navigator.clipboard.writeText(password);
              setCopied(true);
            }}
          />

          <RefreshCw size={24} className="text-secondary cursor-pointer" onClick={() => setPassword(generatePassword())} />
        </div>
      </div>

      {/* Options */}
      <div className="w-full flex flex-col items-center justify-center space-y-8">
        <h2 className="text-secondary text-xl font-medium">Options</h2>

        <div className="flex flex-col gap-8">
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <h3 className="text-secondary text-base font-normal">{`Password Length: ${passwordOptions.length}`}</h3>
            <input
              type="range"
              min={8}
              max={32}
              value={passwordOptions.length}
              onChange={(event) => setPasswordOptions({ ...passwordOptions, length: parseInt(event.target.value) })}
              className="w-full styled-slider"
            />
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
            <h3 className="text-secondary text-base font-normal">Uppercase</h3>
            <Checkbox value={passwordOptions.uppercase} setValue={setUppercase} />

            <h3 className="text-secondary text-base font-normal">Lowercase</h3>
            <Checkbox value={passwordOptions.lowercase} setValue={setLowercase} />

            <h3 className="text-secondary text-base font-normal">Numbers</h3>
            <Checkbox value={passwordOptions.numbers} setValue={setNumbers} />

            <h3 className="text-secondary text-base font-normal">Symbols</h3>
            <Checkbox value={passwordOptions.symbols} setValue={setSymbols} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
