// import axios from "axios"
// import { BASE_URL } from "../constants/urls"
// import useForm from "../hooks/useForm"

// export default function NovaPostagem() {
//     const { form, onChange, limparCampos } = useForm({
//         title: "",
//         body: ""
//     })

//     const criarPostagem = () => {

//         const body = form
//         const token = localStorage.getItem("token")
//         axios

//             .post(`${BASE_URL}/posts`, body, { headers: { Authorization: token } })
//             .then((res) => {
//                 console.log(res.data)
//             })
//             .catch((err) => {
//                 alert("Erro nova postagem")
//             })
//     }
// }

// const postar = (event) => {
//     event.preventDefault()
//     criarPostagem()
//     limparCampos()
// }

// return (
//     <div>
//         <form onSubmit={postar}>
//             <input
//                 placeholder="Título da postagem"
//                 value={form.title}
//                 name="title"
//                 onChange={onChange}
//                 required
//             />
//             <textarea
//                 placeholder="Diga o que você está pensando."
//                 value={form.body}
//                 name="body"
//                 onChange={onChange}
//                 required
//             />
//             <button>Postar</button>
//         </form>
//     </div>
// )