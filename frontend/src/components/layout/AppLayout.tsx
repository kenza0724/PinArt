import { NavLink, Outlet } from "react-router"
import { Palette, Plus } from 'lucide-react'
import { Button } from "../ui/button"

const navigationItems = [
    { label: 'Home', to: '/' },
    { label: 'Explore', to: '/explore' },
    { label: 'Galleries', to: '/galleries' },
]

function AppLayout() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <header className="border-b">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
                    <NavLink
                        to="/"
                        className="flex items-center gap-2 font-semibold tracking-tight">
                        <Palette className="size-5" aria-hidden="true" />
                        PinArt
                    </NavLink>

                    <nav aria-label="Main navigation" className="flex items-center gap-1">
                        {navigationItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive
                                        ? 'bg-muted text-foreground'
                                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    <Button asChild size="sm">
                        <NavLink to="/upload">
                            <Plus aria-hidden="true"/>
                            Upload
                        </NavLink>
                    </Button>
                </div>
            </header>
            <Outlet/>
        </div>
    )
}

export default AppLayout