import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';

const ThemeToggle = () => {

    const { setTheme, theme, systemTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = React.useState("system");


    React.useEffect(() => {
        const resolved = theme === "system" ? systemTheme : theme;
        setCurrentTheme(resolved || "light");
    }, [theme, systemTheme]);

    const toggleTheme = () => {
        const next =
            theme === "light" ? "dark" : "light";
        setTheme(next);
    };
    return (
        <div className="   md:flex gap-3 items-center ">
            <div className="p-2
                     md:flex gap-3 items-center">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleTheme}
                    className="relative"
                >

                    <Sun
                        className={`h-[1.2rem] w-[1.2rem] transition-all ${currentTheme === "light" ? "opacity-0" : "opacity-100"}`}
                    />

                    <Moon
                        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${currentTheme === "dark" ? "opacity-0" : "opacity-100"}`}
                    />



                    <span className="sr-only">Toggle theme</span>
                </Button>
            </div>
        </div>
    );
};

export default ThemeToggle;