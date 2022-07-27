import React from 'react'
import useProtectPage from '../../hooks/useProtectPage'

const RecipeListPage = () => {
useProtectPage()
    return (
        <div>
            <h1>RecipeListPage</h1>
        </div>
    )
}

export default RecipeListPage