"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ArrowRight, Clock, TrendingUp } from "lucide-react"
import Link from "next/link"
import { allServices } from "@/lib/services-data"

interface SearchResult {
  name: string
  category: string
  duration: string
  type: string
  price: string
  available: boolean
  warranty: string
}

export function SearchDialog() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [popularSearches] = useState([
    "Adobe Creative Cloud",
    "Microsoft Office",
    "Windows 11",
    "ChatGPT",
    "Photoshop",
    "NordVPN",
    "Grammarly",
    "Canva Pro",
  ])

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem("webhuma-recent-searches")
    if (saved) {
      setRecentSearches(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    if (query.length > 0) {
      const filtered = allServices.filter(
        (service) =>
          service.name.toLowerCase().includes(query.toLowerCase()) ||
          service.category.toLowerCase().includes(query.toLowerCase()) ||
          service.type.toLowerCase().includes(query.toLowerCase()),
      )
      setResults(filtered.slice(0, 8)) // Limit to 8 results
    } else {
      setResults([])
    }
  }, [query])

  const handleSearch = (searchTerm: string) => {
    setQuery(searchTerm)

    // Add to recent searches
    const updated = [searchTerm, ...recentSearches.filter((s) => s !== searchTerm)].slice(0, 5)
    setRecentSearches(updated)
    localStorage.setItem("webhuma-recent-searches", JSON.stringify(updated))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && query) {
      handleSearch(query)
    }
  }

  // Keyboard shortcut to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen(true)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2">
          <Search className="h-4 w-4 xl:mr-2" />
          <span className="hidden xl:inline-flex">Search products...</span>
          <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl p-0">
        <DialogHeader className="px-6 pt-6 pb-0">
          <DialogTitle className="text-lg font-semibold">Search Products</DialogTitle>
        </DialogHeader>

        <div className="px-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for Adobe, Microsoft, VPN, AI tools..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="pl-10 h-12 text-base"
              autoFocus
            />
          </div>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {query.length === 0 ? (
            <div className="px-6 pb-6">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">Recent Searches</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSearch(search)}
                        className="h-8 px-3 text-sm"
                      >
                        {search}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular Searches */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Popular Searches</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSearch(search)}
                      className="h-8 px-3 text-sm"
                    >
                      {search}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="px-6 pb-6">
              {results.length > 0 ? (
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground mb-3">
                    Found {results.length} result{results.length !== 1 ? "s" : ""}
                  </div>
                  {results.map((result, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors group cursor-pointer"
                      onClick={() => {
                        setOpen(false)
                        // Scroll to services section
                        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                            {result.name}
                          </h4>
                          <Badge variant="outline" className="text-xs">
                            {result.category}
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {result.duration} • {result.type} • {result.warranty}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="font-semibold text-blue-600">{result.price}</div>
                          <Badge variant={result.available ? "secondary" : "destructive"} className="text-xs">
                            {result.available ? "Available" : "Out of Stock"}
                          </Badge>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  ))}

                  {results.length === 8 && (
                    <div className="text-center pt-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setOpen(false)
                          document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                        }}
                      >
                        View all results in services section
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-medium mb-2">No products found</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Try searching for "Adobe", "Microsoft", "VPN", or other keywords
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://t.me/webhumacom" target="_blank">
                      Request Custom Product
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
