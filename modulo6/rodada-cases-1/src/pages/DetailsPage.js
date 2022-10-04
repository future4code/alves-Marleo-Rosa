import { useNavigate } from "react-router-dom"
import { goToHomePage } from "../routes/coordinator"

export default function DetailsPage() {
    const navigate = useNavigate()

    return (
        <div>
            <h2>DetailsPage</h2>
            <button onClick={() => goToHomePage(navigate)}>Home</button>
        </div>
    )
}