import React from 'react'
import { ItemContainer } from './styles'

function ItemRepo({ repo , handleRemoveRepo}) {

    const handleRemove = () => {
        
        handleRemoveRepo(repo.id)

    }

    return (
        <ItemContainer >
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} rel='noreferrer' target='_blank'>Ver repositório</a><br />
            <a href='#' rel='noreferrer' onClick={handleRemove} className='remover'>Remover</a>
            <hr></hr>
        </ItemContainer>
    )
}

export default ItemRepo 