import { IconConfig, IconResourceType, ICON_TYPE } from '@spartacus/storefront';

export const CustomIconsConfig: IconConfig = {
  icon: {
    symbols: {
      CART: 'CART',
      USER: 'far fa-user',
      LOGOUT: 'fas fa-sign-out',
      ARROW_LEFT: 'fas fa-chevron-left',
      ARROW_RIGHT: 'fas fa-chevron-right',
      ARROW_TOP: 'fas fa-chevron-up',
    },
    resources: [
      {
        type: IconResourceType.LINK,
        url: 'https://use.fontawesome.com/releases/v6.3.0/css/all.css',
      },
      {
        type: IconResourceType.SVG,
        url: getIconAssetUrl('cart-icon.svg'),
        types: [ICON_TYPE.CART],
      },
    ],
  },
};

function getIconAssetUrl(fileName: string): string {
  return `./assets/icons/${fileName}`;
}
