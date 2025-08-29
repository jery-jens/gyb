"use client";

import Header from "@/components/Header";
import PlatformRow from "@/components/PlatformRow";
import PlatformBlock, { PlatformBlockSize } from "@/components/PlatformBlock";
import PlatformBlockLabel from "@/components/PlatformBlockLabel";
import PlatformBlockContent from "@/components/PlatformBlockContent";
import { RiAlertFill, RiArrowRightLine, RiFlashlightFill } from "@remixicon/react";
import SortDropdown from "@/components/ui/Dropdown";
import { useEffect, useState } from "react";
import { getCustomerJourney } from "@/hooks/getCustomerJourney";

// TypeScript interfaces
interface JourneyStep {
    id: string;
    steps: string[];
    metrics: Metric[];
}

interface Metric {
    label: string;
    value: string | number;
}

interface OptimizationEngineSection {
    metrics: Metric[];
}

interface RealTimeJourneySection {
    metrics: Metric[];
}

interface RealTimeJourneyMonitor {
    sections: RealTimeJourneySection[];
}

interface ImplementationSuggestionItem {
    action: string;
    value: string;
}

interface ImplementationSuggestionsSection {
    items: ImplementationSuggestionItem[];
}

interface PatternIntelligenceItem {
    icon: React.ReactNode;
    background: string;
    title: string;
    text: string;
}

const journeySortOptions = [
    { label: "Revenue", value: "revenue" },
    { label: "Conversion Rate", value: "conversionRate" },
    { label: "Journey Score", value: "journeyScore" },
]

const patternIntelligence: PatternIntelligenceItem[] = [
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

export function CustomerJourneyContent({ clientId, campaignId }: { clientId: string, campaignId: string }) {
    const [journeyValueMatrix, setJourneyValueMatrix] = useState<JourneyStep[]>([]);
    const [optimizationEngineJourneyAcceleration, setOptimizationEngineJourneyAcceleration] = useState<OptimizationEngineSection>({ metrics: [] });
    const [optimizationEngineValueCreationDepth, setOptimizationEngineValueCreationDepth] = useState<OptimizationEngineSection>({ metrics: [] });
    const [realTimeJourneyMonitor, setRealTimeJourneyMonitor] = useState<RealTimeJourneyMonitor>({ sections: [] });
    const [implementationSuggestionsPriorityQueue, setImplementationSuggestionsPriorityQueue] = useState<ImplementationSuggestionsSection>({ items: [] });
    const [implementationSuggestionsRiskMitigation, setImplementationSuggestionsRiskMitigation] = useState<ImplementationSuggestionsSection>({ items: [] });

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const customerJourney = await getCustomerJourney(clientId);
                console.log(customerJourney);
                setJourneyValueMatrix(customerJourney?.journeyValueMatrix || []);
                setOptimizationEngineJourneyAcceleration(customerJourney?.optimizationEngine?.sections?.[0] || { metrics: [] });
                setOptimizationEngineValueCreationDepth(customerJourney?.optimizationEngine?.sections?.[1] || { metrics: [] });
                setRealTimeJourneyMonitor(customerJourney?.realTimeJourneyMonitor || { sections: [] });
                setImplementationSuggestionsPriorityQueue(customerJourney?.implementationSuggestions?.sections?.[0] || { items: [] });
                setImplementationSuggestionsRiskMitigation(customerJourney?.implementationSuggestions?.sections?.[1] || { items: [] });
            } catch (error) {
                console.error('Failed to fetch customer journey:', error);
                if (error instanceof Error) {
                    console.error('Error details:', error.message);
                }
            }
        };
        
        fetchDashboard();
    }, [clientId, campaignId]);
    
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
                        {(journeyValueMatrix || []).map((journey: JourneyStep, index: number) => (
                            <PlatformBlockContent className="!m-0" key={journey?.id || index}>
                                <div className="flex flex-wrap w-full items-center gap-2">
                                    <p className="text-sm font-medium tracking-tight">{index + 1}</p>
                                    <div className="flex items-center gap-1">
                                        {(journey?.steps || []).map((step: string, stepIndex: number) => (
                                            <div key={step} className="flex items-center gap-1">
                                                <p key={step} className="text-sm font-medium tracking-tight">{step}</p>

                                                {stepIndex !== (journey?.steps || []).length - 1 && (
                                                    <RiArrowRightLine className="w-4" />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-1 mt-6">
                                    {(journey?.metrics || []).map((metric: Metric, metricIndex: number) => (
                                        <div key={metricIndex} className="border-[.5px] w-fit bg-white/10 flex items-center gap-1 border-white/10 rounded-lg font-medium tracking-tight text-sm p-3">
                                            <p className="opacity-50 w-max">{metric?.label}</p>
                                            <p>{metric?.value}</p>
                                        </div>
                                    ))}
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
                            {(realTimeJourneyMonitor?.sections?.[0]?.metrics || []).map((item: Metric) => (
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
                            {(realTimeJourneyMonitor?.sections?.[1]?.metrics || []).map((item: Metric) => (
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
                        {patternIntelligence.map((item, index) => (
                            <div className={`flex max-w-[300px] rounded-2xl p-4 flex-col gap-2 ${item.background}`} key={`${item.title}-${index}`}>
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
                            {(optimizationEngineJourneyAcceleration?.metrics || []).map((item: Metric, index: number) => (
                                <div key={item?.label || index} className="flex py-4 border-b-[.5px] border-white/10 last:border-none first:pt-0 last:pb-0 items-center justify-between">
                                    <p className="text-sm font-medium tracking-tight opacity-70">{item?.label}</p>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm font-medium tracking-tight">{item?.value}</p>
                                    </div>
                                </div>
                            ))}
                        </PlatformBlockContent>
                    </div>

                    <div className="mt-6">
                        <p className="text-sm font-medium tracking-tight opacity-70 mb-4">Value Capture Delta</p>
                        <PlatformBlockContent className="!mt-0">
                            {(optimizationEngineValueCreationDepth?.metrics || []).map((item: Metric) => (
                                <div key={item.label} className="flex py-4 border-b-[.5px] border-white/10 last:border-none first:pt-0 last:pb-0 items-center justify-between">
                                    <p className="text-sm font-medium tracking-tight opacity-70">{item.label}</p>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm font-medium tracking-tight">{item.value}</p>
                                    </div>                                
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
                            {(implementationSuggestionsPriorityQueue?.items || []).map((item: ImplementationSuggestionItem, index: number) => (
                                <div key={item.action} className="flex py-4 border-b-[.5px] border-white/10 last:border-none first:pt-0 last:pb-0 items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm font-medium tracking-tight opacity-70">{index + 1}</p>
                                        <p className="text-sm font-medium tracking-tight opacity-70">{item.action}</p>
                                    </div>
                                        
                                    
                                    <p className={`text-sm font-medium tracking-tight border-[.5px] border-green-500 rounded-full p-2 leading-none ${item.value.includes("+") ? "border-green-500" : "border-red-500"}`}>{item.value}</p>
                                </div>
                            ))}
                        </PlatformBlockContent>
                    </div>

                    <div className="mt-6">
                        <p className="text-sm font-medium tracking-tight opacity-70 mb-4">Risk Mitigation</p>
                        <PlatformBlockContent className="!mt-0">
                            {(implementationSuggestionsRiskMitigation?.items || []).map((item: ImplementationSuggestionItem, index: number) => (
                                <div key={item.action} className="flex py-4 border-b-[.5px] border-white/10 last:border-none first:pt-0 last:pb-0 items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm font-medium tracking-tight opacity-70">{index + 1}</p>
                                        <p className="text-sm font-medium tracking-tight opacity-70">{item.action}</p>
                                    </div>
                                    <p className={`text-sm font-medium tracking-tight border-[.5px] border-green-500 rounded-full p-2 leading-none ${item.value.includes("+") ? "border-green-500" : "border-red-500"}`}>{item.value}</p>
                                </div>
                            ))}
                        </PlatformBlockContent>
                    </div>
                </PlatformBlock>
            </PlatformRow>
        </>
    )
}