import styled from 'styled-components';

import CarouselModal from '../modal/CaruselModal';
import { useState } from 'react';
import { projectExamImages } from '../../assets/project-exam/projectExamImg.js';
import { jsFrameworkImages } from '../../assets/js-frameworks/jsFrameworkImg.js';
import { semesterProjectImages } from '../../assets/semester-project/semesterProjectImg.js';




const Container = styled.div`
  width: 100%;

`

const PortofolioContainer = styled.section`
  // your styles here
  display: flex;
  box-shadow: 0px 3px 6px #0000001c;
  padding: 10px;
  background-color: #DFDFDF;
`;


const Image = styled.img`
    width: 300px;
    height: 100%;
    cursor: pointer;
`


const TextSection = styled.div`
text-align: center;
padding: 5px;
width: 100%;

`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

`

const Section = styled.div`
    width: 100%; 

    
    display: flex;
    flex-direction: row;
    gap: 25px;


`
const SectionContainerOne = styled(Section)`
    justify-content: start;

`


const SectionOne = styled.div`
    width: 100%;
    background-color: white;
    box-shadow: 0px 3px 6px #0000001c;
    display: flex;
    div{
        text-align: center;
        padding: 10px;
    }

`




const PortofolioSection = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [lib, setLib] = useState([])

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    function handleOpen(type) {
        if(type === "exam") {
            setLib(projectExamImages)
            
        }else if(type === "framWork") {
            setLib(jsFrameworkImages)
        }else if(type === "semester") {
            setLib(semesterProjectImages)
        }


        openModal()

    }

  return (
    <Container>
        <PortofolioContainer>
        <TextSection>
            <h2>Portofolio</h2>
            <Wrapper>
                <SectionContainerOne>
                <SectionOne>
                    <Image src={semesterProjectImages[0]} onClick={() => handleOpen("semester")}/>
                    <div>
                        <h3>Semester Project 2 - Auction House</h3>
                            <p>
                            This project is an auction house platform that allows users to bid on items, view bid history, and manage their personal profiles. The frontend is styled using Bootstrap and SCSS, while the backend logic is handled with vanilla JavaScript.
                            </p>                  
                    </div>
              
                </SectionOne>
                </SectionContainerOne>

                <SectionContainerOne>
                <SectionOne>
                    <Image src={jsFrameworkImages[0]} onClick={() => handleOpen("framWork")}/>
                    <div>
                        <h3>JavaScript Frameworks Course Assignment</h3>
                            <p>
                            This project is a React-based e-commerce store that allows users to browse products, add them to their cart, and checkout. The application uses React Router for routing and Zustand for state management. The styling is accomplished with styled-components, providing a responsive and modern user interface.
                            </p>
                    </div>
              
                </SectionOne>
                </SectionContainerOne>

                <SectionContainerOne>
                <SectionOne>
                    <Image src={projectExamImages[0]} onClick={() => handleOpen("exam")}/>
                    <div>
                        <h3>Project Exam</h3>
                         <p>This is my project Exam and it is a React-based web application designed to showcase a modern, scalable, and responsive UI/UX design. Utilizing a comprehensive stack including React 18, Styled Components, React Hook Form, Zustand for state management, and Vite as the build tool, this project aims to deliver a seamless and efficient user experience.</p>
                    </div>
              
                </SectionOne>
                </SectionContainerOne>
            
            </Wrapper>

        </TextSection>
        </PortofolioContainer>
        <CarouselModal images={lib} isOpen={isModalOpen} onClose={closeModal}></CarouselModal>
    </Container>


  );
}

export default PortofolioSection;