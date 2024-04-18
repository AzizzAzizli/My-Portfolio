import { useGlobalStore } from "../../../provider/povider";
import AOS from 'aos'
import styled from "styled-components"
import { FC, useEffect } from 'react';

import { Github, Switch , BlackSwitch , BlackGithub } from "../../Icons"
interface projectTypes {
  image: string;
  name: string;
  technologies: string;
  githubLink: string;
  vercelLink: string;
}

const ProjectCard: FC<{ data: projectTypes }>  = ({ data }) => {
  const { theme } = useGlobalStore()

  const customBottomColor = {
    backgroundColor: theme !== "light" ? "#363636" : '#fff'
  }

  const customProjectName = {
    color: theme == "light" ? "#000" : '#c7c5c5'
  }

  const customProjectTechnologies = {
    color: theme == "light" ? "#41456d" : '#ccc'
  }

  const customSwitchLink = {
    color: theme == "light" ? "#000" : '#fff'
  }

  useEffect(() => {
    AOS.init({
        once: false,
    })
}, [])

  return (
    <Box data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom">
        <ProjectImg
            src={data.image}
        />

        <Bottom style={customBottomColor}>
            <Top>
              <ProjectName style={customProjectName}>
                  {
                    data.name
                  }
              </ProjectName>

              <ProjectTechnologies style={customProjectTechnologies}>
                Tech stack :
                <span style={{fontSize:"14px"}}>
                  {
                    data.technologies
                  } 
                </span>
              </ProjectTechnologies>
            </Top>

            <ProjectLinksBody>
                <DemoLink>
                  {theme == "light" ? <BlackSwitch/> : <Switch /> } 

                  <SwitchLink style={customSwitchLink} onClick={() => window.open(data.vercelLink, "_blank")}>
                      Live Preview
                  </SwitchLink>
                </DemoLink>

                <GithubLink>
                    {theme == "light" ? <BlackGithub/> : <Github /> }

                    <SwitchLink style={customSwitchLink} onClick={() => window.open(data.githubLink, "_blank")}>
                        Live Preview
                    </SwitchLink>
                </GithubLink>
            </ProjectLinksBody>
        </Bottom>
    </Box>
  )
}

export default ProjectCard

const Box = styled.div`
    max-width: 375px;
    width: 100%;
    height: 500px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 580px){
        max-width: 320px;

        img{
          width: 320px;
          height: 180px
        }
    }
`

const ProjectImg = styled.img`
    width: 375px;
    height: 250px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
`

const Bottom = styled.div`
    background: #363636;
    padding: 0px 28px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    height: 100%;
    max-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProjectName = styled.p`
    font-size: 28px;
    font-weight: medium;
    color: #c7c5c5;
`

const ProjectTechnologies = styled.p`
    font-size: 16px;
    font-weight: regular;
    color: #ccc;
`

const ProjectLinksBody = styled.div`
    display: flex;
    justify-content: space-between;
`

const DemoLink = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const SwitchLink = styled.p`
    font-size: 14px;
    text-decoration: underline;
    color: #fff;
    cursor: pointer;
`

const GithubLink = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Top = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px
`