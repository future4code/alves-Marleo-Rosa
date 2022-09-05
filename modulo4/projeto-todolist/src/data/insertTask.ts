import connection from "../connection";

export default async function insertTask(
    id: string,
    title: string,
    description: string,
    status: string,
    deadline: string,
    authorId: string
) {
    await connection('TodoListTask')
        .insert({
            id,
            title,
            description,
            status,
            deadline,
            authorId
        })
}