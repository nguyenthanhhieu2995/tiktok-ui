function Wrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-white rounded-lg shadow-lg pt-2 min-h-56 max-h-[calc(min(100vh-156px,734px))] mt-2 overflow-x-hidden overflow-y-auto">
            {children}
        </div>
    );
}

export default Wrapper;
