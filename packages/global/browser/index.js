import ContactUs from '@mindful-web/marko-web-contact-us/browser';
import GCSE from '@mindful-web/marko-web-gcse/browser';
import MonoRail from '@mindful-web/marko-web-theme-monorail/browser';
import Leaders from '@mindful-web/marko-web-leaders/browser';

const GlobalCompanySearch = () => import(/* webpackChunkName: "global-company-search" */ './company-search.vue');
const GlobalSectionSearch = () => import(/* webpackChunkName: "global-section-search" */ './section-search.vue');
const GlobalSpecGuideTable = () => import(/* webpackChunkName: "global-spec-guide-table" */ './spec-guide/table.vue');
const DynamicSiteMenuPositioner = () => import(/* webpackChunkName: "dynamic-site-menu-positioner" */ './dynamic-site-menu-positioner.vue');
const GlobalPartners = () => import(/* webpackChunkName: "global-partners" */ './partners.vue');
const GlobalNodeCarousel = () => import(/* webpackChunkName: "global-node-carousel" */ './node-carousel.vue');
const GlobalDirectoryAutoScroll = () => import(/* webpackChunkName: "global-directory-auto-scroll" */ './auto-scroll.vue');

export default (Browser) => {
  const { EventBus } = Browser;
  GCSE(Browser);
  MonoRail(Browser);
  ContactUs(Browser);
  Leaders(Browser);
  Browser.register('GlobalSpecGuideTable', GlobalSpecGuideTable);
  Browser.register('DynamicSiteMenuPositioner', DynamicSiteMenuPositioner);
  Browser.register('GlobalPartners', GlobalPartners);
  Browser.register('GlobalNodeCarousel', GlobalNodeCarousel);
  Browser.registerComponent('GlobalDirectoryAutoScroll', GlobalDirectoryAutoScroll);
  Browser.register('GlobalCompanySearch', GlobalCompanySearch, {
    provide: { EventBus },
  });
  Browser.register('GlobalSectionSearch', GlobalSectionSearch, {
    provide: { EventBus },
  });
};
