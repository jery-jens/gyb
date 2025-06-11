import DateDropdown from "./ui/DateDropdown";

export default function Header({ title }: { title: string }) {
    return (
        <div className="flex justify-between items-center px-8 py-4 border-b-[.5px] border-border-primary">
            <h1 className="text-xl tracking-tight font-medium">{title}</h1>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 cursor-pointer">
                    <div className="w-6 h-[14px] bg-background-tertiary rounded-sm p-[2px] flex items-center justify-end">
                        <div className="w-[10px] h-[10px] bg-white rounded-sm"></div>
                    </div>

                    <span className="text-xs tracking-tight">Toggle GYB Analysis</span>
                </div>

                <DateDropdown />
            </div>
        </div>
    )
}