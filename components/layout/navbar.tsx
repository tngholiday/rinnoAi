"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/constants";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const logoSrc = resolvedTheme === "dark" ? "/images/logo-dark.png" : "/images/logo.png";
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm p-1"
          : "bg-transparent p-1"
      )}
    >
      <div className="container mx-auto max-w-7xl">
      <div className=" flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logoSrc} alt="RinnoAI Logo" className="w-36 " width={60} height={40} />
          
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                {link.submenu ? (
                  <>
                    <NavigationMenuTrigger><Link
                    href={link.href}
                    className="text-sm font-medium transition-colors hover:text-primary px-4 py-2"
                  >
                    {link.label}
                  </Link></NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid grid-cols-6 md:grid-cols-2 lg:grid-cols-3 w-[400px] gap-3 p-4 md:w-[700px] lg:w-[800px]">
                        {link.submenu.map((subItem) => (
                          <li key={subItem.href}>
                            <NavigationMenuLink asChild>
                              <Link href={subItem.href} className="block select-none rounded-lg bg-background/50 px-4 py-3 transition-colors hover:bg-accent/10 focus:bg-accent/20">
                                <div className="space-y-1">
                                  <h4 className="text-sm font-semibold">{subItem.label}</h4>
                                 
                                  {subItem.services && (
                                    <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                                      {subItem.services.map((svc) => {
                                        const slug = svc.toLowerCase().replace(/\s+/g, "-");
                                        const url = `${subItem.href}/${slug}`;
                                        return (
                                          <li key={svc} className="list-disc list-inside">
                                            <Link href={url} className="hover:text-primary">
                                              {svc}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  )}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm font-medium transition-colors hover:text-primary px-4 py-2"
                  >
                    {link.label}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button 
          onClick={() => router.push("/contact")}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium">
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
  <ThemeToggle />
  <Button
    variant="ghost"
    size="icon"
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  >
    {mobileMenuOpen ? (
      <X className="h-6 w-6" />
    ) : (
      <Menu className="h-6 w-6" />
    )}
  </Button>
</div>
      </div>

      {/* Mobile Navigation */}
{mobileMenuOpen && (
  <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md p-6 overflow-y-auto">
    <nav className="flex flex-col space-y-6">
      {navLinks.map((link) => (
        <div key={link.href}>
          {link.submenu ? (
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer py-2 text-lg font-medium hover:text-primary">
                {link.label}
                <ChevronDown className="h-5 w-5 transform group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                {link.submenu.map((subItem) => (
                  <div key={subItem.href}>
                    <Link
                      href={subItem.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-md px-3 py-2 bg-background/70 hover:bg-accent/20 text-sm font-medium transition-colors"
                    >
                      {subItem.label}
                    </Link>
                    {subItem.services && (
                      <ul className="mt-1 ml-4 space-y-1 text-xs text-muted-foreground">
                        {subItem.services.map((svc) => {
                          const slug = svc.toLowerCase().replace(/\s+/g, "-");
                          const url = `${subItem.href}/${slug}`;
                          return (
                            <li key={svc} className="list-disc list-inside">
                              <Link
                                href={url}
                                onClick={() => setMobileMenuOpen(false)}
                                className="hover:text-primary"
                              >
                                {svc}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </details>
          ) : (
            <Link
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-lg font-medium hover:text-primary"
            >
              {link.label}
            </Link>
          )}
        </div>
      ))}

      {/* CTA Button */}
      <Button 
      onClick={() => router.push("/contact")}
      className="w-full mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium">
        Contact Us
      </Button>
    </nav>
  </div>
)}
      </div>
    </header>
  );
}