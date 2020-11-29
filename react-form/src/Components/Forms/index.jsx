import React from "react";
import {
  Input,
  Label,
  StyledSignUpForm,
  Title,
  PasswordsContainer,
  PasswordDiv,
  ConfirmPasswordDiv,
  Checkbox,
  CheckboxLabel,
  CreateAccountButton,
} from "./style";

const SignUpForm = () => {
  return (
    <StyledSignUpForm>
      <Title>Create Account</Title>
      <Label htmlFor="username">Username</Label>
      <Input id="username" name="username" type="text" required />
      <Label htmlFor="email">Email</Label>
      <Input id="email" name="email" type="email" required />
      <PasswordsContainer>
        <PasswordDiv>
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" required />
        </PasswordDiv>
        <ConfirmPasswordDiv>
          <Label htmlFor="confirm-password">Confirm</Label>
          <Input
            id="confirm-password"
            name="confirm-password"
            type="password"
            required
          />
        </ConfirmPasswordDiv>
      </PasswordsContainer>
      <CheckboxLabel>
        <Checkbox type="checkbox" value="policy-agree" label="" required />
        By creating an account, you agree to the Terms of Service and
        Conditions, and Privacy Policy.
      </CheckboxLabel>
      <CreateAccountButton>Create account</CreateAccountButton>
    </StyledSignUpForm>
  );
};

export { SignUpForm };
