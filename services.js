const celoKIT = require('@celo/contractkit')
const nodeURL = "https://celo-alfajores.infura.io/v3/e2427ebe7e07471f919507c35300c6f0"

const kit = celoKIT.newKit(nodeURL);

console.log(kit);

//create wallet generate
const generateWalletAddress =async () => {
    const account = await kit.web3.eth.accounts.create();
    return account;
};

generateWalletAddress()

// get balance for cUSD
const getbalance = async (address) => {
    const tokenwrapper = kit.contracts.getStableToken();

    const balances = (await tokenwrapper).balanceOf(address);

};

//Transfer  cUSD
generateWalletAddress();
getbalances()