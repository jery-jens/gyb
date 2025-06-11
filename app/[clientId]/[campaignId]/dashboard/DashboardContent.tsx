/* eslint-disable */
'use client';

import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { getDashboard } from "@/hooks/getDashboard";

import PlatformRow from "@/components/PlatformRow";
import PlatformBlock, { PlatformBlockSize } from "@/components/PlatformBlock";
import PlatformBlockLabel from "@/components/PlatformBlockLabel";
import PlatformBlockContent from "@/components/PlatformBlockContent";
import OptionsInput from "@/components/ui/OptionsInput";
import SortDropdown from "@/components/ui/Dropdown";
import { RiArrowDownLine, RiArrowRightLine, RiArrowUpLine, RiCheckboxCircleFill, RiErrorWarningFill, RiFlashlightFill, RiSparkling2Fill } from "@remixicon/react";

interface DashboardContentProps {
    clientId: string;
    campaignId: string;
}

const valueMonitorItems = [
    {
        title: "Revenue generated",
        value: "$1000",
        percentage: 10,
    },
    {
        title: "Marketing spend",
        value: "$1000",
        percentage: -10,
    },
    {
        title: "Attribution-Optimized ROI",
        value: "$1000",
        percentage: 80,
    },
    {
        title: "Traditional Attribution ROI",
        value: "$1000",
        percentage: 80,
    }
];

const channelImpactItems = [
    {
        title: "Search",
        attribution: 42,
        roi: 3.2,
    },
    {
        title: "Social",
        attribution: 32,
        roi: 4.2,
    },
    {
        title: "Email",
        attribution: 8,
        roi: 2.5,
    },
    {
        title: "Direct",
        attribution: 60,
        roi: 5,
    },
]
 
const attributionFlowOptions = [
    {
        label: "Lowest value",
        value: "lowest",
    },
    {
        label: "Highest value",
        value: "highest",
    },
]

const journeySortOptions = [
    {
        label: "Revenue",
        value: "revenue",
    },
    {
        label: "Conversion Rate",
        value: "conversion_rate",
    },
    {
        label: "Journey Score",
        value: "journey_score",
    },        
]

const topPerformingJourneys = [
    {
        steps: [
            "Social",
            "Webinar",
            "Demo",
            "Sales",
        ],
        revenue: "$1000",
        conversionRate: "10%",
        journeyScore: "90",
        keyTrigger: "Product Demo Registration",
    },
    {
        steps: [
            "Social",
            "Webinar",
            "Demo",
            "Sales",
        ],
        revenue: "$1000",
        conversionRate: "10%",
        journeyScore: "90",
        keyTrigger: "Email Click-Through",
    },
    {
        steps: [
            "Social",
            "Webinar",
            "Demo",
            "Sales",
        ],
        revenue: "$1000",
        conversionRate: "10%",
        journeyScore: "90",
        keyTrigger: "Case Study Download",
    }
]

const journeyOptimizationSignals = [
    {
        title: "Optimization Alert",
        type: "alert",
        message: <p className="text-sm text-white/70">42% drop after demo registration. <span className="text-white">Potential $3.2M revenue loss.</span> GYB suggests <span className="text-white">sending a success story email.</span></p>,
    },
    {
        title: "Journey Acceleration",
        type: "default",
        message: <p className="text-sm text-white/70">Reduce cycle from <span className="text-white">12 to 8 days</span> for <span className="text-white">+$840K/month</span> impact.</p>,
    },
    
]

export function DashboardContent({ clientId, campaignId }: DashboardContentProps) {
    const [ maxImpactRoi, setMaxImpactRoi ] = useState(0);
    const [ maxImpactAttribution, setMaxImpactAttribution ] = useState(0);

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const dashboard = await getDashboard(clientId, campaignId);
                console.log(dashboard);
            } catch (error) {
                console.error('Failed to fetch dashboard:', error);
            }
        };
        
        fetchDashboard();
    }, [clientId, campaignId]);


    const sizeImpactJourney = () => {
        const maxRoi = Math.max(...channelImpactItems.map(item => item.roi));
        const maxAttribution = Math.max(...channelImpactItems.map(item => item.attribution));

        setMaxImpactRoi(maxRoi);
        setMaxImpactAttribution(maxAttribution);
    }

    useEffect(() => {
        sizeImpactJourney();
    }, [channelImpactItems]);

    return (
        <>
            <Header title="Dashboard" />

            <PlatformRow>
                <PlatformBlock size={PlatformBlockSize.FULL}>
                    <PlatformBlockLabel>
                        Value Monitor
                    </PlatformBlockLabel>

                    <div className="flex w-full gap-2">
                        {valueMonitorItems.map((item) => (
                            <PlatformBlockContent key={item.title}>
                                <p className="text-sm font-medium tracking-tight opacity-70 mb-4">{item.title}</p>

                                <div className="flex items-center justify-between gap-2">
                                    <p className="text-3xl font-medium tracking-tight">{item.value}</p>
                                    <p className={`text-sm font-medium leading-none p-2 rounded-full tracking-tight border-[.5px] ${item.percentage > 0 ? 'border-green-500' : 'border-red-500'}`}>{item.percentage}%</p>
                                </div>
                            </PlatformBlockContent>
                        ))}
                    </div>
                </PlatformBlock>
            </PlatformRow>

            <PlatformRow>
                <PlatformBlock divider size={PlatformBlockSize.SMALL}>
                    <div className="flex justify-between items-center">
                        <PlatformBlockLabel>
                            Channel Impact
                        </PlatformBlockLabel>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-[2px] rounded-lg bg-branding-primary"></div>
                                <p className="text-xs font-medium tracking-tight">Attribution</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="w-4 h-[2px] rounded-lg bg-branding-secondary"></div>
                                <p className="text-xs font-medium tracking-tight">ROI</p>
                            </div>
                        </div>
                    </div>

                    <PlatformBlockContent>
                    <div className="flex flex-col">
                            <p className="text-sm font-medium tracking-tight opacity-70 mb-4">Channels</p>
                            
                            <div className="flex flex-col gap-4">
                                {channelImpactItems.map((item) => (
                                    <div key={item.title} className="flex items-center w-full">
                                        <p className="text-sm font-medium tracking-tight w-[80px]">{item.title}</p>

                                        <div className="flex flex-col gap-1 w-full">
                                            <div className="flex items-center gap-2 w-full">
                                                <div className={`h-[2px] rounded-lg bg-branding-primary`} style={{ width: `${item.attribution / maxImpactAttribution * 100}%` }}></div>
                                            <p className="text-xs font-medium tracking-tight">{item.attribution}%</p>
                                        </div>
                                        <div className="flex items-center gap-2 w-full">
                                            <div className={`h-[2px] rounded-lg bg-branding-secondary`} style={{ width: `${item.roi / maxImpactRoi * 100}%` }}></div>
                                                <p className="text-xs font-medium tracking-tight">{item.roi}x</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </PlatformBlockContent>
                </PlatformBlock>

                <PlatformBlock size={PlatformBlockSize.FULL}>
                    <PlatformBlockLabel>
                        Attribution Flow
                    </PlatformBlockLabel>

                    <PlatformBlockContent>
                        <div className="flex items-center justify-between">
                            <OptionsInput options={attributionFlowOptions} />
                        </div>
                    </PlatformBlockContent>
                </PlatformBlock>
            </PlatformRow>

            <PlatformRow className="!border-b-0">
                <PlatformBlock size={PlatformBlockSize.MEDIUM} divider>
                    <div className="flex justify-between items-center">
                        <PlatformBlockLabel>
                            Top Performing Journeys
                        </PlatformBlockLabel>

                        <SortDropdown options={journeySortOptions} />
                    </div>

                    <div className="flex flex-col gap-2 mt-6">
                        {topPerformingJourneys.map((journey, index) => (
                            <PlatformBlockContent className="!m-0" key={journey.keyTrigger}>
                                <div className="flex flex-wrap w-full items-center gap-2">
                                    <p className="text-sm font-medium tracking-tight">{index + 1}</p>
                                    <div className="flex items-center gap-1">
                                        {journey.steps.map((step, stepIndex) => (
                                            <div key={step} className="flex items-center gap-1">
                                                <p key={step} className="text-sm font-medium tracking-tight">{step}</p>

                                                {stepIndex !== journey.steps.length - 1 && (
                                                    <RiArrowRightLine className="w-4" />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-1 mt-6">
                                    <div className="border-[.5px] w-fit bg-white/10 flex items-center gap-1 border-white/10 rounded-lg font-medium tracking-tight text-sm p-3">
                                        <p className="opacity-50 w-max">Revenue</p>
                                        <p>{journey.revenue}</p>
                                    </div>

                                    <div className="border-[.5px] w-fit bg-white/10 flex items-center gap-1 border-white/10 rounded-lg font-medium tracking-tight text-sm p-3">
                                        <p className="opacity-50 w-max">Conversion Rate</p>
                                        <p>{journey.conversionRate}</p>
                                    </div>

                                    <div className="border-[.5px] w-fit bg-white/10 flex items-center gap-1 border-white/10 rounded-lg font-medium tracking-tight text-sm p-3">
                                        <p className="opacity-50 w-max">Journey Score</p>
                                        <p>{journey.journeyScore}/100</p>
                                    </div>

                                    <div className="border-[.5px] w-fit bg-white/10 flex items-center gap-1 border-white/10 rounded-lg font-medium tracking-tight text-sm p-3">
                                        <p className="opacity-50 w-max">Key Trigger</p>
                                        <p className="w-max">{journey.keyTrigger}</p>
                                    </div>
                                </div>
                            </PlatformBlockContent>
                        ))}
                    </div>
                </PlatformBlock>

                <div className="w-full">
                    <div className="border-b-[.5px] border-border-primary">
                        <PlatformBlock>
                            <PlatformBlockLabel>
                                Journey Optimization Signals
                            </PlatformBlockLabel>

                            <div className="flex flex-col gap-2 mt-6">
                                {journeyOptimizationSignals.map((signal) => (
                                    <PlatformBlockContent key={signal.title} className={`bg-transparent !mt-0 ${signal.type === "alert" ? "bg-brand-primary-transparent" : "bg-brand-secondary-transparent"}`}>
                                        <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            {signal.type === "alert" ? (
                                                <RiErrorWarningFill className="w-5" />
                                            ) : (
                                                <RiFlashlightFill className="w-5" />
                                            )}
                                            <p className="text-sm font-medium tracking-tight">{signal.title}</p>
                                        </div>
                                        {signal.message}
                                    </div>
                                    </PlatformBlockContent>
                                ))}
                            </div>
                        </PlatformBlock>
                    </div>
                    <PlatformBlock>
                        <PlatformBlockLabel>
                            Real-Time Journey Tracking
                        </PlatformBlockLabel>

                        <div className="mt-6">
                            <div className="border-b-[.5px] border-border-primary py-4 flex items-center justify-between h-16">
                                <div className="flex items-center gap-2 opacity-70">
                                    <RiCheckboxCircleFill className="w-5" />
                                    <p className="text-sm font-medium tracking-tight">Active Journeys</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <p className="text-sm font-medium tracking-tight">1.249</p>
                                </div>
                            </div>

                            <div className="border-b-[.5px] border-border-primary py-4 flex items-center justify-between h-16">
                                <div className="flex items-center gap-2 opacity-70">
                                    <RiArrowUpLine className="w-5" />
                                    <p className="text-sm font-medium tracking-tight">Trending Ups</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        <p className="text-sm font-medium tracking-tight">Social</p>
                                        <RiArrowRightLine className="w-4" />
                                        <p className="text-sm font-medium tracking-tight">Social</p>
                                    </div>

                                    <p className="text-sm font-medium leading-none p-2 rounded-full tracking-tight border-[.5px] border-green-500">+28%</p>
                                </div>
                            </div>

                            <div className="border-b-[.5px] border-border-primary py-4 flex items-center justify-between h-16">
                                <div className="flex items-center gap-2 opacity-70">
                                    <RiArrowDownLine className="w-5" />
                                    <p className="text-sm font-medium tracking-tight">At Risk</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        <p className="text-sm font-medium tracking-tight">Search</p>
                                        <RiArrowRightLine className="w-4" />
                                        <p className="text-sm font-medium tracking-tight">Email Path</p>
                                    </div>

                                    <p className="text-sm font-medium leading-none p-2 rounded-full tracking-tight border-[.5px] border-red-500">-12%</p>
                                </div>
                            </div>

                            <div className="py-4 flex items-center justify-between h-16">
                                <div className="flex items-center gap-2 opacity-70">
                                    <RiSparkling2Fill className="w-5" />
                                    <p className="text-sm font-medium tracking-tight">New Pattern</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        <p className="text-sm font-medium tracking-tight">LinkedIn</p>
                                        <RiArrowRightLine className="w-4" />
                                        <p className="text-sm font-medium tracking-tight">Webinar Emergence</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </PlatformBlock>
                </div>
            </PlatformRow>
        </>
    );
} 