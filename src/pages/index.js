import React from "react"
import { graphql } from "gatsby"

import SearchPreview from "../components/search-preview"

import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom"

const searchClient = algoliasearch(
  "XLOKWJO30V",
  "d5e77eeae29b04622ea234223b8a62cd"
)

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Recipes" } }) {
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
`

export default () => (
  <div>
    <h1>Find Your Recipe</h1>
    <h1>Use the search bar to find a recipe that you like.</h1>

    <InstantSearch searchClient={searchClient} indexName="test_Products">
      <SearchBox />
      <Hits hitComponent={SearchPreview} />
    </InstantSearch>

  </div>
)
