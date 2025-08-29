'use client';

import Header from "@/components/Header";
import { PlatformBlockSize } from "@/components/PlatformBlock";
import PlatformBlock from "@/components/PlatformBlock";
import PlatformBlockContent from "@/components/PlatformBlockContent";
import PlatformBlockLabel from "@/components/PlatformBlockLabel";
import PlatformRow from "@/components/PlatformRow";

import Dropdown from "@/components/ui/Dropdown";
import { getCampaignOverview } from "@/hooks/getCampaignOverview";
import { RiAlertFill, RiArrowRightLine, RiArrowRightSLine, RiErrorWarningFill, RiFlashlightFill } from "@remixicon/react";
import { useEffect, useState } from "react";

const emergingOpportunities = [
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

const activationTriggers = [
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
]

export default function CampaignOverviewContent({ clientId, campaignId }: { clientId: string, campaignId: string }) {
    const [campaignOverviewItems, setCampaignOverviewItems] = useState<any[]>([]);
    const [valueCreationComparisonTraditional, setValueCreationComparisonTraditional] = useState<any>(null);
    const [valueCreationComparisonGybDriven, setValueCreationComparisonGybDriven] = useState<any>(null);
    const [revenueContributionTableItems, setRevenueContributionTableItems] = useState<any[]>([]);
    const [revenueContributionBlocksItems, setRevenueContributionBlocksItems] = useState<any[]>([]);
    const [velocityMetricsTimeToConversionItems, setVelocityMetricsTimeToConversionItems] = useState<any[]>([]);
    const [velocityMetricsEngagementDepthItems, setVelocityMetricsEngagementDepthItems] = useState<any[]>([]);
    const [activeAlertsItems, setActiveAlertsItems] = useState<any[]>([]);
    const [optimizationQueueTableItems, setOptimizationQueueTableItems] = useState<any[]>([]);      
    const [emergingOpportunitiesItems, setEmergingOpportunitiesItems] = useState<any[]>([]);
    const [activationTriggersItems, setActivationTriggersItems] = useState<any[]>([]);

    // Calculate maximum values for proportional bar heights
    const maxCac = Math.max(
        valueCreationComparisonTraditional?.cac ?? 0,
        valueCreationComparisonGybDriven?.cac ?? 0
    );
    const maxRoi = Math.max(
        valueCreationComparisonTraditional?.roi ?? 0,
        valueCreationComparisonGybDriven?.roi ?? 0
    );
    const maxConv = Math.max(
        valueCreationComparisonTraditional?.conv ?? 0,
        valueCreationComparisonGybDriven?.conv ?? 0
    );

    // Helper function to calculate bar height percentage
    const getBarHeight = (value: number, maxValue: number) => {
        if (maxValue === 0) return 0;
        return Math.min((value / maxValue) * 100, 100);
    };

    useEffect(() => {
        const fetchCampaignOverview = async () => {
            const campaignOverview = await getCampaignOverview(clientId);
            setCampaignOverviewItems(campaignOverview.campaignOverview.metrics);
            setValueCreationComparisonTraditional(campaignOverview.valueCreationComparison.comparison[0].metrics);
            setValueCreationComparisonGybDriven(campaignOverview.valueCreationComparison.comparison[1].metrics);
            setRevenueContributionTableItems([campaignOverview.revenueContribution.levels[0], campaignOverview.revenueContribution.levels[1], campaignOverview.revenueContribution.levels[2], campaignOverview.revenueContribution.levels[3]]);
            setRevenueContributionBlocksItems([campaignOverview.revenueContribution.levels[4], campaignOverview.revenueContribution.levels[5]]);
            setVelocityMetricsTimeToConversionItems(campaignOverview.velocityMetrics.sections[0].metrics);
            setVelocityMetricsEngagementDepthItems(campaignOverview.velocityMetrics.sections[1].metrics);
            setActiveAlertsItems(campaignOverview.riskOptimizationRadar.sections[0].alerts);
            setOptimizationQueueTableItems(campaignOverview.riskOptimizationRadar.sections[1].actions);
            setEmergingOpportunitiesItems(campaignOverview.emergingSignals.sections[0].opportunities);
            setActivationTriggersItems(campaignOverview.emergingSignals.sections[1].triggers);
            console.log(campaignOverview);
        }
        fetchCampaignOverview();
    }, []);

    return (
        <>
            <Header title="Campaign Overview" />

            <PlatformRow>
                <PlatformBlock size={PlatformBlockSize.FULL}>
                    <Dropdown iconVisible={false} options={[
                        {
                            label: "Enterprise Lead Generation Q4",
                            value: "enterprise-lead-generation-q4",
                        },
                        {
                            label: "Enterprise Lead Generation Q3",
                            value: "enterprise-lead-generation-q3",
                        },
                        {
                            label: "Enterprise Lead Generation Q2",
                            value: "enterprise-lead-generation-q2",
                        },
                        {
                            label: "Enterprise Lead Generation Q1",
                            value: "enterprise-lead-generation-q1",
                        },
                    ]} />

                    <div className="flex w-full gap-2">
                        {campaignOverviewItems.map((item, index) => (
                            <PlatformBlockContent key={`${item.title}-${item.label}-${index}`}>
                                <p className="text-sm font-medium tracking-tight opacity-70 mb-4">{item.label}</p>

                                <div className="flex items-center justify-between gap-2">
                                    <p className="text-3xl font-medium tracking-tight">{item.value}</p>
                                </div>
                            </PlatformBlockContent>
                        ))}
                    </div>                
                 </PlatformBlock>
            </PlatformRow>

            <PlatformRow>
                <PlatformBlock size={PlatformBlockSize.SMALL_MEDIUM} divider>
                    <PlatformBlockLabel>
                        Traditional vs. GYB-Driven Value Creation
                    </PlatformBlockLabel>

                    <PlatformBlockContent>
                        <div className="flex items-end justify-between gap-12">
                            <div className="flex w-full flex-col justify-between items-center">
                                <p className="text-sm font-medium tracking-tight opacity-70 mb-8">CAC</p>
                                <div className="flex w-full items-end gap-2">
                                    <div className="w-full h-[200px] gap-2 items-center justify-end flex flex-col">
                                        <div 
                                            className={`w-full rounded-2xl bg-branding-primary`}
                                            style={{ height: `${getBarHeight(valueCreationComparisonTraditional?.cac ?? 0, maxCac)}%` }}
                                        ></div>
                                        <span className="text-center text-sm font-medium tracking-tight">{valueCreationComparisonTraditional?.cac ?? "0"}$</span>
                                    </div>

                                    <div className="w-full h-[200px] gap-2 items-center justify-end flex flex-col">
                                        <div 
                                            className={`w-full rounded-2xl bg-branding-secondary`}
                                            style={{ height: `${getBarHeight(valueCreationComparisonGybDriven?.cac ?? 0, maxCac)}%` }}
                                        ></div>
                                        <span className="text-center text-sm font-medium tracking-tight">{valueCreationComparisonGybDriven?.cac ?? "0"}$</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full flex-col justify-between items-center">
                                <p className="text-sm font-medium tracking-tight opacity-70 mb-8">ROI</p>
                                <div className="flex w-full items-end gap-2">
                                    <div className="w-full h-[200px] gap-2 items-center justify-end flex flex-col">
                                        <div 
                                            className={`w-full rounded-2xl bg-branding-primary`}
                                            style={{ height: `${getBarHeight(valueCreationComparisonTraditional?.roi ?? 0, maxRoi)}%` }}
                                        ></div>
                                        <span className="text-center text-sm font-medium tracking-tight">{valueCreationComparisonTraditional?.roi ?? "0"}x</span>
                                    </div>

                                    <div className="w-full h-[200px] gap-2 items-center justify-end flex flex-col">
                                        <div 
                                            className={`w-full rounded-2xl bg-branding-secondary`}
                                            style={{ height: `${getBarHeight(valueCreationComparisonGybDriven?.roi ?? 0, maxRoi)}%` }}
                                        ></div>
                                        <span className="text-center text-sm font-medium tracking-tight">{valueCreationComparisonGybDriven?.roi ?? "0"}x</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full flex-col justify-between items-center">
                                <p className="text-sm font-medium tracking-tight opacity-70 mb-8">Conv</p>
                                <div className="flex w-full items-end gap-2">
                                    <div className="w-full h-[200px] gap-2 items-center justify-end flex flex-col">
                                        <div 
                                            className={`w-full rounded-2xl bg-branding-primary`}
                                            style={{ height: `${getBarHeight(valueCreationComparisonTraditional?.conv ?? 0, maxConv)}%` }}
                                        ></div>
                                        <span className="text-center text-sm font-medium tracking-tight">{valueCreationComparisonTraditional?.conv ?? "0"}%</span>
                                    </div>

                                    <div className="w-full h-[200px] gap-2 items-center justify-end flex flex-col">
                                        <div 
                                            className={`w-full rounded-2xl bg-branding-secondary`}
                                            style={{ height: `${getBarHeight(valueCreationComparisonGybDriven?.conv ?? 0, maxConv)}%` }}
                                        ></div>
                                        <span className="text-center text-sm font-medium tracking-tight">{valueCreationComparisonGybDriven?.conv ?? "0"}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </PlatformBlockContent>
                    <div className="flex items-center gap-4 w-full justify-end mt-6">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-[2px] rounded-lg bg-branding-primary"></div>
                                <p className="text-xs font-medium tracking-tight">Traditional</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="w-4 h-[2px] rounded-lg bg-branding-secondary"></div>
                                <p className="text-xs font-medium tracking-tight">GYB-Driven</p>
                            </div>
                        </div>
                </PlatformBlock>

                <PlatformBlock size={PlatformBlockSize.SMALL_MEDIUM}>
                    <PlatformBlockLabel>
                        Revenue Contribution by Depth
                    </PlatformBlockLabel>

                    <PlatformBlockContent>
                        {revenueContributionTableItems.map((item) => (
                            <div key={item.level} className="flex py-4 border-b-[.5px] border-white/10 last:border-none first:pt-0 last:pb-0 items-center justify-between">
                                <p className="text-sm font-medium tracking-tight opacity-70">{item.level}</p>
                                <p className="text-sm font-medium tracking-tight">{item.value}</p>
                            </div>
                        ))}
                    </PlatformBlockContent>
                    <div className="flex gap-2 mt-2">
                        {revenueContributionBlocksItems.map((item) => (
                            <PlatformBlockContent className="!mt-0" key={item.level}>
                                <p className="text-sm font-medium tracking-tight opacity-70">{item.level}</p>
                                <p className="text-2xl mt-3 font-medium tracking-tight">{item.value}</p>
                            </PlatformBlockContent>
                        ))}
                    </div>
                </PlatformBlock>
            </PlatformRow>

            <PlatformRow>
                <PlatformBlock size={PlatformBlockSize.MEDIUM} divider>
                    <PlatformBlockLabel>
                        Pattern Detection
                    </PlatformBlockLabel>

                    <div className="flex gap-2 mt-6 w-full">
                        <div className="flex flex-col w-full">
                            <p className="text-sm font-medium tracking-tight opacity-70 mb-4">Emerging Opportunities</p>

                        <div className="flex flex-col gap-2">
                            {emergingOpportunitiesItems.map((item) => (
                                <div className={`flex rounded-2xl p-4 flex-col gap-2 bg-brand-secondary-transparent`} key={item.title}>
                                    <div className="flex items-center gap-2">
                                        <RiFlashlightFill className="w-5" />
                                        <p className="text-sm font-medium tracking-tight">{item.title}</p>
                                    </div>
                                    <p className="text-sm font-medium opacity-70 tracking-tight">Possible impact: {item.change}</p>
                                </div>
                            ))}
                            </div>
                        </div>

                        <div className="flex flex-col w-full">
                            <p className="text-sm font-medium tracking-tight opacity-70 mb-4">Activation Triggers</p>

                        <div className="flex flex-col gap-2">
                            {activationTriggersItems.map((item, index) => (
                                <div className={`flex rounded-2xl p-4 flex-col gap-2 bg-brand-secondary-transparent`} key={`${item.title}-${index}`}>
                                    <div className="flex items-center gap-2">
                                        <RiFlashlightFill className="w-5" />
                                            {
                                                item.journey.map((journeyItem: any, journeyIndex: number) => (
                                                    <div key={`${journeyItem}-${journeyIndex}`} className="flex items-center gap-2">
                                                        <p className="text-sm font-medium tracking-tight">{journeyItem}</p>

                                                        {
                                                            journeyIndex !== item.journey.length - 1 && (
                                                                <RiArrowRightLine className="w-5" />
                                                            )
                                                        }
                                                    </div>
                                                ))
                                            }
                                    </div>

                                    <p className="text-sm font-medium tracking-tight opacity-70">Conversion rate: {item.metrics.convRate}.<br/>Current value: {item.metrics.value}</p>
                                    </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </PlatformBlock>

                <PlatformBlock size={PlatformBlockSize.SMALL} divider>
                    <PlatformBlockLabel>
                        Velocity Metrics
                    </PlatformBlockLabel>

                    <div className="mt-6">
                        <p className="text-sm font-medium tracking-tight opacity-70 mb-4">Time to Conversion</p>
                        <PlatformBlockContent className="!mt-0">
                            {velocityMetricsTimeToConversionItems.map((item) => (
                                <div key={item.label} className="flex py-4 border-b-[.5px] border-white/10 last:border-none first:pt-0 last:pb-0 items-center justify-between">
                                    <p className="text-sm font-medium tracking-tight opacity-70">{item.label}</p>
                                    <p className="text-sm font-medium tracking-tight">{item.value}</p>
                                </div>
                            ))}
                        </PlatformBlockContent>
                    </div>

                    <div className="mt-6">
                        <p className="text-sm font-medium tracking-tight opacity-70 mb-4">Engagement Depth</p>
                        <PlatformBlockContent className="!mt-0">
                            {velocityMetricsEngagementDepthItems.map((item) => (
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
                <PlatformBlock size={PlatformBlockSize.MEDIUM} divider>
                    <PlatformBlockLabel>
                        Active Alerts
                    </PlatformBlockLabel>

                    <div className="grid grid-cols-2 mt-6 flex-wrap gap-2">
                        {activeAlertsItems.map((item, index) => (
                            <div className={`flex w-full rounded-2xl p-4 flex-col gap-2 bg-brand-error-transparent`} key={`${item.title}-${index}`}>
                                <div className="flex items-center gap-2">
                                    <RiAlertFill className="w-5" />
                                    <p className="text-sm font-medium tracking-tight">{item.title}</p>
                                </div>
                                <p className="text-sm font-medium opacity-70 tracking-tight">Fix: {item.details.fix}.<br/><span className="!opacity-100">Impact: {item.details.impact}</span></p>
                            </div>
                        ))}
                    </div>
                </PlatformBlock>
                <PlatformBlock size={PlatformBlockSize.SMALL} divider>
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