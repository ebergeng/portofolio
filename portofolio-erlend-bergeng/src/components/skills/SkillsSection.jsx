import styled from 'styled-components';
import bootstrapPng from '../../assets/bootstrap.png';
import cssPng from '../../assets/css.png';
import jsPng from '../../assets/javascript.png';
import pythonPng from '../../assets/python.png';
import reactPng from '../../assets/react.png';
import htmlPng from '../../assets/html.png';
import styledPng from '../../assets/styled-components.png';
import gitPng from '../../assets/Git-Icon.png';
import gitHubPng from '../../assets/github-mark.png';
import flaskPng from '../../assets/flask.png';




const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;

`

const SkillsContainer = styled.section`
  // your styles here
  width: 90%;
  display: flex;
  box-shadow: 0px 3px 6px #0000001c;
  padding: 10px;
  background-color: #DFDFDF;

`;


const Image = styled.img`
    width: 100%;
    height: 65px;
    max-width: 65px;
`


const TextSection = styled.div`
padding: 5px;
div {
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
}

`

const SkillsSection = () => {
  return (
    <Container>
            <SkillsContainer>
      <TextSection>
        <h2></h2>
        <div>
        <Image  src={jsPng} alt='javascript'/>
        <Image  src={htmlPng} alt='html'/>
        <Image  src={cssPng} alt='css'/>
        <Image  src={reactPng} alt='react'/>
        <Image  src={bootstrapPng} alt='bootstrap'/>
        <Image  src={styledPng} alt='styled-components'/>
        <Image  src={pythonPng} alt='python'/>
        <Image  src={gitPng} alt='git'/>
        <Image  src={gitHubPng} alt='github'/>
        <Image  src={flaskPng} alt='flask'/>


        </div>

      </TextSection>
    </SkillsContainer>

    </Container>

  );
}

export default SkillsSection;