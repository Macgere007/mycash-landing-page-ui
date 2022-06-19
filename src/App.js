import styled from "styled-components";
import FeatureM from "./assets/components/Feature/Multiple/FeatureM";
import Hero from "./assets/components/Hero/Hero";


const AppEl = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

function App() {
  return (
    <AppEl>
      <Hero />
      <FeatureM />
    </AppEl>
  );
}

export default App;
