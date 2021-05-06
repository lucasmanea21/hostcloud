import React from 'react'
import HostingPlan from './Plan Model/HostingPlan'
import * as Cp from './HostingPlansElements'
import {plans} from './Data'

const HostingPlans = () => {
    const filledPlan = plans.map((item,key) => (
        <HostingPlan title={item.title}
        price={item.price}
        desc={item.desc}
        feature = {item.features.map((child,key) => (
           child 
        ))}
        buttonText={item.buttonText}
        payment= {item.payment}
        primary={item.primary}
        key={key}
        />
    ))
    return (
       
        <Cp.HostingBgSection>
            <Cp.HostingContent>
            <Cp.HostingTitle>Cloud Hosting Plans</Cp.HostingTitle>
            <Cp.HostingDesc>Lorem ipsum dolor amet taxidermy sriracha cardigan salvia actually vice migas enamel pin sustainable carry scenester lomo hot chicken farm table actually kinfolk.</Cp.HostingDesc>
            </Cp.HostingContent>
           <Cp.PlansWrapper>
            {filledPlan}
            </Cp.PlansWrapper>
        </Cp.HostingBgSection>

    )
}

export default HostingPlans
