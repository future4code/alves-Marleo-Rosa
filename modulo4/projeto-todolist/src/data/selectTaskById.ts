import connection from "../connection";

export default async function selectTaskById(
    id: string
): Promise<any> {
    const result = await connection.raw(`
    SELECT tasks.*, users.nickname FROM TodoListTask AS tasks
    JOIN TodoListUser AS users
    ON authorId = users.id
    WHERE task.id = '${id}';
    `)

    return result[0][0]
}