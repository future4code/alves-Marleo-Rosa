import React from "react"
import useProtectPage from "../../hooks/useProtectPage"

const AddRecipesPage = () => {
    useProtectPage()
    return (
        <div>
            <h1>AddRecipePage</h1>
        </div>
    )
}

export default AddRecipesPage