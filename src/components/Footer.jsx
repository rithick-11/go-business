const Footer = () => {
    return (
        <footer className="mt-12 py-6 bg-white border-t border-gray-100">
            <div className="w-[95%] md:w-4xl lg:w-5xl xl:w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="text-indigo-600 font-semibold">Go Business</div>
                </div>

                <nav aria-label="Footer" className="flex items-center gap-4 text-sm text-gray-600">
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Privacy</a>
                </nav>

                <div className="text-sm text-gray-500">© 2024 Go Business</div>
            </div>
        </footer>
    )
}

export default Footer
