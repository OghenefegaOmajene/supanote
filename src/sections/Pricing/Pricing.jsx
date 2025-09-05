import React from 'react'
import './Pricing.css'
import Capsule from '../../components/Capsule/Capsule'
import { LuTag } from "react-icons/lu";
import PricingCard from '../../components/PricingCard/PricingCard';

const Pricing = () => {
    const starterFeatures = [
    'Up to 100 notes/tasks/month',
    'Basic AI suggestions',
    'Daily summary',
    '1 workspace'
  ];

  const proFeatures = [
    'Unlimited notes & tasks',
    'Advanced AI features',
    'Goal tracking & reminders',
    'Project timelines',
    '3 workspaces'
  ];

  const teamFeatures = [
    'Everything in Pro',
    'Team collaboration',
    'Shared notes/tasks',
    'Admin & permissions',
    'Slack/Calendar integration'
  ];

  return (
    <div className='pricing'>
        
        <div className='howitworksHead'>
            <Capsule title="Pricing" Icon={LuTag } />
            <p className='howitworksHead1'>Start Smart. Scale Fast.</p>
            <p className='howitworksHead2'>Whether you're a solo founder or growing team, there's a plan to help you stay productive and focused.</p>
        </div>

        <div className="pricingCards">
            <PricingCard
                title="Starter"
                subtitle="Perfect for early-stage founders"
                price="Free"
                features={starterFeatures}
                buttonText="Get started"
                buttonColor="rgba(31, 31, 31, 1)"
                buttonTextColor="#ffffff"
            />
            
            <PricingCard
                title="Pro"
                subtitle="Built for serious solo builders"
                price="$12"
                priceSubtext="/month"
                features={proFeatures}
                buttonText="Get started"
                buttonColor="#ffffff"
                buttonTextColor="rgba(15, 15, 15, 1)"
                isPopular={true}
            />

            <PricingCard
                title="Team"
                subtitle="For fast-moving teams"
                price="$29"
                priceSubtext="/month"
                features={teamFeatures}
                buttonText="Contact Us"
                buttonColor="#ffffff"
                buttonTextColor="rgba(15, 15, 15, 1)"
            />
        </div>
    </div>
  )
}

export default Pricing