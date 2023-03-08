import { DIALOG_TYPE, LayoutConfig } from '@spartacus/storefront';
export const CustomLayoutConfig: LayoutConfig = {
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
  },
};
