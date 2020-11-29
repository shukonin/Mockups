import styled from "styled-components";

const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 5fr 6fr;
`;

const GraphicSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const FormSection = styled.section`
  padding: 1rem;
`;

const LoginConectionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

const SignUpFormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialSignUpContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: 1rem;
`;

export {
  MainContainer,
  GraphicSection,
  FormSection,
  LoginConectionContainer,
  SignUpFormContainer,
  SocialSignUpContainer,
};
