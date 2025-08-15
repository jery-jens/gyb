'use client';
import Header from "@/components/Header";

import PlatformRow from "@/components/PlatformRow";
import PlatformBlock, { PlatformBlockSize } from "@/components/PlatformBlock";
import PlatformBlockLabel from "@/components/PlatformBlockLabel";
import OptionsInput from "@/components/ui/OptionsInput";
import PlatformBlockContent from "@/components/PlatformBlockContent";
import { RiAlertFill, RiArrowRightLine, RiFlashlightFill } from "@remixicon/react";
import { useState, useEffect } from "react";

const channelOptions = [ 
    {
        label: "Paid Search",
        value: "paid_search",
    },
    {
        label: "Display",
        value: "display",
    },
    {
        label: "Email",
        value: "email",
    },
    {
        label: "Social",
        value: "social",
    },
    
];

const channelPerformanceItems = [
    {
        label: "Revenue",
        value: "$46,000",
    },
    {
        label: "Marketing Spend",
        value: "$10,000",
    },
    {
        label: "Attribution-Optimized ROI",
        value: "$10,000",
    },
    {
        label: "Traditional Attribution ROI",
        value: "$10,000",
    },
    {
        label: "Total Revenue",
        value: "$10,000",
    },
];

const crossChannelAmplificationTableItems = [
    {
        labelOne: "Email",
        labelTwo: "Paid Search",
        value: "2.4x multiplier",
        percentage: 28,
    },
    {
        labelOne: "Email",
        labelTwo: "Paid Search",
        value: "2.4x multiplier",
        percentage: 28,
    }, 
    {
        labelOne: "Email",
        labelTwo: "Paid Search",
        value: "2.4x multiplier",
        percentage: 28,
    },
];

const conversionVelocityItems = [
    {
        label: "Email",
        value: "3.2",
    },
    {
        label: "Paid Search",
        value: "6",
    },
    {
        label: "Display",
        value: "3.2",
    },
    {
        label: "Social",
        value: "3.2",
    },
    
];

const optimizationSignals = [
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

const optimizationQueueTable = [
    {
        label: "Active Journeys",
        value: "+$52K",
        percentage: "+28%",
    },
    {
        label: "Email Sequence Timing",
        value: "+$38K",
        percentage: "+22%",
    },
    {
        label: "Content Personalization",
        value: "+$31K",
        percentage: "+20%",
    },
]

export default function ChannelPerformanceContent() {
    const [maxConversionVelocity, setMaxConversionVelocity] = useState(0);

    useEffect(() => {
        const maxValue = Math.max(...conversionVelocityItems.map(item => parseFloat(item.value)));
        setMaxConversionVelocity(maxValue);
    }, []);

    return (
        <>
            <Header title="Channel Performance" />

            <PlatformRow>
                <PlatformBlock size={PlatformBlockSize.FULL}>
                    <div className="flex items-center">
                        <span className="text-sm tracking-tight text-white/50 mr-4">Choose channel</span>
                        <OptionsInput options={channelOptions} />
                    </div>

                    <div className="flex gap-2">
                        {channelPerformanceItems && channelPerformanceItems.map((item) => (
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
                    <PlatformBlockLabel>
                        Cross-Channel Amplification
                    </PlatformBlockLabel>

                    <div className="mt-6">
                        {crossChannelAmplificationTableItems.map((item) => (
                            <div key={item.labelOne} className="flex py-4 border-b-[.5px] border-white/10 last:border-none first:pt-0 last:pb-0 items-center justify-between">
                                <p className="text-sm font-medium tracking-tight opacity-70 flex items-center gap-1">{item.labelOne} {<RiArrowRightLine className="w-4 h-4" />} {item.labelTwo}</p>
                                <div className="flex items-center gap-2">
                                    <p className="text-sm font-medium tracking-tight">{item.value}</p>
                                    <p className="text-sm font-medium tracking-tight border-[.5px] border-green-500 rounded-full p-2 leading-none">+{item.percentage}%</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </PlatformBlock>

                <PlatformBlock size={PlatformBlockSize.SMALL_MEDIUM}>
                    <PlatformBlockLabel>
                        Conversion Velocity
                    </PlatformBlockLabel>
                    <PlatformBlockContent>
                    <div className="flex flex-col">
                            <p className="text-sm font-medium tracking-tight opacity-70 mb-4">Channels</p>
                            
                            <div className="flex flex-col gap-4">
                                {conversionVelocityItems.map((item) => (
                                    <div key={item.label} className="flex items-center w-full">
                                        <p className="text-sm font-medium tracking-tight w-[120px]">{item.label}</p>
                                        <div className="flex items-center gap-2 w-full">
                                            <div className={`h-[2px] rounded-lg bg-branding-primary`} style={{ width: `${((item.value as unknown as number) / maxConversionVelocity) * 100}%` }}></div>
                                            <p className="text-xs font-medium tracking-tight w-[80px]">{item.value} days</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </PlatformBlockContent>
                </PlatformBlock>
            </PlatformRow>

            <PlatformRow className="!border-b-0">
                <PlatformBlock divider size={PlatformBlockSize.MEDIUM}>
                    <PlatformBlockLabel>
                        Real-Time Optimization Signals
                    </PlatformBlockLabel>

                    <div className="flex gap-2 mt-6 flex-wrap">
                        {optimizationSignals.map((item) => (
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

                <PlatformBlock divider size={PlatformBlockSize.SMALL}>
                    <PlatformBlockLabel>
                        Optimization Queue
                    </PlatformBlockLabel>

                    <PlatformBlockContent>
                        {optimizationQueueTable.map((item, i) => (
                            <div key={item.label} className="flex py-4 border-b-[.5px] border-white/10 last:border-none first:pt-0 last:pb-0 items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <p className="text-sm font-medium tracking-tight opacity-70">{i + 1}.</p>
                                    <p className="text-sm font-medium tracking-tight opacity-70">{item.label}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="text-sm font-medium tracking-tight">{item.value}</p>
                                    <p className="text-sm font-medium tracking-tight border-[.5px] border-green-500 rounded-full p-2 leading-none">{item.percentage}</p>
                                </div>
                            </div>
                        ))}
                    </PlatformBlockContent>
                </PlatformBlock>
            </PlatformRow>
        </>
    )
}