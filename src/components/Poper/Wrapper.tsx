function Wrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="border-[1px] bg-white rounded-lg shadow-lg pt-2 mt-2 ">
            {children}
        </div>
    );
}

export default Wrapper;
