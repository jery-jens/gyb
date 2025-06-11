import { useState } from "react";

export default function OptionsInput({ options }: { options: { label: string, value: string }[] }) {
    const [selectedOption, setSelectedOption] = useState<string>(options[0].value);

    return (
        <div className="flex items-center gap-2">
            <div className="flex border-[.5px] border-border-primary rounded-lg overflow-hidden bg-white/10">
                {options.map((option) => (
                    <div key={option.value} onClick={() => setSelectedOption(option.value)} className="border-r-[.5px] select-none cursor-pointer hover:bg-white/10 transition-all duration-300 flex items-center px-4 py-3 h-10 border-white/10 last:border-r-0">
                        <p className={`text-sm tracking-tight ${selectedOption === option.value ? 'text-white' : 'text-white/50'}`}>{option.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}