import React from 'react'
import * as Cp from './FooterElements'
import {data} from './data'
import FooterColumn from './FooterColumn'


const Footer = () => {
    const footerColumn = data.map((item,index) => (
        <FooterColumn
        content = {item.content.map((child, key) =>  (<Cp.ColContent to='/'>{child}</Cp.ColContent>))}
        title= {item.title} />
          
    ))
    return (
        <Cp.FooterWrapper>
            <Cp.FooterContent>
                <Cp.FooterColumns>
                {footerColumn}
                </Cp.FooterColumns>
                <Cp.CopyrightWrapper><p>Copyright © 2021 Cloud Hosting Company - Designed by TemplateMo <br /> Coded by Lucas Manea</p></Cp.CopyrightWrapper>
            </Cp.FooterContent>
        </Cp.FooterWrapper>
    )
}

export default Footer
