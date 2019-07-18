import React from "react";
import { Highlight } from "react-instantsearch-dom";


const SearchPreview = ({hit}) => (
    <a href = {hit.data.Link}>
        <h1>{hit.data.Name}</h1>
        <p>{hit.id}</p>
        <p>
        <Highlight hit={hit} attribute="data.Name" tagName="mark" />
      </p>
    </a>
)

export default SearchPreview;