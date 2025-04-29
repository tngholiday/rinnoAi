"use client";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { Github, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Footer() {

  const { resolvedTheme } = useTheme();
  
  const logoSrc = resolvedTheme === "dark" ? "/images/logo-dark.png" : "/images/logo.png";
  return (
    <footer className="bg-muted py-12 px-5">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
          <Link href="/" className="flex items-center space-x-2">
          <Image src={logoSrc} alt="RinnoAI Logo" className="w-36" width={60} height={40} />
          
        </Link>
          </div>
          <p className="text-muted-foreground mb-6 max-w-md">
            We build innovative software solutions powered by artificial intelligence and machine learning to help businesses thrive in the digital age.
          </p>
          <div className="flex space-x-4">
            <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
            </li>
           
            <li>
              <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </Link>
            </li>
          
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Legal</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl mt-12 pt-6 border-t border-border">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}