import React from "react";
import theme, { Box, Text } from "../../components/Theme";
import { Dimensions } from "react-native";
import { Button } from "../../components";

import { BorderlessButton} from "react-native-gesture-handler";
import { AuthNavigationProps } from "../../components/Navigation";

const picture = {
    src: require('../assets/4.png'),
    width: 3383,
    height: 5074,
};

// const { width } = Dimensions.get("window")

export const  assets = [picture.src];

const Welcome = ({ 
    navigation 
  }: AuthNavigationProps<"Onboarding">) => {
    return (
        <Box flex={1} backgroundColor="white">
            <Box 
            flex={1} 
            borderBottomRightRadius="xl" 
            backgroundColor="grey" 
            alignItems="center" 
            justifyContent="flex-end"> 
                {/* <Image source={picture.src}
                    style={{
                        width: width - theme.borderRadii.xl,
                        height:
                        ((width - theme.borderRadii.xl) * picture.height) / picture.width,
                    }}
                /> */}
            </Box>
            <Box flex={1} borderTopLeftRadius="xl"> 
                <Box 
                backgroundColor="grey" 
                position="absolute" 
                top={0} 
                left={0}
                right={0}
                bottom={0}
                />
                <Box 
                backgroundColor="white" 
                borderTopLeftRadius="xl" 
                justifyContent="space-evenly" 
                alignItems="center"
                flex={1}
                padding="xl"
                >
                    <Text variant="title2"> Let's Get Started </Text>
                    <Text variant="body" 
                    textAlign="center">
                    Login to your account below or signup form an amazing experience
                    </Text>
                    <Button 
                    variant="primary" 
                    label="Have an account ? Login"
                    onPress={() => navigation.navigate("Login")}
                    /> 
                    <Button 
                    label="Join us, it's Free" 
                    onPress={() => navigation.navigate("SignUp")} />
                    {/* <Button 
                    variant="transparent" 
                    label="Forgot Password"
                    onPress={() => navigation.navigate("ForgotPassword")}
                    /> */}
                    <BorderlessButton
                    onPress={() => navigation.navigate("ForgotPassword")}
                    >
                        <Text variant="button"
                        color="secondary"
                        >Forgot Password</Text>
                    </BorderlessButton>
                </Box>
            </Box>
        </Box>
    );
}


export default Welcome;