'use client';

import { RiExpandUpDownLine, RiArrowDownSLine, RiTriangleLine, RiPlugFill, RiSettingsFill, RiMoreFill } from "@remixicon/react";
import Link from "next/link";
import { useState } from "react";
import { useParams, usePathname } from 'next/navigation';

const DemoCampaignDropdownItems = [
    {
        name: "Q4 Campaign",
        icon: <RiTriangleLine className="w-4 h-4" color="#6366f1" />,
        active: true,
        value: "q4-campaign",
    },
    {
        name: "Q3 Campaign",
        icon: <RiTriangleLine className="w-4 h-4" color="#8b5cf6" />,
        active: false,
        value: "q3-campaign",
    },
];

const ClientConfigs = {
    demo: {
        name: "Demo Client",
        avatar: {
            initials: "DC",
            colors: "bg-gradient-to-br from-indigo-500 to-purple-600"
        },
        dropdownItems: DemoCampaignDropdownItems,
        user: {
            name: "John Doe",
            email: "john.doe@demo.com",
            avatar: {
                initials: "JD",
                colors: "bg-gradient-to-br from-indigo-400 to-purple-500"
            }
        }
    },
    tesla: {
        name: "Tesla",
        avatar: {
            initials: "T",
            colors: "bg-gradient-to-br from-red-500 to-orange-500"
        },
        dropdownItems: DemoCampaignDropdownItems,
        user: {
            name: "Elon Musk",
            email: "elon.musk@tesla.com",
            avatar: {
                initials: "EM",
                colors: "bg-gradient-to-br from-red-400 to-orange-400"
            }
        }
    },
    apple: {
        name: "Apple",
        avatar: {
            initials: "A",
            colors: "bg-gradient-to-br from-gray-600 to-gray-800"
        },
        dropdownItems: DemoCampaignDropdownItems,
        user: {
            name: "Tim Cook",
            email: "tim.cook@apple.com",
            avatar: {
                initials: "TC",
                colors: "bg-gradient-to-br from-gray-500 to-gray-700"
            }
        }
    },
    microsoft: {
        name: "Microsoft",
        avatar: {
            initials: "M",
            colors: "bg-gradient-to-br from-blue-500 to-blue-700"
        },
        dropdownItems: DemoCampaignDropdownItems,
        user: {
            name: "Satya Nadella",
            email: "satya.nadella@microsoft.com",
            avatar: {
                initials: "SN",
                colors: "bg-gradient-to-br from-blue-400 to-blue-600"
            }
        }
    },
};

export default function Sidebar() {
    const { clientId } = useParams();

    const [campaignDropdown, setCampaignDropdown] = useState(true);
    
    const pathname = usePathname();

    // Get client config based on URL clientId, fallback to demo if not found
    const currentClient = ClientConfigs[clientId as keyof typeof ClientConfigs] || ClientConfigs.demo;

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
                    <div className={`relative w-6 h-6 rounded-lg overflow-hidden ${currentClient.avatar.colors} flex items-center justify-center`}>
                        <span className="text-white text-xs font-bold">{currentClient.avatar.initials}</span>
                    </div>
                    <span>{currentClient.name}</span>
                </div>

                <RiExpandUpDownLine className="w-4 h-4" />
            </div>

            <div className="px-2 py-4 border-b-[.5px] border-border-primary">
                <div className="flex gap-2 p-2 cursor-pointer" onClick={toggleCampaignDropdown}>
                    <RiArrowDownSLine className="w-4 h-4 opacity-70" />
                    <span className="text-xs uppercase opacity-70 select-none">All campaigns</span>
                </div>

                {campaignDropdown && (
                    currentClient.dropdownItems.map((item) => (
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
                                    {/* <Link href={`/${clientId}/${item.value}/roi-analysis`} className={`py-2 transition-all duration-300 hover:opacity-50 inline-block ${checkActivePage(`/${clientId}/${item.value}/roI-analysis`) ? "" : "opacity-70 hover:opacity-50"}`}>ROI Analysis</Link> */}
                                    <Link href={`/${clientId}/${item.value}/customer-journey`} className={`py-2 transition-all duration-300 hover:opacity-50 inline-block ${checkActivePage(`/${clientId}/${item.value}/customer-journey`) ? "" : "opacity-70 hover:opacity-50"}`}>Customer Journey</Link>
                                </div>
                            )}
                        </div>
                    ))
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
                    <div className={`w-8 h-8 rounded-lg ${currentClient.user.avatar.colors} flex items-center justify-center`}>
                        <span className="text-white text-sm font-bold">{currentClient.user.avatar.initials}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs">{currentClient.user.name}</span>
                        <span className="text-xs opacity-70">{currentClient.user.email}</span>
                    </div>
                </div>

                <RiMoreFill className="w-4 h-4" />
            </div>
        </div>
    );
}