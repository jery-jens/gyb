"use client";

import Header from "@/components/Header";
import { PlatformBlockSize } from "@/components/PlatformBlock";
import PlatformBlock from "@/components/PlatformBlock";
import PlatformBlockContent from "@/components/PlatformBlockContent";
import PlatformBlockLabel from "@/components/PlatformBlockLabel";
import PlatformRow from "@/components/PlatformRow";
import { RiAlertFill, RiArrowRightLine, RiFlashlightFill } from "@remixicon/react";
import SortDropdown from "@/components/ui/Dropdown";

export function RoiAnalysisContent({ clientId, campaignId }: { clientId: string, campaignId: string }) {
    const valueCreationItems = [
        {
            label: "Value Creation",
            value: "$100,000",
        },
        {
            label: "Value Creation",
            value: "$100,000",
        },
        {
            label: "Value Creation",
            value: "$100,000",
        },
        {
            label: "Value Creation",
            value: "$100,000",
        },
        {
            label: "Value Creation",
            value: "$100,000",
        },
    ];

    const channelROIItems = [
        {
            steps: ["Channel", "ROI", "ROI", "ROI"],
            revenue: "$100,000",
            conversionRate: "10%",
            journeyScore: "100",
            keyTrigger: "Key Trigger",
        },
        {
            steps: ["Channel", "ROI", "ROI", "ROI"],
            revenue: "$100,000",
            conversionRate: "10%",
            journeyScore: "100",
            keyTrigger: "Key Trigger",
        },
    ];

    const channelROISortOptions = [
        { label: "Revenue", value: "revenue" },
        { label: "Conversion Rate", value: "conversionRate" },
        { label: "Journey Score", value: "journeyScore" },
    ];

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
    ];

    const velocityOptimizationTable = [
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

    const crossChannelAmplificationTable = [
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

    const valueCreationForecastTable = [
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

    const implementationVelocityItems = [
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

    return (
        <>
            <Header title="ROI Analysis" />

            <PlatformRow>
                <PlatformBlock size={PlatformBlockSize.FULL}>
                    <PlatformBlockLabel>
                        ROI Analysis
                    </PlatformBlockLabel>

                    <div className="flex gap-2">
                        {valueCreationItems && valueCreationItems.map((item) => (
                            <PlatformBlockContent key={item.label}>
                                <p className="text-sm font-medium tracking-tight opacity-70 mb-4">{item.label}</p>

                                <p className="text-3xl font-medium tracking-tight">{item.value}</p>
                            </PlatformBlockContent> 
                        ))}
                    </div>
                </PlatformBlock>
            </PlatformRow>  

            <PlatformRow>
                <PlatformBlock size={PlatformBlockSize.SMALL_MEDIUM} divider>
                    <div className="flex justify-between items-center">
                        <PlatformBlockLabel>
                            Channel ROI Performance
                        </PlatformBlockLabel>

                        <SortDropdown options={channelROISortOptions} />
                    </div>

                    <div className="flex flex-col gap-2 mt-6">
                        {channelROIItems.map((item, index) => (
                            <PlatformBlockContent className="!m-0" key={item.keyTrigger}>
                                <div className="flex flex-wrap w-full items-center gap-2">
                                    <p className="text-sm font-medium tracking-tight">{index + 1}</p>
                                    <div className="flex items-center gap-1">
                                        {item.steps.map((step, stepIndex) => (
                                            <div key={step} className="flex items-center gap-1">
                                                <p key={step} className="text-sm font-medium tracking-tight">{step}</p>

                                                {stepIndex !== item.steps.length - 1 && (
                                                    <RiArrowRightLine className="w-4" />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-1 mt-6">
                                    <div className="border-[.5px] w-fit bg-white/10 flex items-center gap-1 border-white/10 rounded-lg font-medium tracking-tight text-sm p-3">
                                        <p className="opacity-50 w-max">Revenue</p>
                                        <p>{item.revenue}</p>
                                    </div>

                                    <div className="border-[.5px] w-fit bg-white/10 flex items-center gap-1 border-white/10 rounded-lg font-medium tracking-tight text-sm p-3">
                                        <p className="opacity-50 w-max">Conversion Rate</p>
                                        <p>{item.conversionRate}</p>
                                    </div>

                                    <div className="border-[.5px] w-fit bg-white/10 flex items-center gap-1 border-white/10 rounded-lg font-medium tracking-tight text-sm p-3">
                                        <p className="opacity-50 w-max">Journey Score</p>
                                        <p>{item.journeyScore}/100</p>
                                    </div>

                                    <div className="border-[.5px] w-fit bg-white/10 flex items-center gap-1 border-white/10 rounded-lg font-medium tracking-tight text-sm p-3">
                                        <p className="opacity-50 w-max">Key Trigger</p>
                                        <p className="w-max">{item.keyTrigger}</p>
                                    </div>
                                </div>
                            </PlatformBlockContent>
                        ))}
                    </div>
                </PlatformBlock>  

                <PlatformBlock size={PlatformBlockSize.SMALL_MEDIUM} divider>
                    <div className="flex justify-between items-center">
                        <PlatformBlockLabel>
                            Channel ROI Performance
                        </PlatformBlockLabel>

                        <SortDropdown options={channelROISortOptions} />
                    </div>

                    <div className="flex flex-col gap-2 mt-6">
                        {channelROIItems.map((item, index) => (
                            <PlatformBlockContent className="!m-0" key={item.keyTrigger}>
                                <div className="flex flex-wrap w-full items-center gap-2">
                                    <p className="text-sm font-medium tracking-tight">{index + 1}</p>
                                    <div className="flex items-center gap-1">
                                        {item.steps.map((step, stepIndex) => (
                                            <div key={step} className="flex items-center gap-1">
                                                <p key={step} className="text-sm font-medium tracking-tight">{step}</p>

                                                {stepIndex !== item.steps.length - 1 && (
                                                    <RiArrowRightLine className="w-4" />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-1 mt-6">
                                    <div className="border-[.5px] w-fit bg-white/10 flex items-center gap-1 border-white/10 rounded-lg font-medium tracking-tight text-sm p-3">
                                        <p className="opacity-50 w-max">Revenue</p>
                                        <p>{item.revenue}</p>
                                    </div>

                                    <div className="border-[.5px] w-fit bg-white/10 flex items-center gap-1 border-white/10 rounded-lg font-medium tracking-tight text-sm p-3">
                                        <p className="opacity-50 w-max">Conversion Rate</p>
                                        <p>{item.conversionRate}</p>
                                    </div>

                                    <div className="border-[.5px] w-fit bg-white/10 flex items-center gap-1 border-white/10 rounded-lg font-medium tracking-tight text-sm p-3">
                                        <p className="opacity-50 w-max">Journey Score</p>
                                        <p>{item.journeyScore}/100</p>
                                    </div>

                                    <div className="border-[.5px] w-fit bg-white/10 flex items-center gap-1 border-white/10 rounded-lg font-medium tracking-tight text-sm p-3">
                                        <p className="opacity-50 w-max">Key Trigger</p>
                                        <p className="w-max">{item.keyTrigger}</p>
                                    </div>
                                </div>
                            </PlatformBlockContent>
                        ))}
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
                        Optimization Intelligence
                    </PlatformBlockLabel>

                    <div className="mt-6">
                        <p className="text-sm font-medium tracking-tight opacity-70 mb-4">Cross-Channel Amplification</p>
                        <PlatformBlockContent className="!mt-0">
                            {crossChannelAmplificationTable.map((item) => (
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
                        <p className="text-sm font-medium tracking-tight opacity-70 mb-4">Velocity Optimization</p>
                        <PlatformBlockContent className="!mt-0">
                            {velocityOptimizationTable.map((item) => (
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
                        Growth Acceleration Model
                    </PlatformBlockLabel>

                    <div className="mt-6">
                        <p className="text-sm font-medium tracking-tight opacity-70 mb-4">Value Creation Forecast</p>
                        <PlatformBlockContent className="!mt-0">
                            {valueCreationForecastTable.map((item, i) => (
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
                        <p className="text-sm font-medium tracking-tight opacity-70 mb-4">Implementation Velocity</p>
                        <PlatformBlockContent className="!mt-0">
                            {implementationVelocityItems.map((item, i) => (
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