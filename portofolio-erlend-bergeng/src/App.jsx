

import styled from 'styled-components';
import AboutSection from './components/about/AboutSection';
import SkillsSection from './components/skills/SkillsSection';
import PortofolioSection from './components/portofolio/PortofolioSection';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px; // Du kan justere dette for å gi mer mellomrom mellom containerne
`;


function App() {
  return (
    <PageContainer >
      <AboutSection />
      <SkillsSection />
      <PortofolioSection />

    </PageContainer>
  )
}

export default App
