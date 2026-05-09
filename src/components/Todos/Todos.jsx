import Todo from "../Todo/Todo";

function Todos({todos, toggleCompleted, deleteTodo}){
    const todoComponents = todos.map((todo) => <Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description} status={todo.status} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>)
    return <div className="flex flex-col gap-y-5 w-2xl">
        {todoComponents}
    </div>
}

export default Todos;