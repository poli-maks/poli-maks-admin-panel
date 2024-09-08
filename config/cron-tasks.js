const { STRAPI_URL } = process.env;
const axios = require("axios");

// Comment out or remove this job
// module.exports = {
//   myJob: {
//     task: async ({ strapi }) => {
//       try {
//         const response = await axios.get(STRAPI_URL + "/api/cases");
//         if (response) console.log("🐇 Wake up, Neo...");
//       } catch (error) {
//         console.error("❌ Waking up Error!", error);
//       }
//     },
//     options: {
//       rule: "*/14 * * * *",
//     },
//   },
// };
