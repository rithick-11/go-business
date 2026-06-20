
const Container = ({ children, className }) => {
    return (
        <div className={`w-[95%] md:w-4xl lg:w-5xl xl:w-7xl h-full mx-auto ${className}`}>
            {children}
        </div>
    )
}

export default Container