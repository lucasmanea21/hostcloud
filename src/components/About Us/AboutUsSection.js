import React,{useState} from 'react'
import '../../App.css'
import { ServicesP, ServicesTitle, ServicesTopline } from '../Home/ServicesSection/ServicesElements'
import * as Cp from './AboutUsComponents'

const AboutUsSection = ({topline, title,desc, history, cloud, network}) => {
    const [showFirst, setShowFirst] = useState(true)
    const [showSecond, setShowSecond] = useState(false)
    const [showThird, setShowThird] = useState(false)
    

    const showOne = () => {
        setShowFirst(true)
        setShowSecond(false)
        setShowThird(false)
    }

    const showTwo = () => {
        setShowFirst(false)
        setShowSecond(true)
        setShowThird(false)
    }

    const showThree = () => {
        setShowFirst(false)
        setShowSecond(false)
        setShowThird(true)
    }

    return (
        <Cp.AboutWrapper>
            <Cp.ContentWrapper>
                <Cp.ImageWrapper><img src='https://templatemo.com/templates/templatemo_541_host_cloud/assets/images/our-team.jpg' alt='company'/></Cp.ImageWrapper>
                <Cp.TextWrapper>
                    <Cp.InfoWrapper>
                        <ServicesTopline> {topline}</ServicesTopline>
                        <ServicesTitle>{title}</ServicesTitle>
                        <ServicesP>{desc}</ServicesP>
                    </Cp.InfoWrapper>
                    <Cp.FancyInfoWrapper>
                        <Cp.InfoSelector>
                            <Cp.InputsWrapper>
                                <input type='radio' value='1' name='radio' id='radio1' onClick={showOne}/>
                                <label for='radio1'>Our History </label>
                                
                               <input type='radio' value='2' name='radio' id='radio2' onClick={showTwo}/>
                               <label for='radio2'> Our Cloud </label>
                            
                                <input type='radio' value='3' name='radio' id='radio3' onClick={showThree}/>
                                <label for='radio3'>Our Network </label>
                            </Cp.InputsWrapper>
                                <Cp.FancyP1 value={showFirst}>{history}</Cp.FancyP1>
                                <Cp.FancyP2  value={showSecond}>{cloud} </Cp.FancyP2>
                                <Cp.FancyP3  value={showThird}>{network}</Cp.FancyP3>
              

                        </Cp.InfoSelector>
                    </Cp.FancyInfoWrapper>
                </Cp.TextWrapper>
            </Cp.ContentWrapper>
        </Cp.AboutWrapper>
    )
}

export default AboutUsSection
