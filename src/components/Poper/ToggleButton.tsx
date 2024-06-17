function ToggleButton() {
    return (
        <div className="w-[44px] h-[24px]">
            <label className="inline-flex cursor-pointer overflow-visible">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-16 h-8 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-[#0be09b]"></div>
            </label>
        </div>
    );
}

export default ToggleButton;
