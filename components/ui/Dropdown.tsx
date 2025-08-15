import { RiArrowDownSLine, RiSortAlphabetAsc } from "@remixicon/react";
import { useState } from "react";


export default function Dropdown({ options, iconVisible = true }: { options: { label: string, value: string }[], iconVisible?: boolean }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleOptionClick = (option: typeof options[number]) => {
        setSelectedOption(option);
        setDropdownOpen(false);
    }

    return (
        <div className="relative select-none w-fit">
            <div onClick={() => setDropdownOpen(!dropdownOpen)} className="flex w-fit hover:bg-white/20 transition-all duration-300 items-center justify-between bg-white/10 border-[.5px] border-white/10 rounded-lg px-3 py-2 h-10 gap-2 cursor-pointer">
                <div className="flex items-center gap-2">
                    {iconVisible && <RiSortAlphabetAsc className="w-4 h-4 fill-white/50" />}
                    <span className="text-sm tracking-tight text-white/50">{selectedOption?.label}</span>
                </div>

                <RiArrowDownSLine className="w-4 h-4 fill-white/50" />
            </div>

            {dropdownOpen && (
                <div className="absolute z-50 top-12 right-0 w-full bg-input-background border-[.5px] border-white/10 rounded-lg gap-2 cursor-pointer">
                    {options.map(option => (
                        <div onClick={() => handleOptionClick(option)} className="border-b-[.5px] hover:bg-white/10 transition-all duration-300 border-white/10 last:border-b-0 p-3 text-sm tracking-tight text-white/50" key={option.value}>{option.label}</div>
                    ))}
                </div>
            )}
        </div>
    )
}