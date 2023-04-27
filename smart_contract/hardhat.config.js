// https://eth-goerli.g.alchemy.com/v2/qii1wh9NlTQb4xHkDPnyf2zsgaMCn9pf

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/qii1wh9NlTQb4xHkDPnyf2zsgaMCn9pf',
      accounts: ['5939a698e1f2383d3368f78ae5fb6804d7461dd2c3f91d7b1843c1c6abab3831'],
    },
  },
};