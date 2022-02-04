import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from "yup";

import { AuthNavigationProps } from '../components/Navigation';
import Footer from './components/Footer';
import { Button, Container, Text } from '../components';
import { Box } from '../components/Theme';
import TextInput from './components/Form/TextInput';
import Checkbox from './components/Form/Checkbox';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthContext } from '../Service/Authentication/authContext';






const SignUp = ({ navigation }: AuthNavigationProps <"SignUp">) => {
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(32).required(),
        retypedPassword: yup.string().min(8).max(32).required()
        .equals([yup.ref("retypedPassword"), "Passwords Dont Match"])
        .required("Required")
      });
    const {
        control,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm({ mode: "onChange", resolver: yupResolver(schema) })



    // const password = useRef<typeof TextInput>(null)

    const footer = ( 
        <Footer 
            title="Already have an account ?"
            action="Login here"
            onPress={() => navigation.navigate("Login")}
        />
    );
    
    

    const { signUp }: any = useContext(AuthContext);

    const onSubmit = async (data: any) => {
        
        await signUp(data).then(() => {
           navigation.navigate("Login")    
        })
        .catch((err: any) => {
            console.log(err);
          });
    }

    return (
        <Container {...{ footer }} >
            <Box padding="xl">
                <Text
                    variant="title1"
                    textAlign="center"
                    marginBottom="l"
                >
                    Create Account
                </Text>
                <Text
                    variant="body"
                    textAlign="center"
                    marginBottom='l'
                >
                   Let's us know what your name, email, and your password
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
                
                <Box marginBottom="m">
                <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, value, onBlur } }) => (
                            <TextInput
                            icon="lock"
                            placeholder="Enter your Password"
                                value={value}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                error={errors.password}
                                errorText={errors?.name?.message}
                                autoCompleteType="password"
                                autoCapitalize="none"
                                returnKeyType="go"
                                returnKeyLabel="go"
                                secureTextEntry
                            />
                            
                        )}
                        />
                        </Box>
                 <Controller
                        control={control}
                        name="retypedPassword"
                        render={({ field: { onChange, value, onBlur } }) => (
                            <TextInput
                            icon="lock"
                            placeholder="Enter your Password"
                                value={value}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                error={errors.retypedPassword}
                                errorText={errors?.name?.message}
                                autoCompleteType="password"
                                autoCapitalize="none"
                                returnKeyType="go"
                                returnKeyLabel="go"
                                secureTextEntry
                            />
                        )}
                        />
                <Box
                    flexDirection="row"
                    justifyContent="space-between">
                    <Checkbox label="Remember me" />
                    <Button variant="transparent"
                   >
                        <Text
                            color="primary"
                        >
                            Forgot Password
                        </Text>
                    </Button>
                </Box>
                <Box
                    alignItems="center"
                    marginTop="m"
                >
                    <Button
                        variant="primary"
                        onPress={handleSubmit(onSubmit)}
                        label="Create your account"
                    />
                </Box>

            </Box>
        </Container>

      
    );
};

export default SignUp;