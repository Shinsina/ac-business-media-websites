import Browser from '@mindful-web/marko-web/browser';
import Shared from '@ac-business-media/package-global/browser';
import createGraphqlClient from './graphql/create-client';

const ImageSlider = () => import(/* webpackChunkName: "site-image-slider" */ './image-slider.vue');
const SpecComparisonTool = () => import(/* webpackChunkName: "site-spec-comparison-tool" */ './spec-comparison-tool.vue');

const $graphql = createGraphqlClient({ uri: '/__graphql' });

Shared(Browser);

const { EventBus } = Browser;

Browser.register('SiteImageSlider', ImageSlider);
Browser.register('SiteSpecComparison', SpecComparisonTool, { provide: { EventBus, $graphql } });

export default Browser;
