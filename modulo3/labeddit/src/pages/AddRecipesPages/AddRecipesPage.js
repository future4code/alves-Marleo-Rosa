import React from "react"
import useProtectPage from "../../hooks/useProtectPage"

const AddRecipePage = () => {
    useProtectPage()
    return (
        <div>
            <h1>AddRecipePage</h1>
        </div>
    )
}

export default AddRecipePage