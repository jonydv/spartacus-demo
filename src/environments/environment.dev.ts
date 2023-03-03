/*
DEV occBaseUrl: 'https://hybris.dev-promesa.qubikdigital.com'
STG occBaseUrl: 'https://hybris.stg-promesa.qubikdigital.com'
*/

export const environment = {
  production: true,
  occBaseUrl: 'https://hybris.dev-promesa.qubikdigital.com',
  prefix: '/occ/v2',
  promeClubOrders:
    'https://dev-promesa.qubikdigital.com/promeclubSite/my-account/orders',
  promesaUrl: 'https://dev-promesa.qubikdigital.com',
  mainteanceURL: '/mainteance-page.html',
  defaultSection: 'ferreteria',
  smartEdit: {
    allowOrigin: 'hybris.dev-promesa.qubikdigital.com:443',
  },
  recaptcha: {
    siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', // Site Key only for testing purpose (https://developers.google.com/recaptcha/docs/faq#id-like-to-run-automated-tests-with-recaptcha.-what-should-i-do)
  },
};
