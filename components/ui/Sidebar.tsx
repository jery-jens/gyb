'use client';

import { RiExpandUpDownLine, RiArrowDownSLine, RiTriangleLine, RiSquareLine, RiStarLine, RiPlugFill, RiSettingsFill, RiLogoutBoxLine, RiMoreFill } from "@remixicon/react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useParams, usePathname } from 'next/navigation';

const TeslaCampaignDropdownItems = [
    {
        name: "Arcane",
        icon: <RiTriangleLine className="w-4 h-4" color="#FF9D00" />,
        active: true,
        value: "arcane",
    },
];

const TeslaClient = {
    name: "Tesla",
    value: "tesla",
    dropdownItems: TeslaCampaignDropdownItems,
}

export default function Sidebar() {
    const { clientId } = useParams();

    const [campaignDropdown, setCampaignDropdown] = useState(true);
    const [currentClient, setCurrentClient] = useState(clientId);
    
    const pathname = usePathname();

    const checkActivePage = (path: string) => {
        return path === pathname;
    }

    const selectClient = () => {
        console.log("selectClient");
    }

    const toggleCampaignDropdown = () => {
        setCampaignDropdown(!campaignDropdown);
    }

    return (            
        <div className="max-w-80 w-full p-4 h-screen flex flex-col justify-between sticky top-0">
            <div>
            <div className="cursor-pointer flex items-center gap-2 justify-between p-4 border-b-[.5px] border-border-primary" onClick={selectClient}>
                <div className="flex items-center gap-2">
                    <div className="relative w-6 h-6 rounded-lg overflow-hidden">
                        <Image 
                            src="/tesla.jpeg"
                            alt="Tesla Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span>Tesla</span>
                </div>

                <RiExpandUpDownLine className="w-4 h-4" />
            </div>

            <div className="px-2 py-4 border-b-[.5px] border-border-primary">
                <div className="flex gap-2 p-2 cursor-pointer" onClick={toggleCampaignDropdown}>
                    <RiArrowDownSLine className="w-4 h-4 opacity-70" />
                    <span className="text-xs uppercase opacity-70 select-none">All campaigns</span>
                </div>

                {campaignDropdown && (
                    currentClient === TeslaClient.value ? TeslaClient.dropdownItems.map((item) => (
                        <div key={item.name} className="select-none cursor-pointer">
                            <div className={`w-full transition-all duration-300 hover:opacity-50 h-10 rounded-lg flex items-center gap-2 p-2 text-sm ${item.active ? "bg-white/10" : "opacity-70"}`}>
                                {item.icon}
                                <span>{item.name}</span>
                            </div>

                            {item.active && (
                                <div className="py-2 pl-8 text-sm flex flex-col">
                                    <Link href={`/${clientId}/${item.value}/dashboard`} className={`py-2 transition-all duration-300 hover:opacity-50 inline-block ${checkActivePage(`/${clientId}/${item.value}/dashboard`) ? "" : "opacity-70 hover:opacity-50"}`}>Dashboard</Link>
                                    <Link href={`/${clientId}/${item.value}/campaign-overview`} className={`py-2 transition-all duration-300 hover:opacity-50 inline-block ${checkActivePage(`/${clientId}/${item.value}/campaign-overview`) ? "" : "opacity-70 hover:opacity-50"}`}>Campaign Overview</Link>
                                    <Link href={`/${clientId}/${item.value}/channel-performance`} className={`py-2 transition-all duration-300 hover:opacity-50 inline-block ${checkActivePage(`/${clientId}/${item.value}/channel-performance`) ? "" : "opacity-70 hover:opacity-50"}`}>Channel Performance</Link>
                                    <Link href={`/${clientId}/${item.value}/roi-analysis`} className={`py-2 transition-all duration-300 hover:opacity-50 inline-block ${checkActivePage(`/${clientId}/${item.value}/roi-analysis`) ? "" : "opacity-70 hover:opacity-50"}`}>ROI Analysis</Link>
                                    <Link href={`/${clientId}/${item.value}/customer-journey`} className={`py-2 transition-all duration-300 hover:opacity-50 inline-block ${checkActivePage(`/${clientId}/${item.value}/customer-journey`) ? "" : "opacity-70 hover:opacity-50"}`}>Customer Journey</Link>
                                </div>
                            )}
                        </div>
                    )) : null
                )}
            </div>

            <div className="px-2 py-4">
                <div className="flex transition-all duration-300 cursor-pointer h-10 px-2 py-3 items-center text-sm gap-2 opacity-70 hover:opacity-50">
                    <RiPlugFill className="w-4 h-4" />
                    <span>Integrations</span>
                </div>
                <Link href="/settings" className="flex transition-all duration-300 cursor-pointer h-10 px-2 py-3 items-center text-sm gap-2 opacity-70 hover:opacity-50">
                    <RiSettingsFill className="w-4 h-4" />
                    <span>Settings</span>
                </Link>
            </div>
            </div>

            <div className="flex cursor-pointer px-4 py-4 justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-400 rounded-lg"></div>
                    <div className="flex flex-col">
                        <span className="text-xs">John Doe</span>
                        <span className="text-xs opacity-70">john.doe@gmail.com</span>
                    </div>
                </div>

                <RiMoreFill className="w-4 h-4" />
            </div>
        </div>
    );
}