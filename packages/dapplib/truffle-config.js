require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glove flower smooth name rebel night modify idea arm army gate'; 
let testAccounts = [
"0x1ed8365093ca468812e6edacc765eeafce723b5d40b2b08f10a024c9f75d5b19",
"0xc7c8777d5711bcd5c99ea321b5433c274f9e13c0d2f1073646db25a4e3afc4d3",
"0x965c5609f5d1c2507a60979aae0aeda9078799a6238b3280ab7027aafe638154",
"0xb8432eaf4b50df1fd2d41bd569b87f40f858e5c15b61dd35dd07c0001aba37f1",
"0x2b885e602a9c9c080bf005e7fd42ed680d45797e60d619f8ebae447967eeb32c",
"0x1105aa9df54ded03489d743727b21c7b93d5ae6a30d3126ec94d7289510c3642",
"0x338027b80854d0becb66764ee98c90b6e47ffbcf27a557bc31eef443e4bdb255",
"0x5fac6f855d3aed161a5e4612a22433b1708fe0c0a734231036e2b8b6c932772d",
"0x0c25b8e4e04be216c99a6afcf85d73eb9dd58220c33686131ad785a8cd93e420",
"0xf84b073b05cd20a343a07899d0d8f610c05703cc0898f1b02ae8ac18ef42d6ec"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

