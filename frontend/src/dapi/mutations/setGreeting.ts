import { SymfoniGreeter } from '../../hardhat/SymfoniContext';

export const setGreeting = async (contract: SymfoniGreeter, inputGreeting: string) => {
  if (contract.instance) {
    const tx = await contract.instance.setGreeting(inputGreeting);
    await tx.wait();
  }
};
