require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun food plastic rate still assume coral light army gentle'; 
let testAccounts = [
"0xacab8c90a4c330b7e273eb22cb4bb26663588aa28f6d83aa46ad7bada0571f6f",
"0xb864290bbd49cb9f08b36f24e43b606eb6f54f9f3a3e23224dd9efa7d5d5955e",
"0x447f6541e4856ef8ee92257b259aac98c66cf2fd7ffa4d0793d6818c16604e08",
"0xc646bd17d428910dd1e8ec068b9aca74796f27e54544dc4cc2f0f3d3f998cdec",
"0x4cf0146c0da111caffffd06fab96ffbc4119a2b42a0570f47a678ae3445a0947",
"0x29c5c774fc8d7d55b59be2da7fbbd94603090aa31f5463c904813b533b2e5baf",
"0x4b2c73e01cf2e2b68920fb8c10cf6db574c99235bb625d21ba9f0fe1846598a5",
"0x14985fc976a1038dbd91e1f53af0b3622f8049a7a5c873a6192c70355dcbba55",
"0xf352dac29904ba8e35f06f86584ac98bbbc988558b71edf6e93baf2e0a4a9260",
"0x6a13fa8014d21192cbdae73313df98e09ef9aba963b0b6616300a8b0644c8d6f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


