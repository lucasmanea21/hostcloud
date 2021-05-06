import styled from 'styled-components'

export const SectionWrapper = styled.div`
    display:flex;
    justify-content: center;
    /* align-items:center; */
    flex-direction: column;
    padding: 30px 0 40px 0;
    background-color: #f7f7f7;
    width: 100%;

`
export const TrustedTitle = styled.p`
    font-weight: 600;
    font-size: 1.2rem;
    text-transform: uppercase;
    text-align:center;
`
export const TrustedCompanies = styled.div`
    padding: 20px 0;
    display:flex;
    justify-content:center;
    align-items:center;

    img {
        /* margin-right: 20%; */
    }
`
export const TrustedCompany = styled.div` 
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;


    img {
        display: flex;
    }

`