"use client"
import { useTheme } from "next-themes"
import * as React from "react"
import Link from "next/link"
import { MenuIcon, XIcon, CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import { Moon, Sun } from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut, useSession } from "next-auth/react"
import { useCurrentUserDetails } from "@/Hook/useCurrentUserDetails"


const components = [
    {
        title: "AI Blog Generator",
        href: "/features/ai-blog-generator",
        description: "Create high-quality blog posts instantly using our powerful AI writing engine.",
    },
    {
        title: "SEO Optimization",
        href: "/features/seo-optimization",
        description: "Automatically optimize your blog content for search engines to reach a wider audience.",
    },
    {
        title: "Content Scheduler",
        href: "/features/content-scheduler",
        description: "Plan and schedule your posts in advance to keep your blog consistent and active.",
    },
    {
        title: "Multilingual Support",
        href: "/features/multilingual-support",
        description: "Generate and publish content in multiple languages to expand your global reach.",
    },
    {
        title: "Real-time Editing",
        href: "/features/real-time-editing",
        description: "Edit and preview blog content in real-time with collaborative editing support.",
    },
    {
        title: "Custom Templates",
        href: "/features/custom-templates",
        description: "Choose from a variety of beautiful blog templates or design your own.",
    },
    {
        title: "Analytics Dashboard",
        href: "/features/analytics-dashboard",
        description: "Track views, engagement, and performance of your blog posts with powerful analytics.",
    },
]

export function NavigationMenuDemo() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const { userDetails, } = useCurrentUserDetails()

    console.log(userDetails);
    const { setTheme } = useTheme()
    const session = useSession()

    return (
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Global Thought
            </h1>


            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center gap-2 ">
                <div className=" ">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem]  w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>

                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                dark
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
                <NavigationMenu viewport={false} className="z-50">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-2 w-[90vw] max-w-md sm:grid-cols-1 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <Link
                                                className="flex h-full w-full flex-col justify-end rounded-md p-6 bg-muted no-underline select-none focus:shadow-md"
                                                href="/"
                                            >
                                                <div className="text-lg font-medium">Global Thought</div>
                                                <p className="text-muted-foreground text-sm leading-tight">
                                                    AI-powered blogging made simple, fast, and optimized for reach.
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="/about" title="About Global Thought">
                                        Learn how Global Thought helps you create and manage blogs effortlessly with AI.
                                    </ListItem>
                                    <ListItem href="/get-started" title="Get Started">
                                        Start writing your first AI-generated blog post in just a few steps.
                                    </ListItem>
                                    <ListItem href="/blog" title="Latest Blog Posts">
                                        Read the latest articles created by users and our AI.
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-2 w-[90vw] max-w-xl sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                    {components.map((component) => (
                                        <ListItem key={component.title} title={component.title} href={component.href}>
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/docs">Docs</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[250px] gap-4">
                                    <li>
                                        <Link href="/features">
                                            <div className="font-medium">AI Features</div>
                                            <p className="text-muted-foreground">Explore AI tools to speed up your content creation.</p>
                                        </Link>
                                        <Link href="/guides">
                                            <div className="font-medium">Guides</div>
                                            <p className="text-muted-foreground">Step-by-step tutorials on Global Thought.</p>
                                        </Link>
                                        <Link href="/blog">
                                            <div className="font-medium">Blog</div>
                                            <p className="text-muted-foreground">Discover the latest from our community.</p>
                                        </Link>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {
                            session.status === 'authenticated' &&
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Quick Links</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="w-[200px] ">
                                        <li className="flex flex-col gap-2 ">
                                            <Link className="light:hover:bg-gray-200 p-2" href="/blog/create">Create Post</Link>
                                            <Link className="light:hover:bg-gray-200 p-2" href="/dashboard">Dashboard</Link>
                                            <Link className="light:hover:bg-gray-200 p-2" href="/categories">Categories</Link>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        }

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Status</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[200px] gap-4">
                                    <li>
                                        <Link href="/backlog" className="flex items-center gap-2">
                                            <CircleHelpIcon className="w-4 h-4" /> Backlog
                                        </Link>
                                        <Link href="/todo" className="flex items-center gap-2">
                                            <CircleIcon className="w-4 h-4" /> To Do
                                        </Link>
                                        <Link href="/done" className="flex items-center gap-2">
                                            <CircleCheckIcon className="w-4 h-4" /> Done
                                        </Link>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="hidden  p-3 md:flex gap-3 items-center ">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem]  w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>

                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                dark
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div>
                        {
                            session.status === "authenticated" ? (
                                <div className="flex gap-2 items-center">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="outline">Open</Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-56" align="start">
                                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <Link href={'/profile'}> Profile</Link>
                                                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    Billing
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Link href={'/dashboard'}>
                                                        Dashboard
                                                    </Link>
                                                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    Settings
                                                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>Team</DropdownMenuItem>
                                                <DropdownMenuSub>
                                                    <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                                                    <DropdownMenuPortal>
                                                        <DropdownMenuSubContent>
                                                            <DropdownMenuItem>Email</DropdownMenuItem>
                                                            <DropdownMenuItem>Message</DropdownMenuItem>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem>More...</DropdownMenuItem>
                                                        </DropdownMenuSubContent>
                                                    </DropdownMenuPortal>
                                                </DropdownMenuSub>
                                                <DropdownMenuItem>
                                                    New Team
                                                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>GitHub</DropdownMenuItem>
                                            <DropdownMenuItem>Support</DropdownMenuItem>
                                            <DropdownMenuItem disabled>API</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem onClick={() => signOut()}>
                                                Log out
                                                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>

                                </div>) : (
                                <div>
                                    <Link href="/login" className="text-sm font-medium text-blue-600 hover:underline">Login</Link>
                                    <span className="mx-2">|</span>
                                    <Link href="/register" className="text-sm font-medium text-blue-600 hover:underline">Register</Link>
                                </div>)
                        }

                    </div>
                </div>
            </div>

            {/* Mobile Menu Content */}
            {mobileMenuOpen && (
                <div className="absolute top-16 left-0 right-0 text-black bg-white  z-50 flex flex-col p-4 shadow-md space-y-4 md:hidden">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
                    <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                    <Link href="/create" onClick={() => setMobileMenuOpen(false)}>Create</Link>
                    <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
                    <Link href="/register" onClick={() => setMobileMenuOpen(false)}>Register</Link>
                </div>
            )}
        </div>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="text-sm text-muted-foreground leading-snug line-clamp-2">{children}</p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
