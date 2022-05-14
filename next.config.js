// const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa/cache");
const axios = require("axios");

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     runtimeCaching,
//   },
//   eslint: {
//     // Warning: This allows production builds to successfully complete even if
//     // your project has ESLint errors.
//     ignoreDuringBuilds: true,
//   },
// });

// module.exports = {
//   async redirects() {
//     const response = await axios.get(
//       process.env.BACKEND_SERVER_URL + "/api/all-redirects"
//     );
//     const redirects = [];

//     response?.data?.redirects?.forEach((element) => {
//       redirects.push({
//         source: "/" + encodeURI(element.oldAddress),
//         destination: "/" + encodeURI(element.newAddress),
//         permanent: true,
//       });
//     });
//     return redirects;
//   },
// };

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    const response = await axios.get(
      process.env.BACKEND_SERVER_URL + "/api/all-redirects"
    );
    const redirects = [];

    response?.data?.redirects?.forEach((element) => {
      redirects.push({
        source: "/" + encodeURI(element.oldAddress),
        destination: "/" + encodeURI(element.newAddress),
        permanent: true,
      });
    });
    return redirects;
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};
