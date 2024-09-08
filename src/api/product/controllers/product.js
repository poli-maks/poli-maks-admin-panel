'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    // Use the slug to find the product
    const entity = await strapi.db.query('api::product.product').findOne({
      where: { slug },
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
