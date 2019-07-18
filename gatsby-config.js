require("dotenv").config()

const myQuery = `
{
  allAirtable(filter: {table: {eq: "Recipes"}}) {
    edges {
      node {
        data {
          Name
          Ingredients
          Style
        }
        id
      }
    }
  }
}
`;

const queries = [
  {
    query: myQuery,
    transformer: ({ data }) => data.allAirtable.edges.map(({ node }) => node), 
    indexName: 'test_Products',
  },
];

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-airtable",
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: "appNzIiiOIir2jjf7",
            tableName: "Recipes",
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
  ],
}
