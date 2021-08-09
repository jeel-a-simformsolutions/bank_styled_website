import React from 'react';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrapper, Icon, Text } from './SigninElements';
const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrapper>
                    <Icon to="/">dolla</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor="for">password</FormLabel>
                            <FormInput type="password" required />
                            <FormButton type="submit">Continue</FormButton>
                            <Text>Forgot Password</Text>
                        </Form>
                    </FormContent>
                </FormWrapper>
            </Container>
        </>
    )
}

export default SignIn;