import React, { useContext, useEffect, useState } from 'react';
import { GreeterContext } from "./../hardhat/SymfoniContext";

import { Text, Input, Button, Box, Center, Stack } from '@chakra-ui/react';
import { getGreeting, setGreeting } from '../dapi';

export const Greeter: React.FC<any> = () => {
    const greeter = useContext(GreeterContext)

    const [message, setMessage] = useState("");
    const [inputGreeting, setInputGreeting] = useState("");

    useEffect(() => {
        updateGreeting();
    }, [greeter]);

    const updateGreeting = async () => {
        const greeting = await getGreeting(greeter);
        setMessage(greeting)
    };

    const handleSetGreeting = async () => {
        await setGreeting(greeter, inputGreeting);
        setMessage(inputGreeting);
        setInputGreeting('');
    }

    return (
        <Box p={2}>
            <Center>
                <Stack spacing={3}>
                    <Text fontSize="2xl">Current Greeting:</Text>
                    <Text fontSize="3xl">{message}</Text>
                </Stack>
            </Center>

            <Input
                my={1} placeholder="Add greeting..." size="lg"
                value={inputGreeting} onChange={(e) => setInputGreeting(e.target.value)}
            />

            <Center>
                <Button
                    my={1} onClick={() => handleSetGreeting()}
                    variant="outline" _hover={{ bg: "teal.700", borderColor: "teal.700" }}
                >
                    Set greeting
                </Button>
            </Center>
        </Box>
    )
}