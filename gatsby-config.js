module.exports = {
  siteMetadata: {
    title: 'Design+Code 3',
    description:
      'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
    keywords:
      'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '1whnlxa30swa',
        accessToken:
          'b816af0a1b065745ecad0b07bf785301fae58a5d0bd590838dface033f50ed97',
      },
    },
  ],
}
