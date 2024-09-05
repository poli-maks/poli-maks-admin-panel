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

  // Configuration for the custom links plugin
  "strapi-plugin-custom-links": {
    enabled: true, // Ensure the plugin is enabled
    config: {
      contentTypes: [
        // Replace with your content types that need custom links
        "api::mycontenttype.mycontenttype",
        "api::othercontenttype.othercontenttype",
      ],
    },
  },
});
