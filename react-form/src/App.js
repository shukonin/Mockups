import React from "react";

import {
  MainContainer,
  GraphicSection,
  FormSection,
  LoginConectionContainer,
  SignUpFormContainer,
  SocialSignUpContainer,
} from "./Layouts/App-style";

function App() {
  return (
    <div className="App">
      <MainContainer>
        <GraphicSection>
          <CompanyLogo />
          <SignUpImage />
        </GraphicSection>
        <FormSection>
          <LoginConectionContainer>
            <LoginConection />
          </LoginConectionContainer>
          <SignUpFormContainer>
            <SignUpForm />
          </SignUpFormContainer>
          <SignUpDivisor />
          <SocialSignUpContainer>
            <GoogleSignUpButton />
            <FacebookSignUpButton />
          </SocialSignUpContainer>
        </FormSection>
      </MainContainer>
    </div>
  );
}

export default App;
