
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  async headers() {
    return[
      {
        source: '/:path*',
        headers: [
          {key: 'Access-Control-Allow-Credentials', value: 'true'},
          {key: 'Access-Control-Allow-Origin', value: 'http://localhost:3000/*'},
          {key: 'Access-Control-Allow-Methods', value: '*'},
          {key: 'Access-Control-Allow-Headers', value: '*'},
        ],
      },
    ];
  },
};
    