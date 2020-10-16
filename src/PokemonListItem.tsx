import React from "react";

interface Props {
    name: string
}

export const PokemonListItem: React.FC<Props> = ({name}) => {
    return (
    <li>{name}</li>
    )
}