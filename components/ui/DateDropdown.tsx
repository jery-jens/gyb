import { RiCalendarFill, RiArrowDownSLine } from "@remixicon/react";
import { useState } from "react";

const options = [
    {
        label: "Last 30 days",
        value: "last_30_days",
        default: true
    },
    {
        label: "Last 3 months",
        value: "last_3_months",
        default: false
    },
    {
        label: "Last 6 months",
        value: "last_6_months",
        default: false
    },
    {
        label: "Last 12 months",
        value: "last_12_months",
        default: false
    }
];

export default function DateDropdown() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options.find(option => option.default));

    const handleOptionClick = (option: typeof options[number]) => {
        setSelectedOption(option);
        setDropdownOpen(false);
    }

    return (
        <div className="relative select-none">
            <div onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center justify-between bg-white/10 border-[.5px] border-white/10 rounded-lg px-3 py-2 h-10 gap-2 cursor-pointer">
                <div className="flex items-center gap-2">
                    <RiCalendarFill className="w-4 h-4 fill-white/50" />
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