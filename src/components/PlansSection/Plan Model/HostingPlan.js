import React from 'react'
import { BtnWrapper } from '../../Navbar/NavbarComponents'
import * as Cp from './PlanElements'

const HostingPlan = ({title,primary, price, payment, desc,feature, buttonText}) => {
    const features = feature.map((item,key) => (
        <Cp.PlanFeatures>
                   <ul>
                     <li><Cp.Icon /> {item}</li>
                   </ul>
        </Cp.PlanFeatures>
        
    ))
    return (
        <Cp.PlanDiv>
        <Cp.PlanWrapper>
           <Cp.PlanContent>
               <Cp.PlanTitle>{title}</Cp.PlanTitle>
               <Cp.PlanImage primary={primary}>
                   <Cp.PlanPrice>${price}</Cp.PlanPrice>
                   <Cp.PlanPayment>{payment}</Cp.PlanPayment>
               </Cp.PlanImage>
               <Cp.PlanDesc>{desc}</Cp.PlanDesc>
                {features}
               <BtnWrapper><Cp.Button primary={primary}>{buttonText}</Cp.Button></BtnWrapper>
           </Cp.PlanContent>
        </Cp.PlanWrapper>
        </Cp.PlanDiv>
    )
}

export default HostingPlan
