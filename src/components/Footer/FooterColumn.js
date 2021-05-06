import React from 'react'
import { ColContent, ColTitle, FooterCol } from './FooterElements'

const FooterColumn = ({title, content}) => {
    return (
        <FooterCol >
            <ColTitle>{title}</ColTitle>
            <ColContent>
                {content}
            </ColContent>
        </FooterCol>
    )
}

export default FooterColumn
