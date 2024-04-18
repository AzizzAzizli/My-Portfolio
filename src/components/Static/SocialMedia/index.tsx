// import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import { DarkGithub , Linkedln } from "../../Icons"

const SocialMedia = () => {
    // const navigate = useNavigate()
    return (
        <Wrapper>
            <Github onClick={() => window.open("https://github.com/AzizzAzizli")}>
                <DarkGithub/>
            </Github>

            <LinkedlnBox onClick={() => window.open("https://www.linkedin.com/in/aziz-azizli-3ba24a28a/")}>
                <Linkedln />
            </LinkedlnBox>
        </Wrapper>
    )
}

export default SocialMedia

const Wrapper = styled.div`
    display: flex;
    gap: 18px;
`

const Github = styled.div`
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
    }
`

const LinkedlnBox = styled.div`
    cursor: pointer;
    
    &:hover{
        transform: scale(1.1);
    }
`