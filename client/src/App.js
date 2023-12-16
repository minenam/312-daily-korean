import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header  from './components/Header';
import Splash from './components/Splash';
import OnBoarding from './components/OnBoarding';
import Main from './components/Main';
import Complete from './components/Complete';
import Terms from './components/Terms';
import Feedback from './components/Feedback';
import GlobalStyle from './style/globalStyle';

const Wrapper = styled.div`
position: relative;
`;

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/splash" element={<Splash />} />
          <Route path="/onboarding" element={<OnBoarding />} />
          <Route path="/" element={<Main />}  />
          <Route path="/complete" element={<Complete />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
    </BrowserRouter>
  );
};

function App() {
  return (
    <Wrapper className="App">
      <Header/>
      <Router />
      <GlobalStyle/>
    </Wrapper>
  );
}

export default App;
