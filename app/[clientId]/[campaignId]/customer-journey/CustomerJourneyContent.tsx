"use client";

import Header from "@/components/Header";
import PlatformRow from "@/components/PlatformRow";
import PlatformBlock, { PlatformBlockSize } from "@/components/PlatformBlock";
import PlatformBlockLabel from "@/components/PlatformBlockLabel";
import PlatformBlockContent from "@/components/PlatformBlockContent";
import { RiAlertFill, RiArrowRightLine, RiFlashlightFill } from "@remixicon/react";
import SortDropdown from "@/components/ui/Dropdown";


const journeySortOptions = [
    { label: "Revenue", value: "revenue" },
    { label: "Conversion Rate", value: "conversionRate" },
    { label: "Journey Score", value: "journeyScore" },
]

const journeyMatrixItems = [
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

const activeJourneysTable = [
    {
        label: "Total Active",
        value: "10",
    },
    {
        label: "High Value",
        value: "10",
    },
    {
        label: "At Risk",
        value: "10",
    },
    {
        label: "Accelerating",
        value: "10",
    },
]

const velocityMetricsTable = [
    {
        label: "Time to Conversion",
        value: "10",
    },
    {
        label: "Engagement Depth",
        value: "10",
    },
    {
        label: "Conversion Rate",
        value: "10",
    },
]

const patternIntelligence = [
    {
        icon: <RiFlashlightFill className="w-5" />,
        background: "bg-brand-secondary-transparent",
        title: "Strong Demo Growth",
        text: "GYB shows that Enterprise Demo Requests have increased by 32%, indicating strong interest from potential clients."
    },
    {
        icon: <RiFlashlightFill className="w-5" />,
        background: "bg-brand-secondary-transparent",
        title: "Strong Demo Growth",
        text: "GYB shows that Enterprise Demo Requests have increased by 32%, indicating strong interest from potential clients."
    },
    {
        icon: <RiAlertFill className="w-5" />,
        background: "bg-brand-primary-transparent",
        title: "Strong Demo Growth",
        text: "GYB shows that Enterprise Demo Requests have increased by 32%, indicating strong interest from potential clients."
    },
]

const journeyAccelerationTable = [
    {
        label: "Before Intelligence",
        value: "42 days",
        percentage: 10
    },
    {
        label: "After Intelligence",
        value: "28 days",
        percentage: 10
    },
    {
        label: "Accelaration Impact",
        value: "+920K",
        percentage: 10
    }
]

const valueCaptureTable = [
    {
        label: "Avg. Touchpoints",
        value: "8.4",
        percentage: -20
    },
    {
        label: "Key Decision Point",
        value: "Touch 4",
        percentage: -20
    },
    {   
        label: "Drop-Off Risk Zone",
        value: "Touch 6-7",
        percentage: -20
    },
]

export function CustomerJourneyContent({ clientId, campaignId }: { clientId: string, campaignId: string }) {
    return (
        <>
            <Header title="Customer Journey" />

            <PlatformRow>
                <PlatformBlock size={PlatformBlockSize.MEDIUM} divider>
                    <div className="flex justify-between items-center">
                        <PlatformBlockLabel>
                            Journey Value Matrix
                        </PlatformBlockLabel>

                        <SortDropdown options={journeySortOptions} />
                    </div>

                    <div className="flex flex-col gap-2 mt-6">
                        {journeyMatrixItems.map((journey, index) => (
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

                <PlatformBlock size={PlatformBlockSize.SMALL} divider>
                    <PlatformBlockLabel>
                        Real-Time Journey Monitor
                    </PlatformBlockLabel>

                    <div className="mt-6">
                        <p className="text-sm font-medium tracking-tight opacity-70 mb-4">Active Journeys</p>
                        <PlatformBlockContent className="!mt-0">
                            {activeJourneysTable.map((item) => (
                                <div key={item.label} className="flex py-4 border-b-[.5px] border-white/10 last:border-none first:pt-0 last:pb-0 items-center justify-between">
                                    <p className="text-sm font-medium tracking-tight opacity-70">{item.label}</p>
                                    <p className="text-sm font-medium tracking-tight">{item.value}</p>
                                </div>
                            ))}
                        </PlatformBlockContent>
                    </div>

                    <div className="mt-6">
                        <p className="text-sm font-medium tracking-tight opacity-70 mb-4">Velocity Metrics</p>
                        <PlatformBlockContent className="!mt-0">
                            {velocityMetricsTable.map((item) => (
                                <div key={item.label} className="flex py-4 border-b-[.5px] border-white/10 last:border-none first:pt-0 last:pb-0 items-center justify-between">
                                    <p className="text-sm font-medium tracking-tight opacity-70">{item.label}</p>
                                    <p className="text-sm font-medium tracking-tight">{item.value}</p>
                                </div>
                            ))}
                        </PlatformBlockContent>
                    </div>
                </PlatformBlock> 
            </PlatformRow>

            <PlatformRow>
                <PlatformBlock size={PlatformBlockSize.FULL}>
                    <PlatformBlockLabel>
                        Pattern Intelligence
                    </PlatformBlockLabel>

                    <div className="flex gap-2 mt-6 flex-wrap">
                        {patternIntelligence.map((item) => (
                            <div className={`flex max-w-[300px] rounded-2xl p-4 flex-col gap-2 ${item.background}`} key={item.title}>
                                <div className="flex items-center gap-2">
                                    {item.icon}
                                    <p className="text-sm font-medium tracking-tight">{item.title}</p>
                                </div>
                                <p className="text-sm font-medium opacity-70 tracking-tight">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </PlatformBlock>
            </PlatformRow>

            <PlatformRow className="!border-b-0">
                <PlatformBlock size={PlatformBlockSize.SMALL_MEDIUM} divider>
                    <PlatformBlockLabel>
                        Optimization Engine
                    </PlatformBlockLabel>

                    <div className="mt-6">
                        <p className="text-sm font-medium tracking-tight opacity-70 mb-4">Journey Acceleration</p>
                        <PlatformBlockContent className="!mt-0">
                            {journeyAccelerationTable.map((item) => (
                                <div key={item.label} className="flex py-4 border-b-[.5px] border-white/10 last:border-none first:pt-0 last:pb-0 items-center justify-between">
                                    <p className="text-sm font-medium tracking-tight opacity-70">{item.label}</p>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm font-medium tracking-tight">{item.value}</p>
                                        <p className={`text-sm font-medium tracking-tight border-[.5px] border-green-500 rounded-full p-2 leading-none ${item.percentage > 0 ? "border-green-500" : "border-red-500"}`}>{item.percentage > 0 ? "+" : ""}{item.percentage}%</p>                                    </div>
                                </div>
                            ))}
                        </PlatformBlockContent>
                    </div>

                    <div className="mt-6">
                        <p className="text-sm font-medium tracking-tight opacity-70 mb-4">Engagement Depth</p>
                        <PlatformBlockContent className="!mt-0">
                            {valueCaptureTable.map((item) => (
                                <div key={item.label} className="flex py-4 border-b-[.5px] border-white/10 last:border-none first:pt-0 last:pb-0 items-center justify-between">
                                    <p className="text-sm font-medium tracking-tight opacity-70">{item.label}</p>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm font-medium tracking-tight">{item.value}</p>
                                        <p className={`text-sm font-medium tracking-tight border-[.5px] border-green-500 rounded-full p-2 leading-none ${item.percentage > 0 ? "border-green-500" : "border-red-500"}`}>{item.percentage > 0 ? "+" : ""}{item.percentage}%</p>                                    </div>                                
                                </div>
                            ))}
                        </PlatformBlockContent>
                    </div>
                </PlatformBlock>

                <PlatformBlock size={PlatformBlockSize.SMALL_MEDIUM}>
                    <PlatformBlockLabel>
                        Implementation Suggestions
                    </PlatformBlockLabel>

                    <div className="mt-6">
                        <p className="text-sm font-medium tracking-tight opacity-70 mb-4">Priority Queu</p>
                        <PlatformBlockContent className="!mt-0">
                            {journeyAccelerationTable.map((item, i) => (
                                <div key={item.label} className="flex py-4 border-b-[.5px] border-white/10 last:border-none first:pt-0 last:pb-0 items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm font-medium tracking-tight opacity-70">{i + 1}</p>
                                        <p className="text-sm font-medium tracking-tight opacity-70">{item.label}</p>
                                    </div>
                                        
                                    
                                    <p className={`text-sm font-medium tracking-tight border-[.5px] border-green-500 rounded-full p-2 leading-none ${item.percentage > 0 ? "border-green-500" : "border-red-500"}`}>{item.percentage > 0 ? "+" : ""}{item.percentage}%</p>
                                </div>
                            ))}
                        </PlatformBlockContent>
                    </div>

                    <div className="mt-6">
                        <p className="text-sm font-medium tracking-tight opacity-70 mb-4">Risk Mitigation</p>
                        <PlatformBlockContent className="!mt-0">
                            {valueCaptureTable.map((item, i) => (
                                <div key={item.label} className="flex py-4 border-b-[.5px] border-white/10 last:border-none first:pt-0 last:pb-0 items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm font-medium tracking-tight opacity-70">{i + 1}</p>
                                        <p className="text-sm font-medium tracking-tight opacity-70">{item.label}</p>
                                    </div>
                                        
                                    <p className={`text-sm font-medium tracking-tight border-[.5px] border-green-500 rounded-full p-2 leading-none ${item.percentage > 0 ? "border-green-500" : "border-red-500"}`}>{item.percentage > 0 ? "+" : ""}{item.percentage}%</p>
                                                                    </div>
                            ))}
                        </PlatformBlockContent>
                    </div>
                </PlatformBlock>
            </PlatformRow>
        </>
    )
}