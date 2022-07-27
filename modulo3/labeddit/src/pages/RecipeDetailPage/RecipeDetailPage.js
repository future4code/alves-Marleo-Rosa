import React from 'react'
import useProtectPage from '../../hooks/useProtectPage'

const RecipeDetailPage = () => {
    useProtectPage()
    return (
        <div>
            <h1>RecipeDetailPage</h1>
        </div>
    )
}

export default RecipeDetailPage