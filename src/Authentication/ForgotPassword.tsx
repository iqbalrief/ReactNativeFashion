import React from 'react'
import { Linking } from "react-native"
import { Button, Container, Text } from '../components';
import {  AuthNavigationProps } from '../components/Navigation';
import Footer from './components/Footer';
import * as yup from "yup";
import { Box } from '../components/Theme';
import TextInput from './components/Form/TextInput';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


const ForgotPassword = ({ navigation }: AuthNavigationProps <"ForgotPassword">) => {

    const schema = yup.object().shape({
        email: yup.string()
          .required("Email is required")
          .email("Email is not valid"),
      });
    
      const {
        control,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm({ mode: "onChange", resolver: yupResolver(schema) })

    const footer = ( 
        <Footer 
            title="Don't Work?"
            action="Try another way"
            onPress={() => Linking.openURL("mailto:help@support.com")} 
        />
    );

    const onSubmit = (data:any) => console.log(data)
    
    return (
        <Container {...{ footer }} >
        <Box padding="xl" justifyContent="center">
            <Text
                variant="title1"
                textAlign="center"
                marginBottom="l"
            >
               Forgot Password ?
            </Text>
            <Text
                variant="body"
                textAlign="center"
                marginBottom='l'
            >
                Enter the email address associated with your account
            </Text>
            <Box marginBottom="m" >

                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, value, onBlur } }) => (
                        <TextInput
                            icon="mail"
                            placeholder="Enter your Email"
                            value={value}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            error={errors.email}
                            errorText={errors?.name?.message}
                            autoCapitalize="none"
                            autoCompleteType="email"
                            returnKeyType="next"
                            returnKeyLabel="next"
                        />
                    )}
                />
                

            </Box>

            <Box
                alignItems="center"
                marginTop="m"
            >
                <Button
                    variant="primary"
                    onPress={() => navigation.navigate("PasswordChanged")}
                    label="Reset Password"
                />
            </Box>

        </Box>
    </Container>
    )
}

export default ForgotPassword;