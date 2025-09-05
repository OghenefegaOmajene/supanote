import React from 'react'
import './Pricing.css'
import Capsule from '../../components/Capsule/Capsule'
import { LuTag } from "react-icons/lu";

const Pricing = () => {
  return (
    <div className='pricing'>
        <Capsule title="Pricing" Icon={LuTag } />
        <div className='howitworksHead'>
            <p className='howitworksHead1'>Start Smart. Scale Fast.</p>
            <p className='howitworksHead2'>Whether you're a solo founder or growing team, there's a plan to help you stay productive and focused.</p>
        </div>

    </div>
  )
}

export default Pricing