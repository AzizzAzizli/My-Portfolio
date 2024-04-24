import styled from 'styled-components';

import { PinkLogo , BlackMenu , WhiteMenu } from '../../Icons/index'
import { navbarLinks } from '../../../mock/index'
import { useGlobalStore } from '../../../provider/povider';
import { useState } from 'react';

const Header = () => {
  const [isMenu,setIsMenu] = useState(false)
  const { theme } = useGlobalStore()

  const handleMenu = () => {
      setIsMenu(!isMenu)
  }

  const color = {
    color: theme == "light" ? "#181818" : '#F5F5F5'
  }

  const customWrapper = {
    backgroundColor: theme !== "light" ? "rgb(24, 24, 24)" : 'rgb(245, 245, 245)'
  }

  const mobile_menu = {
    left: isMenu ? "0%" : "-200%"
  }

  const downloadCvButtonStyle = {
    border: theme !== "light" ? "1px solid  #98979c": "1px solid  #000",
    color: theme !== "light" ? "#fff" : "#000"
  }

  return (
    <Wrapper style={customWrapper}>
        <Left href="#">
          <PinkLogo />
        </Left>

        <Right>
            <List className='list'>
                  {
                      navbarLinks.map((item) => (
                          <Item>
                              <Link style={color} href={item.hash}>
                                    {
                                      item.name
                                    }
                              </Link>
                          </Item>
                      ))
                  }
                  <Item>
                    <DownloadCvButton style={downloadCvButtonStyle} href="/CV.pdf" download>
                          Download CV
                    </DownloadCvButton>
                  </Item>
            </List>

            <Menu onClick={handleMenu} className='menu'>
                  { theme == "light" ? <BlackMenu /> : <WhiteMenu /> }
            </Menu>
        </Right>

        {
            <MobileMenu style={mobile_menu}>
                <List className='list2'>
                      {
                          navbarLinks.map((item,index) => (
                              <Item key={index}>
                                  <Link style={color} onClick={() => setIsMenu(!isMenu)} href={item.hash}>
                                        {
                                          item.name
                                        }
                                  </Link>
                              </Item>
                          ))
                      }
                      <Item>
                        <DownloadCvButton style={downloadCvButtonStyle} onClick={() => window.open("https://drive.google.com/file/d/1mnZp3G_oCKxybT3e8k9KA7Mrmcs8y1RR/view", "_blank")} href="">
                              Download CV
                        </DownloadCvButton>
                      </Item>
                </List>

                <CloseButton onClick={() => setIsMenu(!isMenu)}>
                    X
                </CloseButton>
            </MobileMenu> 
        }
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 22px 0px 22px 0px;
    position: fixed;
    width: 100vw;
    z-index: 5;

    @media screen and (max-width: 992px){
        .menu{
          display: flex;
        }

        .list{
          display: none;
        }

        .list2{
          display: flex !important;
          flex-direction: column;
          gap: 30px;
          align-items: flex-start;
        }

        .list2 li a{
            color: black !important;
        }
    }
`

const Menu = styled.div`
    display: none;
`

const Left = styled.a`
    text-decoration: none;
`

const Right = styled.div`

`

const List = styled.ul`
    display: flex;
    align-items: center;
    gap: 50px;
`

const Item = styled.li`
    &:hover{
      transform: scale(1.1)
    }
`

const Link = styled.a`
    cursor: pointer;
    font-size: 20px;
    color: #a7a7a7;
    text-decoration: none;
`

const MobileMenu = styled.div`
    top:0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    position: absolute;
    transition: .5s;
    padding: 20px 0px 20px 20px;
    display: flex;
    justify-content: space-between;
`

const CloseButton = styled.button`
    position: absolute;
    right: 40px;
    border: 1px solid black;
    background: #fff;
    border-radius: 50%;
    width: 30px;
    height: 30px;
`

const DownloadCvButton = styled.a`
    background-color: transparent;
    border-radius: 15px;
    padding: 10px 20px;
    cursor: pointer;
    text-decoration: none;

    &:hover{
      transform: scale(1.2)
    }
`