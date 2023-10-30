import { Navbar } from "./_components/Navbar"

const layout = ({ children }) => {
    return (
        <>
            <div className="h-full ">
                <Navbar/>
                <main className="h-full pt-40">
                    {children}
                </main>
            </div>
        </>
    )
}

export default layout