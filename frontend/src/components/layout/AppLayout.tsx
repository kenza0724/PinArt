import { NavLink, Outlet } from "react-router"
import { Palette, Plus, UserRound } from 'lucide-react'
import { Button } from "../ui/button"
import { GalleryProvider } from "@/contexts/GalleryContext"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const navigationItems = [
    { label: 'Home', to: '/' },
    { label: 'Explore', to: '/explore' },
    { label: 'Galleries', to: '/galleries' },
]

function AppLayout() {
    return (
        <GalleryProvider>
            <div className="min-h-screen bg-background text-foreground">
                <header className="border-b">
                    <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6 lg:h-16 lg:flex-nowrap lg:justify-between lg:py-0">
                        <NavLink
                            to="/"
                            className="flex items-center gap-2 font-semibold tracking-tight">
                            <Palette className="size-5" aria-hidden="true" />
                            PinArt
                        </NavLink>

                        <nav aria-label="Main navigation" className="order-3 flex w-full items-center gap-1 overflow-x-auto pb-1 lg:order-none lg:w-auto lg:pb-0">
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

                        <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0">
                            <Button asChild size="sm">
                                <NavLink to="/upload">
                                    <Plus aria-hidden="true" />
                                    Upload
                                </NavLink>
                            </Button>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        aria-label="Open account menu"
                                    >
                                        <UserRound aria-hidden="true" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Prototype account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem disabled>
                                        Profile — coming soon
                                    </DropdownMenuItem>
                                    <DropdownMenuItem disabled variant="destructive">
                                        Sign out — coming soon
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </header>
                <Outlet />
            </div>
        </GalleryProvider>
    )
}

export default AppLayout