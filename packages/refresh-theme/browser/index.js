import DefaultTheme from '@mindful-web/marko-web-theme-default/browser';
import ContactUs from '@mindful-web/marko-web-contact-us/browser';
import GTM from '@mindful-web/marko-web-gtm/browser';
import GAM from '@mindful-web/marko-web-gam/browser';
import GCSE from '@mindful-web/marko-web-gcse/browser';
import Inquiry from '@mindful-web/marko-web-inquiry/browser';
import Leaders from '@mindful-web/marko-web-leaders/browser';
import Common from '@ac-business-media/package-common/browser';
import SocialSharing from '@mindful-web/marko-web-social-sharing/browser';
import PhotoSwipe from '@mindful-web/marko-web-photoswipe/browser';
import RevealAd from '@mindful-web/marko-web-reveal-ad/browser';
import Radix from '@mindful-web/marko-web-radix/browser';
import P1Events from '@mindful-web/marko-web-p1-events/browser';
import OmedaIdentityX from '@mindful-web/marko-web-omeda-identity-x/browser';

const setP1EventsIdentity = ({ p1events, brandKey, encryptedId }) => {
  if (!p1events || !brandKey || !encryptedId) return;
  p1events('setIdentity', `omeda.${brandKey}.customer*${encryptedId}~encrypted`);
};

export default (Browser) => {
  const { EventBus } = Browser;
  EventBus.$on('identity-x-logout', () => {
    if (window.p1events) window.p1events('setIdentity', null);
  });
  EventBus.$on('omeda-identity-x-authenticated', ({ brandKey, encryptedId }) => {
    setP1EventsIdentity({ p1events: window.p1events, brandKey, encryptedId });
  });
  EventBus.$on('omeda-identity-x-rapid-identify-response', ({ brandKey, encryptedId }) => {
    setP1EventsIdentity({ p1events: window.p1events, brandKey, encryptedId });
  });

  DefaultTheme(Browser);
  ContactUs(Browser);
  Leaders(Browser);
  GTM(Browser);
  GAM(Browser);
  GCSE(Browser);
  Common(Browser);
  Inquiry(Browser);
  SocialSharing(Browser);
  PhotoSwipe(Browser);
  RevealAd(Browser);
  Radix(Browser);
  P1Events(Browser);
  OmedaIdentityX(Browser);
};
