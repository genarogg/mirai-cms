export default ({ env }) => ({
  'strapi-algolia': {
    enabled: true,
    config: {
      apiKey: env('ALGOLIA_ADMIN_KEY'),
      applicationId: env('ALGOLIA_APP_ID'),
      contentTypes: [
        {
          name: 'api::product.product',
          index: 'producto',
          fields: ['titulo'],
          hideFields: [
            'imgs',
            "img_main",
            "img_secundary"
          ]
        },
      ],
      // contentTypes: [
      //   {
      //     name: 'api::categoria.categoria',
      //     index: 'categoria2',
      //     fields: ['nombre'],
      //     hideFields: ['id']
      //   },
      // ],
    },
  },
});
