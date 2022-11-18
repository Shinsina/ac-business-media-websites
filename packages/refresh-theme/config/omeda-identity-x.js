const { getOmedaCustomerRecord } = require('@parameter1/base-cms-marko-web-omeda-identity-x/omeda-data');
const { get, getAsArray } = require('@parameter1/base-cms-object-path');
const defaultValue = require('@parameter1/base-cms-marko-core/utils/default-value');

module.exports = (args) => {
  const {
    omedaConfig,
    idxConfig,
    rapidIdentProductId,
    websiteBehaviorAttributeId,
    // Passed through, if specified.
    appendPromoCodeToHook = [
      { hook: 'onLoginLinkSent', promoCode: 'Parameter1' },
      { hook: 'onAuthenticationSuccess', promoCode: 'P1Verified' },
      { hook: 'onUserProfileUpdate', promoCode: 'P1FullProfile' },
    ],
    appendBehaviorToHook = [],
    appendDemographicToHook = [],
    onAuthenticationSuccess,
  } = args;
  return {
    clientKey: omedaConfig.clientKey,
    brandKey: omedaConfig.brandKey,
    appId: omedaConfig.appId,
    inputId: omedaConfig.inputId,
    rapidIdentProductId,
    idxConfig,

    /**
     * Behavior config is now mandatory and can be generated by the CLI.
     * @see https://github.com/parameter1/identity-x-omeda-cli
     *  */
    behaviors: {
      logIn: 6270,
      verifyEmail: 6269,
      submitProfile: 6271,
    },
    behaviorAttributes: {
      website: {
        id: 127,
        valueId: websiteBehaviorAttributeId,
      },
      actionSource: {
        id: 125,
        valueIds: {
          default: 451143,
          newsletterSignup: 451144,
          comments: 451145,
          contentGate: 451142,
        },
      },
      newsletterSignupType: {
        id: 126,
        valueIds: {
          default: 451148,
          pushdown: 451147,
          inlineContent: 451150,
          inlineSection: 451149,
          footer: 451146,
        },
      },
      contentGateType: {
        id: 128,
        valueIds: {
          default: 451151,
          metered: 451152,
          printPreview: 451153,
        },
      },
    },
    appendPromoCodeToHook,
    appendBehaviorToHook,
    appendDemographicToHook,
    onUserProfileUpdateFormatter: (async ({ req, payload }) => {
      // BAIL if omedaGraphQLCLient isnt available return payload.
      if (!omedaConfig.omedaGraphQLClientProp || !onAuthenticationSuccess) return payload;
      const { autoSignupDeploymentTypes } = onAuthenticationSuccess;
      const { user } = payload;
      const found = getAsArray(user, 'externalIds')
        .find(({ identifier, namespace }) => identifier.type === 'encrypted'
          && namespace.provider === 'omeda'
          && namespace.tenant === omedaConfig.brandKey);

      // BAIL if no encryptedCustomerId and return payload
      if (!found) return payload;
      const encryptedCustomerId = get(found, 'identifier.value');

      // Retrive the omeda customer
      const omedaCustomer = await getOmedaCustomerRecord({
        omedaGraphQLClient: req[omedaConfig.omedaGraphQLClientProp],
        encryptedCustomerId,
      });
      if (!omedaCustomer) return payload;
      // Get the current user subscriptions
      const subscriptions = getAsArray(omedaCustomer, 'subscriptions');
      // For each autoOptinProduct check if they have a subscription.
      // Sign the user up if they do not

      const autoDeploymentTypes = autoSignupDeploymentTypes.filter(
        id => !subscriptions.some(({ product }) => product.deploymentTypeId === id),
      );
      const userDeploymentTypes = defaultValue(user.deploymentTypes, []);
      const deploymentTypes = [...userDeploymentTypes, ...autoDeploymentTypes];
      // Always apply the ${pubcod_Profile Updated_Meter} promocode & Demo
      return {
        ...payload,
        ...(deploymentTypes.length && { deploymentTypes }),
      };
    }),
  };
};
