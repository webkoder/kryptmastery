require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Q6GaZ1zC30dBz9KFKjDHOnDKTKPgtQhK',
      accounts: ['0732e30ce9d6a70ab20f8aa8711344ce51a988f87cddc881500f02e85d5a40c0']
    }
  }
}