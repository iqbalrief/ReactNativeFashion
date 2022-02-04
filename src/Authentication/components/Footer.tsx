import React from 'react'
import { Button, Text } from '../../components';
import { Box } from '../../components/Theme';
import SocialLogin from './SocialLogin';
import { BorderlessButton } from "react-native-gesture-handler";

interface FooterProps {
    onPress: () => void;
    title: string;
    action: string;
}

const Footer = ({ onPress, title, action }: FooterProps) => {
    return (
        <>
            <SocialLogin />
            <Box 
            alignItems="center"
            marginTop="m"
            >
                <BorderlessButton
                    {...{ onPress }} 
                >
                    <Text
                        variant="button"
                        color="white"
                    >
                        <Text>{`${title}`}</Text>
                        <Text variant="button" color="white"></Text>
                        <Text
                            marginLeft="s"
                            variant="button"
                            color="primary"
                        >
                            {action}
                        </Text>
                    </Text>
                </BorderlessButton>
            </Box>
        </>

    )
}

export default Footer;