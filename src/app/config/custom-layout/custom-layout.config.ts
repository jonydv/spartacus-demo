import { DeferLoadingStrategy } from '@spartacus/core';
import { DIALOG_TYPE, LayoutConfig } from '@spartacus/storefront';
export const CustomLayoutConfig: LayoutConfig = {
  deferredLoading: {
    strategy: DeferLoadingStrategy.DEFER,
    intersectionMargin: '50px',
  },
  layoutSlots: {
    header: {
      slots: ['SiteLogo', 'SearchBox', 'MiniCart', 'PreHeader'],
      lg: {
        slots: [
          'PreHeader',
          'SiteLogo',
          'SearchBox',
          'SiteLogin',
          'MiniCart',
          'NavigationBar',
        ],
      },
    },
    LandingPage2Template: {
      pageFold: 'Section2A',
      slots: [
        'Section1',
        'Section2A',
        'Section2B',
        'Section2C',
        'Section3',
        'Section4',
        'Section5',
      ],
    },
  },
};
