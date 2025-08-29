'use client';

import Header from "@/components/Header";

import PlatformRow from "@/components/PlatformRow";
import PlatformBlock, { PlatformBlockSize } from "@/components/PlatformBlock";
import PlatformBlockLabel from "@/components/PlatformBlockLabel";
import OptionsInput from "@/components/ui/OptionsInput";
import PlatformBlockContent from "@/components/PlatformBlockContent";
import { RiAlertFill, RiArrowRightLine, RiFlashlightFill } from "@remixicon/react";
import { useState, useEffect } from "react";
import { getChannelPerformance } from "@/hooks/getChannelPerformance";

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

export default function ChannelPerformanceContent({ clientId }: { clientId: string }) {
    const [maxConversionVelocity, setMaxConversionVelocity] = useState(0);
    const [conversionVelocityItems, setConversionVelocityItems] = useState<any[]>([]);
    const [crossChannelAmplificationTableItems, setCrossChannelAmplificationTableItems] = useState<any[]>([]);
    const [paidSearchItems, setPaidSearchItems] = useState<any>({});
    const [optimizationQueueTableItems, setOptimizationQueueTableItems] = useState<any[]>([]);
    const [optimizationSignalsItems, setOptimizationSignalsItems] = useState<any[]>([]);

    useEffect(() => {
        const fetchChannelPerformance = async () => {
            const channelPerformance = await getChannelPerformance(clientId);
            setConversionVelocityItems(channelPerformance.conversionVelocity.metrics);
            setCrossChannelAmplificationTableItems(channelPerformance.crossChannelAmplification.combinations);
            setPaidSearchItems(channelPerformance.channelIntelligence.channels[0]);
            setOptimizationQueueTableItems(channelPerformance.realTimeOptimizationSignals.sections[1].actions);
            console.log(channelPerformance);
            setOptimizationSignalsItems(channelPerformance.realTimeOptimizationSignals.sections[0].alerts);
        }
        fetchChannelPerformance();
    }, []);

    useEffect(() => {
        const maxValue = Math.max(...conversionVelocityItems.map((item: any) => parseFloat(item.value)));
        setMaxConversionVelocity(maxValue);
    }, [conversionVelocityItems]);

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
                        <PlatformBlockContent>
                            <p className="text-sm font-medium tracking-tight opacity-70 mb-4">Conversion</p>
                            <p className="text-3xl font-medium tracking-tight">{paidSearchItems.conversion}</p>
                        </PlatformBlockContent> 
                        <PlatformBlockContent>
                            <p className="text-sm font-medium tracking-tight opacity-70 mb-4">Hidden Value</p>
                            <p className="text-3xl font-medium tracking-tight">{paidSearchItems.hiddenValue}</p>
                        </PlatformBlockContent> 
                        <PlatformBlockContent>
                            <p className="text-sm font-medium tracking-tight opacity-70 mb-4">Revenue</p>
                            <p className="text-3xl font-medium tracking-tight">{paidSearchItems.revenue}</p>
                        </PlatformBlockContent> 
                        <PlatformBlockContent>
                            <p className="text-sm font-medium tracking-tight opacity-70 mb-4">ROI</p>
                            <p className="text-3xl font-medium tracking-tight">{paidSearchItems.roi}</p>
                        </PlatformBlockContent> 
                        <PlatformBlockContent>
                            <p className="text-sm font-medium tracking-tight opacity-70 mb-4">Trend</p>
                            <p className="text-3xl font-medium tracking-tight">{paidSearchItems.trend}</p>
                        </PlatformBlockContent> 
                    </div>
                </PlatformBlock>
            </PlatformRow>

            <PlatformRow>
                <PlatformBlock size={PlatformBlockSize.SMALL_MEDIUM} divider>
                    <PlatformBlockLabel>
                        Cross-Channel Amplification
                    </PlatformBlockLabel>

                    <div className="mt-6">
                        {crossChannelAmplificationTableItems.map((item: any, i: number) => (
                            <div key={i} className="flex py-4 border-b-[.5px] border-white/10 last:border-none first:pt-0 last:pb-0 items-center justify-between">
                                <p className="text-sm font-medium tracking-tight opacity-70 flex items-center gap-1">{item.channels[0]} {<RiArrowRightLine className="w-4 h-4" />} {item.channels[1]}</p>
                                <div className="flex items-center gap-2">
                                    <p className="text-sm font-medium tracking-tight">{item.multiplier} multiplier</p>
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
                                {conversionVelocityItems.map((item: any, i: number) => (
                                    <div key={item.channel + i} className="flex items-center w-full">
                                        <p className="text-sm font-medium tracking-tight w-[120px]">{item.channel}</p>
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
                        {optimizationSignalsItems.map((item, i) => (
                            <div className={`flex max-w-[300px] rounded-2xl p-4 flex-col gap-2 bg-brand-primary-transparent`} key={item.message + i}>
                                <div className="flex items-center gap-2">
                                    <RiAlertFill className="w-5" />
                                    <p className="text-sm font-medium tracking-tight">New optimization signal</p>
                                </div>
                                <p className="text-sm font-medium opacity-70 tracking-tight">{item.channels} {item.message}</p>
                            </div>
                        ))}
                    </div>

                </PlatformBlock>

                <PlatformBlock divider size={PlatformBlockSize.SMALL}>
                    <PlatformBlockLabel>
                        Optimization Queue
                    </PlatformBlockLabel>

                    <PlatformBlockContent>
                        {optimizationQueueTableItems.map((item, i) => (
                            <div key={item.action} className="flex py-4 border-b-[.5px] border-white/10 last:border-none first:pt-0 last:pb-0 items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <p className="text-sm font-medium tracking-tight opacity-70">{i + 1}.</p>
                                    <p className="text-sm font-medium tracking-tight opacity-70">{item.action}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="text-sm font-medium tracking-tight">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </PlatformBlockContent>
                </PlatformBlock>
            </PlatformRow>
        </>
    )
}