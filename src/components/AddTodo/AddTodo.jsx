import { useState } from "react"

function AddTodo({addNewTodo}){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = () => {
        const todoData = {title, description}
        addNewTodo(todoData)
        setTitle('')
        setDescription('')
    }

    return <div className="w-full min-w-80 rounded-lg border border-[#ff7a61] bg-[#001f21]/90 px-6 py-5 text-[#ff7a61] shadow-[0_0_45px_rgba(0,0,0,0.2)]">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em]">Add Task :</p>
        <div className="flex flex-col gap-3 sm:flex-row">
            <input
            className="min-w-0 flex-1 rounded border border-[#ff7a61]/70 bg-transparent px-4 py-2 text-sm text-[#ffb09f] placeholder:text-[#ff7a61]/50 focus:border-[#ff9a85] focus:outline-none focus:ring-2 focus:ring-[#ff7a61]/30"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <input
            className="min-w-0 flex-1 rounded border border-[#ff7a61]/70 bg-transparent px-4 py-2 text-sm text-[#ffb09f] placeholder:text-[#ff7a61]/50 focus:border-[#ff9a85] focus:outline-none focus:ring-2 focus:ring-[#ff7a61]/30"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <button
            className="rounded bg-[#ff7a61] px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#001f21] transition hover:bg-[#ff9a85] focus:outline-none focus:ring-2 focus:ring-[#ff7a61]/40"
            onClick={handleSubmit}
            >
                Add
            </button>
        </div>
    </div>
}

export default AddTodo
