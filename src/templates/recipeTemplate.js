import React from "react"
import { graphql } from "gatsby"


const Recipe = ({data}) => (
  data.allAirtable.edges.map( ({ node }) => (
  <div>
    <h1>{node.data.Name}</h1>
  </div>
  ))
)

export default Recipe

export const query = graphql`
query($slug: String!) {
  allAirtable(filter: {fields: {slug: {eq:$slug}}}) {
    edges {
      node {
        data {
          Name
          Cooking_Method
          Preparation_Time
          Style
          Total_Time
          URL
          Ingredients
          Directions
          Cooking_Time
          Last_Made
          Rating
        }
        fields {
          slug
        }
      }
    }
  }
}
`;
