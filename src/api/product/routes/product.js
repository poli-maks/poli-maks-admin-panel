'use strict';

/**
 * product router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::product.product', {
  config: {
    findOne: {
      // Define a custom route for fetching by slug
      method: 'GET',
      path: '/products/:slug',
      handler: 'product.findOne',
      config: {
        auth: false, // Set to true if you need authentication
      },
    },
  },
});
