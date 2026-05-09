function Todo({ id, title, description, status, toggleCompleted }) {
  const handleChange = () => {
    toggleCompleted(id)
  }
  
    return (
    <div className="w-full min-w-80 rounded-lg border border-[#ff7a61] bg-[#001f21] px-6 py-5 text-[#ff7a61] shadow-[0_0_45px_rgba(0,0,0,0.2)]">
      <div className="flex items-center justify-between gap-10">
        <div id="info" className="flex flex-col gap-y-2">
          <div className="text-xl font-bold tracking-wide">{title}</div>
          <div className="max-w-80 text-xs uppercase tracking-[0.18em] text-[#ff9a85]">{description}</div>
        </div>
        <div id="update" className="flex flex-col items-center gap-y-5">
          <input
            className="h-6 w-6 cursor-pointer appearance-none rounded-sm border border-[#ff7a61] bg-transparent checked:bg-[#ff7a61] focus:outline-none focus:ring-2 focus:ring-[#ff7a61]/40"
            type="checkbox"
            name="markAsdone"
            checked={status}
            onChange={handleChange}
          />
          <button className="rounded border border-[#ff7a61] p-1.5 text-[#ff7a61] transition hover:bg-[#ff7a61] hover:text-[#001f21] focus:outline-none focus:ring-2 focus:ring-[#ff7a61]/40">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 6.0683594 22 L 17.931641 22 L 19.634766 7 L 4.3652344 7 z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
