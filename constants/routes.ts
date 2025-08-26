import { usePathname } from "next/navigation"

const routes = [
    "/",
    "/collections",
]

export const routeMatch = () => {
    const path = usePathname()
    return routes?.includes(path)
}