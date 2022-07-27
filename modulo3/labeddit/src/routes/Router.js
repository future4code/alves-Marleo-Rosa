// import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../components/Header"
import AddRecipePage from "../pages/AddRecipesPages/AddRecipesPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage"
import RecipeListPage from "../pages/RecipesListPage/RecipeListPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<RecipeListPage />} />
                <Route path="adicionar-receita" element={<AddRecipePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="detalhe" element={<RecipeDetailPage />} />
                <Route path="cadastro" element={<SignUpPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}