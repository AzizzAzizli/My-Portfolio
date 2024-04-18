import styled from 'styled-components'

import { SocialMedia } from '../index'
import { GrayLogo } from '../../Icons/index'

const Footer = () => {
  return (
    <Wrapper className='footer'>
        <Left>
            <GrayLogo />
        </Left>

        <Contact className='contact'>
            <ContactNumber href='tel:050-729-13-45'>
               050-729-13-45
            </ContactNumber>

            <ContactEmail href="mailto:azizliaziz025@gmail.com">
              azizliaziz025@gmail.com
            </ContactEmail>
            
            <SocialMedia />
        </Contact>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 41px 230px 41px 177px;

    @media screen and (max-width: 1150px){
        padding: 41px 130px 41px 77px;
    }

    @media screen and (max-width: 900px){
        flex-direction: column;
        gap: 40px;
        padding: 41px 50px 41px 50px;
    }

    @media screen and (max-width: 645px){
        .contact{
            flex-direction: column;
        }
    }
`

const Left = styled.div`
    cursor: pointer;
`

const Contact = styled.div`
    display: flex;
    align-items: center;
    gap: 35px;
`

const ContactNumber = styled.a`
    color: #a7a7a7;
    font-size: 18px;
    font-weight: regular;
    text-decoration: none;
    
    &:hover{
        text-decoration: underline;
    }
`
const ContactEmail = styled.a`
    color: #a7a7a7;
    font-size: 18px;
    font-weight: regular;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`