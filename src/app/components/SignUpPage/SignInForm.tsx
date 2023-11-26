import React from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Input from './Input';
import LoginButton from './LoginButton';
import styled from 'styled-components';

const FormStyles = styled(Form)`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 20px;
`

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

interface SignInFormProps {
  onSubmit: (values: SignInFormValues, actions: FormikHelpers<SignInFormValues>) => void;
}

interface SignInFormValues {
  email: string;
  password: string;
}

const SignInForm: React.FC<SignInFormProps> = ({ onSubmit }) => {
  const initialValues: SignInFormValues = {
    email: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <FormStyles>
          <Field
            as={Input}
            name="email"
            type="email"
            placeholder="Email address"
          />
          <Field
            as={Input}
            name="password"
            type="password"
            placeholder="Password"
          />
          <LoginButton type="submit" label="Log In" disabled={isSubmitting} />
        </FormStyles>
      )}
    </Formik>
  );
};

export default SignInForm;
