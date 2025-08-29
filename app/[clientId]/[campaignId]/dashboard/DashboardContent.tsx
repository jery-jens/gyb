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

export function DashboardContent({ clientId, campaignId }: DashboardContentProps) {
    const [ maxImpactRoi, setMaxImpactRoi ] = useState(0);
    const [ maxImpactAttribution, setMaxImpactAttribution ] = useState(0);

    const [valueMonitorItems, setValueMonitorItems] = useState([]);
    const [channelImpactItems, setChannelImpactItems] = useState([]);
    const [topJourneys, setTopJourneys] = useState([]);
    const [journeyOptimizationSignals, setJourneyOptimizationSignals] = useState([]);
    const [realTimeJourneyTracking, setRealTimeJourneyTracking] = useState([]);

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const dashboard = await getDashboard(clientId);
                console.log(dashboard);
                setValueMonitorItems(dashboard.valueMonitor);
                setChannelImpactItems(dashboard.channelImpact.data);
                setTopJourneys(dashboard.topJourneys);
                setJourneyOptimizationSignals(dashboard.journeyInsight);
                setRealTimeJourneyTracking(dashboard.realtimeJourneyTrackingSummary);
            } catch (error) {
                console.error('Failed to fetch dashboard:', error);
                if (error instanceof Error) {
                    console.error('Error details:', error.message);
                }
            }
        };
        
        fetchDashboard();
    }, [clientId, campaignId]);


    const sizeImpactJourney = () => {
        const maxRoi = Math.max(...channelImpactItems.map((item: any) => item.ChannelImpact.ROI));
        const maxAttribution = Math.max(...channelImpactItems.map((item: any) => item.ChannelImpact.Attribution));

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
                        {valueMonitorItems.map((item: any) => (
                            <PlatformBlockContent key={item.data.label}>
                                <p className="text-sm font-medium tracking-tight opacity-70 mb-4">{item.data.label}</p>

                                <div className="flex items-center justify-between gap-2">
                                    <p className="text-3xl font-medium tracking-tight">{item.data.value}</p>
                                    <p className={`text-sm font-medium leading-none p-2 rounded-full tracking-tight border-[.5px] ${item.data.changeValue > 0 ? 'border-green-500' : 'border-red-500'}`}>{item.data.changeValue}%</p>
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
                                {channelImpactItems.map((item: any) => (
                                    <div key={item.ChannelImpact.Channel} className="flex items-center w-full">
                                        <p className="text-sm font-medium tracking-tight w-[80px]">{item.ChannelImpact.Channel}</p>

                                        <div className="flex flex-col gap-1 w-full">
                                            <div className="flex items-center gap-2 w-full">
                                                <div className={`h-[2px] rounded-lg bg-branding-primary`} style={{ width: `${item.ChannelImpact.Attribution / maxImpactAttribution * 100}%` }}></div>
                                            <p className="text-xs font-medium tracking-tight">{item.ChannelImpact.Attribution}%</p>
                                        </div>
                                        <div className="flex items-center gap-2 w-full">
                                            <div className={`h-[2px] rounded-lg bg-branding-secondary`} style={{ width: `${item.ChannelImpact.ROI / maxImpactRoi * 100}%` }}></div>
                                                <p className="text-xs font-medium tracking-tight">{item.ChannelImpact.ROI}x</p>
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
                        {topJourneys.map((journey: any, index: any) => (
                            <PlatformBlockContent className="!m-0" key={journey.id}>
                                <div className="flex flex-wrap w-full items-center gap-2">
                                    <p className="text-sm font-medium tracking-tight">{index + 1}</p>
                                    <div className="flex items-center gap-1">
                                        {journey.steps.map((step: any, stepIndex: any) => (
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
                                    {journey.metrics.map((metric: any) => (
                                        <div key={metric.label} className="border-[.5px] w-fit bg-white/10 flex items-center gap-1 border-white/10 rounded-lg capitalize font-medium tracking-tight text-sm p-3">
                                            <p className="opacity-50 w-max">{metric.label}</p>
                                            <p>{metric.value}</p>
                                        </div>
                                    ))}
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
                                {journeyOptimizationSignals.map((signal: any) => (
                                    <PlatformBlockContent key={signal.title} className={`bg-transparent !mt-0 bg-brand-secondary-transparent`}>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-2">
                                                <RiFlashlightFill className="w-5" />
                                            <p className="text-sm font-medium tracking-tight">{signal.title}</p>
                                        </div>
                                        <p className="text-sm font-medium tracking-tight">
                                            {signal.insights}
                                        </p>
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
                            {realTimeJourneyTracking.map((item: any) => (   
                                <div key={item.label} className="border-b-[.5px] last:border-b-0 border-border-primary py-4 flex items-center justify-between h-16">
                                    <div className="flex items-center gap-2 opacity-70">
                                        <p className="text-sm font-medium tracking-tight">{item.label}</p>
                                    </div>

                                    {
                                        item.type === "metric" ? (
                                            <div className="flex items-center gap-4">
                                                <p className="text-sm font-medium tracking-tight">{item.value}</p>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-1">
                                                    {item.channels.map((channel: any) => (
                                                        <div key={channel} className="flex items-center gap-1">
                                                            <p className="text-sm font-medium tracking-tight">{channel}</p>
                                                            {item.channels.length > 1 && channel !== item.channels[item.channels.length - 1] && (
                                                                <RiArrowRightLine className="w-4" />
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>

                                                {item.change && (
                                                    <p className={`text-sm font-medium leading-none p-2 rounded-full tracking-tight border-[.5px] ${item.change > 0 ? 'border-green-500' : 'border-red-500'}`}>{item.change}%</p>
                                                )}
                                            </div>
                                        )
                                    }
                                </div>
                            ))}
                        </div>
                    </PlatformBlock>
                </div>
            </PlatformRow>
        </>
    );
} 