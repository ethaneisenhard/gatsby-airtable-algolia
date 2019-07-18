import React from "react";
import { Link } from "gatsby"
import { Highlight } from "react-instantsearch-dom";


const SearchPreview = ({hit}) => (
    <Link to = {hit.fields.slug} aria-label ={hit.data.Name}>
         <h1>
        <Highlight hit={hit} attribute="data.Name" tagName="mark" />
        </h1>
        <p>Total Time: {hit.data.Total_Time}</p>
        <p>List of Ingredients: {hit.data.Ingredients}</p>
    </Link>
)

export default SearchPreview;