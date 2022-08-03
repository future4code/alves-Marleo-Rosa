import axios from "axios"
import { BASE_URL } from "../constants/urls"
import useForm from "../hooks/useForm"
import { InputPostar, InputPostarTitulo, InputTextArea } from "./styled"

export default function NovaPostagem() {
    const { form, onChange, limparCampos } = useForm({
        title: "",
        body: ""
    })

    const criarPostagem = () => {

        const body = form
        const token = localStorage.getItem("token")
        axios

            .post(`${BASE_URL}/posts`, body, { headers: { Authorization: token } })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                alert("Erro nova postagem")
            })
    }


    const postar = (event) => {
        event.preventDefault()
        criarPostagem()
        limparCampos()
    }

    // const CampoNovoPost = criarPostagem.map((post) => {

    return (
        <div>
            <InputPostar>
                <form onSubmit={postar}>
                    <InputPostarTitulo
                        placeholder="Título da postagem"
                        value={form.title}
                        name="title"
                        onChange={onChange}
                        required
                    />
                    <InputTextArea
                        placeholder="Diga o que você está pensando."
                        value={form.body}
                        name="body"
                        onChange={onChange}
                        required
                    />
                    <button type='submit' >Postar</button>
                </form>
            </InputPostar>
        </div>

    )
    //     return(
    //         {CampoNovoPost}
    //     )
    // })
}