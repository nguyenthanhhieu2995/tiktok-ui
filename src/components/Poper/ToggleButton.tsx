function ToggleButton() {
    return (
        <label className="inline-flex cursor-pointer overflow-visible">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0 after:start-0 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#0be09b]"></div>
        </label>
    );
}

export default ToggleButton;
