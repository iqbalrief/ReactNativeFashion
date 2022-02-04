import React, { useContext, useRef } from 'react';
import SocialLogin from "../components/SocialLogin"
import { Container, Button, Text } from "../../components";
import { Box } from '../../components/Theme';
import TextInput from '../components/Form/TextInput';
import Checkbox from "../components/Form/Checkbox"
import { Controller, useForm } from 'react-hook-form';
import * as yup from "yup";
import Footer from '../components/Footer';
import { AuthNavigationProps } from '../../components/Navigation';
import { BorderlessButton } from 'react-native-gesture-handler';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthContext } from '../../Service/Authentication/authContext';






const Login = ({ navigation }: AuthNavigationProps<"Login">) => {
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(32).required(),
    });
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({ mode: "onChange", resolver: yupResolver(schema) })



    // const password = useRef<typeof TextInput>(null)

    const footer = (
        <Footer
            title="Don't have an account?"
            action="Sign Up here"
            onPress={() => navigation.navigate("SignUp")}
        />
    );

    const { signIn }: any = useContext(AuthContext);

     const onSubmit = async (data: any) => {
         await signIn(data).then(() => {
            navigation.navigate("Home")
         })
     }
         
    

    return (
        <Container {...{ footer }} >
            <Box padding="xl">
                <Text
                    variant="title1"
                    textAlign="center"
                    marginBottom="l"
                >
                    Welcome back
                </Text>
                <Text
                    variant="body"
                    textAlign="center"
                    marginBottom='l'
                >
                    Use your credentials below and login to your account
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
                {/* <TextInput
                    icon="lock"
                    placeholder="Enter your Password"
                /> */}
                <Box
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    marginVertical="s"
                    >
                    <Checkbox label="Remember me" />
                    <BorderlessButton
                        onPress={() => navigation.navigate("ForgotPassword")}
                    >
                        <Text
                            variant="button"
                            color="primary"
                        >
                            Forgot Password
                        </Text>
                    </BorderlessButton>
                </Box>
                <Box
                    alignItems="center"
                    marginTop="m"
                >
                    <Button
                        variant="primary"
                        onPress={handleSubmit(onSubmit)}
                        label="Log into your account"
                    />
                </Box>

            </Box>
        </Container>

       
    );
};

export default Login;