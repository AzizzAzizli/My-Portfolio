import styled from 'styled-components'

import emailjs from '@emailjs/browser';

import image from "/me.jpg"

import { Header , Footer , TechnologyCard , ProjectCard , ThemeSwitcher , Label , Input , Textarea } from './components/Static/index'
import { technologiesData , projectsData } from './mock/index'
import { useGlobalStore } from './provider/povider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import UserImage from '../public/user.jpeg'

import { useCallback, useEffect, useRef, useState } from 'react'
import AOS from 'aos';



const App = () => {

  const [inputs, setInputs] = useState <{name:string,email:string,message:string}>({
    name: '',
    email: '',
    message: '',
  })

  const { theme } = useGlobalStore()


  //! UseEffect Aos Configuration 

  useEffect(() => {
      AOS.init({
          once: false,
      })
  }, [])

  window.onload = function() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth' 
    });
  };
  
  //! Dynamic Styles 

  const globalStyle = {
    backgroundColor: theme == "light" ? "#F5F5F5" : '#181818'
  };

  const aboutTitleColor = {
    color: theme == "light" ? "#181818" : '#d9d9d9'
  }

  const headTitleColor = {
    color: theme == "light" ? "#181818" : '#ccc'
  }
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setInputs((prevData) => ({
        ...prevData,
        [name]: value,
      }));
   
    },
    [setInputs]
  );
  const form:any = useRef();

  const sendEmail = (e:any) => {
    e.preventDefault();
    const values = Object.values(inputs)
   // console.log(values);
    if (values.some(value => value.trim()==="")) {
      toast.warning("Please fill the all fields!")
      return
    }


    emailjs
      .sendForm('service_icyq02o', 'template_7nqfm1k', form?.current, {
        publicKey: 'A0DNmS-7FXPMhmEPx',
      })
      .then(
        () => {
          // console.log('SUCCESS!');
          toast.success("Message sent successfully!");
          setInputs({ name:"",email:"",message:""})
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Message can't send! Please try again.");
        },
      );
  };


  return (
    <div style={globalStyle}>
      <Header />

        <Main className="content">
            <AboutMeBox id="about" className='about'>
                <AboutTitle data-aos="fade-right" className='about_title' style={aboutTitleColor}>
                    Hi 👋, <br></br>
                    <CyanText>My name is Aziz</CyanText> <br></br>
                    I build things for web
                </AboutTitle>

                <AboutImage
                    src={image}
                    alt="userImage"
                    data-aos="fade-left"
                    className='userImage'
                />
            </AboutMeBox>

            <Technologies id="techstack">
                <HeadTitle data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='head_title' style={headTitleColor}>
                  My Tech Stack
                </HeadTitle>

                <HeadDescription data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='head_desc'>
                  Technologies I’ve been working with recently
                </HeadDescription>

                <TechnologiesCardBody data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='TechnologiesCardBody'>
                    {
                      technologiesData.map((info,index) => (
                        <TechnologyCard data={info} key={index} />
                      ))
                    }
                </TechnologiesCardBody>
            </Technologies>

            <Projects id="projects">
                <HeadTitle data-aos="fade-up" data-aos-anchor-placement="top-bottom"  className='head_title' style={headTitleColor}>
                  Projects
                </HeadTitle>

                <HeadDescription data-aos="fade-up" data-aos-anchor-placement="top-bottom"  className='head_desc'>
                  Things I’ve built so far
                </HeadDescription>

                <ProjectBoxBody  className='ProjectBoxBody'>
                      {
                          projectsData.map((item,index) => (
                            <ProjectCard key={index} data={item} />
                          ))
                      }
                </ProjectBoxBody>
            </Projects>

            <Contact id='contact' >
                    <HeadTitle data-aos="fade-up" data-aos-anchor-placement="top-bottom"  className='head_title' style={headTitleColor}>
                     Contact
                    </HeadTitle>

                       <ContactForm  ref={form} onSubmit={sendEmail}>
            
                            <ContactItem>
                          <Label value={"Your Name"} forId={"name"} />
                          <Input type={"name"} id={"name"} name={"name"} value={inputs.name} placeholder={"Your Name"} onInputChange={handleInputChange}  />
                      </ContactItem>
            
                        <ContactItem>
                          <Label value={"Your Email"} forId={"email"} />
                          <Input type={"email"} id={"email"} name={"email"} value={inputs.email} placeholder={"Email"} onInputChange={handleInputChange}   />
                        </ContactItem>

                        <ContactItem >
                          <Label value={"Your Message"} forId={"message"} />
                          <Textarea  id={"message"} name={"message"} value={inputs.message} placeholder={"Message"} onInputChange={handleInputChange}   />
                        </ContactItem>

                        <FormBottom>
                          <SendButton type='submit' value="Send" >
                              Send
                          </SendButton>
                        </FormBottom>
                    </ContactForm>
            </Contact>
        </Main>

      <Footer />
      <ThemeSwitcher />
      <ToastContainer />
    </div>
  )
}

export default App

const Main = styled.main`
    display: flex;
    flex-direction: column;
    padding: 143.5px 230px 0px 177px;
    

    @media screen and (max-width: 1350px){
        .TechnologiesCardBody{
          grid-template-columns: repeat(4,1fr)
        }

        .ProjectBoxBody{
          grid-template-columns: repeat(2,1fr)
        }

        padding: 143.5px 70px 0px 70px;
    }

    @media screen and (max-width: 1200px){
        .about_title{
            font-size: 45px;
        }

        .userImage{
            width: 270px;
            height: 270px;
        }
    }

    @media screen and (max-width: 992px){
        .about{
            flex-direction: column;
            text-align: center;
            gap: 30px;
        }

        .TechnologiesCardBody{
          grid-template-columns: repeat(3,1fr)
        }
    }

    @media screen and (max-width: 850px){
        .ProjectBoxBody{
          grid-template-columns: repeat(1,1fr)
        }
    }

    @media screen and (max-width: 769px) {

      padding: 143.5px 40px 0px 40px;

        .head_title{
          font-size: 29px;
          text-align: center;
        }

        .head_desc{
            font-size: 20px;
            text-align: center;
        } 

        .TechnologiesCardBody div img{
            width: 80px;
            height: 80px;
        }
    }

    @media screen and (max-width: 580px) {
        .TechnologiesCardBody div img{
            width: 60px;
            height: 60px;
        }

        .about_title{
            font-size: 30px;
            line-height: 50px;
        }
    }

    @media screen and (max-width: 500px){
        .TechnologiesCardBody{
          grid-template-columns: repeat(2,1fr)
        }
    }

    @media screen and (max-width: 642px){
    }
`

//! About User  

const AboutMeBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 100px 0px 100px 0px;
`

const AboutTitle = styled.p`
    color: #d9d9d9;
    font-size: 58px;
    font-weight: bold;
    line-height: 70px;
`

const AboutImage = styled.img`
    width: 349px;
    height: 349px;
    border-radius: 50%;
    border: 7px solid #23A6F0;
    object-fit: cover;
`



//! Techonologies

const Technologies = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 0px;
`

const HeadTitle = styled.p`
    font-weight: bold;
    font-size: 48px;
    color: #ccc;
`

const HeadDescription = styled.p`
    font-style: regular;
    font-size: 32px;
    color: #a0a0a0;
    margin-top: 40px;
`

const TechnologiesCardBody = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 120px;
    margin-top: 100px;
`

const CyanText = styled.span`
  color: #2a9eec
`



//! Projects

const Projects = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 0px;
`

const ProjectBoxBody = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 35px;
    margin-top: 50px;
`

//! Contact

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 608px;
    width: 100%;
`

const ContactItem = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
`

const FormBottom = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`

const SendButton = styled.button`
    width: 128px;
    height: 48px;
    background-color: #333944;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-size: 17px;
    margin-right: -16px;
    cursor: pointer;
`
