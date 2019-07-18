import React from "react"
import { graphql } from "gatsby"


const Recipe = ({data}) => (
  data.allAirtable.edges.map( ({ node }) => (
  <div>
    <h1>{node.data.Name}</h1>
    <p>Preparation Time: {node.data.Preparation_Time}</p>
    <p>Total Time: {node.data.Total_Time}</p>
    <p>Ingredients: {node.data.Ingredients}</p>
    <p>Directions: {node.data.Directions}</p>
    <p>Cooking Time: {node.data.Cooking_Time}</p>
    <p>Last made: {node.data.Last_Made}</p>
    <p>Rating: {node.data.Rating}</p>
    <a aria-label = "Link to recipe" href = {node.data.URL}>Link to Recipe</a>
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
