'use client';

import Header from "@/components/Header";
import { PlatformBlockSize } from "@/components/PlatformBlock";
import PlatformBlock from "@/components/PlatformBlock";
import PlatformBlockContent from "@/components/PlatformBlockContent";
import PlatformBlockLabel from "@/components/PlatformBlockLabel";
import PlatformRow from "@/components/PlatformRow";

import Dropdown from "@/components/ui/Dropdown";
import { RiAlertFill, RiErrorWarningFill, RiFlashlightFill } from "@remixicon/react";

const campaignOverviewItems = [
    {
        title: "Status",
        value: "Active",
        label: "48/95",
    },
    {
        title: "Total Spend",
        value: "$843.290",
    },
    {
        title: "Attributed Revenue",
        value: "$4.2M",
    },
    {
        title: "Intelligence-Driven ROI",
        value: "4.98x",
    },
]

const traditionalVsGybDrivenValueCreation = [
    {
        title: "CAC",
        symbol: "$",
        max: 1000,
        bars: [
            {
                label: "traditional",
                value: 892,
            },
            {
                label: "gyb-driven",
                value: 412,
            }
        ]
    },
    {
        title: "Conv.",
        symbol: "%",
        max: 5,
        bars: [
            {
                label: "traditional",
                value: 2.1,
            },
            {
                label: "gyb-driven",
                value: 4.8,
            }
        ]
    },
    {
        title: "ROI",
        symbol: "x",
        max: 5,
        bars: [
            {
                label: "traditional",
                value: 2.2,
            },
            {
                label: "gyb-driven",
                value: 4.98,
            }
        ]
    },
]

const revenueContributionTable = [
    {
        label: "Level 1 (Surface)",
        value: "$820K"
    },
    {
        label: "Level 2 (Path)",
        value: "$1.2M"
    },
    {
        label: "Level 3 (Behavorial)",
        value: "$1.5M"
    },
    {
        label: "Level 4 (Predictive)",
        value: "$3.5M"
    }
]

const revenueContributionBlocks = [
    {
        label: "Hidden Value Captured",
        value: "$2.2M"
    },
    {
        label: "Optimization Potential",
        value: "+$840K"
    },
]

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

const timeToConversionTable = [
    {
        label: "Before Intelligence",
        value: "42 days"
    },
    {
        label: "After Intelligence",
        value: "28 days"
    },
    {
        label: "Accelaration Impact",
        value: "+920K"
    }
]

const engagementDepthTable = [
    {
        label: "Avg. Touchpoints",
        value: "8.4"
    },
    {
        label: "Key Decision Point",
        value: "Touch 4"
    },
    {   
        label: "Drop-Off Risk Zone",
        value: "Touch 6-7"
    },
]

const activeAlerts = [
    {
        icon: <RiErrorWarningFill className="w-5" />,
        background: "bg-brand-error-transparent",
        title: "Strong Demo Growth",
        text: "GYB shows that Enterprise Demo Requests have increased by 32%, indicating strong interest from potential clients."
    },
    {
        icon: <RiErrorWarningFill className="w-5" />,
        background: "bg-brand-error-transparent",
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

export default function CampaignOverviewContent({ clientId, campaignId }: { clientId: string, campaignId: string }) {
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
                        {campaignOverviewItems.map((item) => (
                            <PlatformBlockContent key={item.title}>
                                <p className="text-sm font-medium tracking-tight opacity-70 mb-4">{item.title}</p>

                                <div className="flex items-center justify-between gap-2">
                                    <p className="text-3xl font-medium tracking-tight">{item.value}</p>
                                    {item.label && (
                                        <p className="text-sm font-medium leading-none p-2 rounded-full tracking-tight border-[.5px] border-branding-primary">{item.label}</p>
                                    )}
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
                            {traditionalVsGybDrivenValueCreation.map((item, index) => (
                                <div key={item.title} className="flex w-full flex-col justify-between items-center">
                                    <p className="text-sm font-medium tracking-tight opacity-70 mb-8">{item.title}</p>
                                    <div className="flex w-full items-end gap-2">
                                        {item.bars.map((bar, i) => (
                                            <div key={bar.label} className="w-full h-[200px] gap-2 items-center justify-end flex flex-col">
                                                <div className={`w-full rounded-2xl ${i === 0 ? "bg-branding-primary" : "bg-branding-secondary"}`} style={{ height: `${bar.value / item.max * 100}%` }}></div>
                                                <span className="text-center text-sm font-medium tracking-tight">{bar.value}{item.symbol}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
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
                        {revenueContributionTable.map((item) => (
                            <div key={item.label} className="flex py-4 border-b-[.5px] border-white/10 last:border-none first:pt-0 last:pb-0 items-center justify-between">
                                <p className="text-sm font-medium tracking-tight opacity-70">{item.label}</p>
                                <p className="text-sm font-medium tracking-tight">{item.value}</p>
                            </div>
                        ))}
                    </PlatformBlockContent>
                    <div className="flex gap-2 mt-2">
                        {revenueContributionBlocks.map((item) => (
                            <PlatformBlockContent className="!mt-0" key={item.label}>
                                <p className="text-sm font-medium tracking-tight opacity-70">{item.label}</p>
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

                    <div className="flex gap-2 mt-6">
                        <div className="flex flex-col">
                            <p className="text-sm font-medium tracking-tight opacity-70 mb-4">Emerging Opportunities</p>

                        <div className="flex flex-col gap-2">
                            {emergingOpportunities.map((item) => (
                                <div className={`flex rounded-2xl p-4 flex-col gap-2 ${item.background}`} key={item.title}>
                                    <div className="flex items-center gap-2">
                                        {item.icon}
                                        <p className="text-sm font-medium tracking-tight">{item.title}</p>
                                    </div>
                                    <p className="text-sm font-medium opacity-70 tracking-tight">{item.text}</p>
                                </div>
                            ))}
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-sm font-medium tracking-tight opacity-70 mb-4">Activation Triggers</p>

                        <div className="flex flex-col gap-2">
                            {activationTriggers.map((item) => (
                                <div className={`flex rounded-2xl p-4 flex-col gap-2 ${item.background}`} key={item.title}>
                                    <div className="flex items-center gap-2">
                                        {item.icon}
                                        <p className="text-sm font-medium tracking-tight">{item.title}</p>
                                    </div>
                                    <p className="text-sm font-medium opacity-70 tracking-tight">{item.text}</p>
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
                            {timeToConversionTable.map((item) => (
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
                            {engagementDepthTable.map((item) => (
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
                        {activeAlerts.map((item) => (
                            <div className={`flex w-full rounded-2xl p-4 flex-col gap-2 ${item.background}`} key={item.title}>
                                <div className="flex items-center gap-2">
                                    {item.icon}
                                    <p className="text-sm font-medium tracking-tight">{item.title}</p>
                                </div>
                                <p className="text-sm font-medium opacity-70 tracking-tight">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </PlatformBlock>
                <PlatformBlock size={PlatformBlockSize.SMALL} divider>
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