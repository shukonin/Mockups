import styled from "styled-components";

const StyledSignUpForm = styled.form`
  max-width: 15rem;
  display: grid;
  grid-auto-flow: row;
  gap: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: bold;
`;

const CheckboxLabel = styled.label`
  font-size: 0.8rem;
  color: black;
  line-height: 1.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 0.1rem;
  background-color: #ddd;
`;

const PasswordsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const PasswordDiv = styled.div``;

const ConfirmPasswordDiv = styled.div``;

const Checkbox = styled.input``;

const CreateAccountButton = styled.button`
  background-color: #44f;
  color: white;
  border-radius: 1rem;
`;

export {
  StyledSignUpForm,
  Title,
  Label,
  CheckboxLabel,
  Input,
  PasswordsContainer,
  PasswordDiv,
  ConfirmPasswordDiv,
  Checkbox,
  CreateAccountButton,
};
