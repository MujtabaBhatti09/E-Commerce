export default function Container({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`
        2xl:container 2xl:px-0
        container-fluid px-4
        mx-auto ${className}
        `}>
            {children}
        </div>
    )
}