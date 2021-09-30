import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';

import { SymfoniContext, CurrentAddressContext } from "./../../hardhat/SymfoniContext";

export const ConnectWallet: React.FC<any> = () => {
    const walletContext = useContext(SymfoniContext)
    const [currentAddress] = useContext(CurrentAddressContext)

    const connect = async () => {
        walletContext.init()
    }

    const abbreviateAddress = (address: string) => {
        return `${address.slice(0, 4)}...${address.slice(-4)}`
    }

    return (
        <Button
            onClick={() => connect()}
            variant="outline"
            _hover={{ bg: "teal.700", borderColor: "teal.700" }}
        >
            {currentAddress ? abbreviateAddress(currentAddress) : 'Connect Wallet'}
        </Button>
    )
}