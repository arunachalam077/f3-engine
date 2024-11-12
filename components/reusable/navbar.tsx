'use client'

import * as React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [active, setActive] = React.useState("overview")

  return (
    <header className="flex h-14 items-center justify-between border-b px-6">
      <Link href="#" className="flex items-center gap-2 mr-8">
        <span className="text-xl font-normal">
          <span className="text-blue-600 font-medium">F3</span>
          <span className="text-gray-700">Engine</span>
        </span>
      </Link>
      <nav className="hidden md:flex items-center gap-8">
        <Link
          href="#"
          className={cn(
            "text-[15px] text-gray-600 hover:text-gray-900 font-normal py-1",
            active === "overview" && "text-gray-900"
          )}
          onClick={() => setActive("overview")}
        >
          Overview
        </Link>
        <Link
          href="#"
          className={cn(
            "text-[15px] text-gray-600 hover:text-gray-900 font-normal py-1",
            active === "how-it-works" && "text-gray-900"
          )}
          onClick={() => setActive("how-it-works")}
        >
          How It Works
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger
            className={cn(
              "flex items-center gap-1 text-[15px] text-gray-600 hover:text-gray-900 font-normal py-1",
              active === "goals" && "text-gray-900"
            )}
            onClick={() => setActive("goals")}
          >
            Goals
            <ChevronDown className="h-4 w-4 opacity-50" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuItem className="text-[15px]">Increase sales</DropdownMenuItem>
            <DropdownMenuItem className="text-[15px]">Grow customer base</DropdownMenuItem>
            <DropdownMenuItem className="text-[15px]">Improve efficiency</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          href="#"
          className={cn(
            "text-[15px] text-gray-600 hover:text-gray-900 font-normal py-1",
            active === "support" && "text-gray-900"
          )}
          onClick={() => setActive("support")}
        >
          Support
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          className="hidden md:inline-flex text-[15px] font-normal text-gray-600 hover:text-gray-900 hover:bg-transparent"
        >
          Sign in
        </Button>
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-[15px] font-medium px-6"
        >
          Start now
        </Button>
      </div>
    </header>
  )
}