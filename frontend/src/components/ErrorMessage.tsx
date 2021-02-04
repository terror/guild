import React from 'react';

import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box,
} from '@chakra-ui/react';

interface ErrorMessageProps {
    title: string;
    msg: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ title, msg }) => {
    return (
        <Alert status="error">
            <AlertIcon />
            <Box flex="1">
                <AlertTitle>{title}</AlertTitle>
                <AlertDescription>{msg}</AlertDescription>
            </Box>
        </Alert>
    );
};
