import connection from "../connection";

export default async function insertTask(
    id: string,
    title: string,
    description: string,
    deadline: string,
    authorId: string
) {
    await connection('TodoListTask')
        .insert({
            title,
            description,
            deadline,
            authorId: authorId
        })
}