const configureIdentityX = require('@ac-business-media/package-global/config/identity-x');
const formDefault = require('@ac-business-media/package-global/config/identity-x/default');
const asphalt = require('./identity-x/asphalt');
const concrete = require('./identity-x/concrete');
const equipment = require('./identity-x/equipment');
const pavement = require('./identity-x/pavement');
const rental = require('./identity-x/rental');

formDefault.anonymousCta = 'Register on Forconstructionpros.com to download this document, gain access to premium content, and more.';

module.exports = configureIdentityX({
  appId: '5e28a2d858e67b162e55ae3b',
  activeCustomFieldIds: [
    // Genral FCP
    // '66c4dd5510ae66087480bb09', // Primary Business
    // '66c4dedd10ae66008d80ea98', // Job Title
    // // asphalt
    // '66436fceafb6131c4a841f26',
    // '66437894235da5b2358f59e9',
    // // concrete
    // '664370dc0635be5a37ae38f5',
    // '66437775eab51a24312718de',
    // // equipment
    // '664b5f1cafb6137ba8469acc',
    // '664b5d760635bea8c46106f0',
    // // pavement
    '664b630aeab51a9936d99d59',
    '664b61a70635be184a616332',
    // // rental
    // '664b66b5a370d8a8013ab885',
    // '664b6576eab51a8a95d9d881',
  ],
  forms: {
    default: formDefault,
    asphalt,
    concrete,
    equipment,
    pavement,
    rental,
  },
});
