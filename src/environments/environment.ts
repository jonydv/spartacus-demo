// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  occBaseUrl: 'https://spartacus-demo.eastus.cloudapp.azure.com:8443', // TODO: Replace with https://localhost:9002 for local enviroment development
  prefix: '/occ/v2/',
  promeClubOrders:
    'http://localhost:4200/promeclubSite/my-account/orders?site=promeclubSite',
  promesaUrl: 'http://localhost:4200',
  mainteanceURL: '/mainteance-page.html',
  defaultSection: 'ferreteria',
  smartEdit: {
    allowOrigin: 'local.promesa.com:9002',
  },
  recaptcha: {
    siteKey: '6Leg5K0hAAAAAFoU5n08itWY_6aH58XlY1kCCewQ',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
