module.exports = ({ env }) => ({
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },

  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {
          folder: "unlockers",
        },
        delete: {},
      },
    },
  },

  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 5,
    },
  },

  "strapi-plugin-custom-links": {
    enabled: true,
    config: {
      // Any specific configuration options for the plugin (if required)
    },
  },
});
