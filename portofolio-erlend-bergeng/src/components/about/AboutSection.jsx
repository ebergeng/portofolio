import styled from 'styled-components';
import imageSrc from '../../assets/MEG.jpg';


const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;

`

const AboutContainer = styled.section`
  // your styles here
  width: 90%;
  display: flex;
  box-shadow: 0px 3px 6px #0000001c;
  padding: 10px;
  background-color: #DFDFDF;

`;

const ImageContainer = styled.img`
width: 150px;
border-radius: 50%;
`

const TextSection = styled.div`
padding: 5px;

`

const AboutSection = () => {
  return (
    <Container>
          <AboutContainer>
      <ImageContainer src={imageSrc} alt='progile-img'/>
      <TextSection>
        <h2>About Me</h2>
        <p>I am currently a front-end student at Noroff School of Technology and Digital Media while also holding a 40% position as a teacher in concept development and programming at a high school.</p>
      </TextSection>
    </AboutContainer>
      
    </Container>

  );
}

export default AboutSection;