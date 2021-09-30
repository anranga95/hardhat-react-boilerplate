import { SymfoniGreeter } from '../../hardhat/SymfoniContext';

export const getGreeting = async (contract: SymfoniGreeter) => {
  if (contract.instance) {
    const greeting = await contract.instance.greet();
    return greeting;
  }

  return '<Off chain...>';
};
