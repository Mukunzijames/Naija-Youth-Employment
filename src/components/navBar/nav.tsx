"use client"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { Close, List } from "../Icons/Icons"
import MobileMenu from "../MobileMenu/MobileMenu"
import { Button } from "../ui/button"
import logo from "@/image/image.png"
/* eslint-disable @next/next/no-img-element */

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScroll, setIsScroll] = useState(false)
  const [prevScrollY, setPrevScrollY] = useState(0)
  const [currentScrollY, setCurrentScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setCurrentScrollY(currentScrollY)

      if (currentScrollY === 0) {
        setIsScroll(false)
      }

      if (currentScrollY < prevScrollY) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }

      setPrevScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [prevScrollY, currentScrollY])

  return (
    <>
      <nav
        className={cn(
          "absolute w-full top-0 py-6 bg-white/75 backdrop-blur-[14px] transition-all duration-500 ease-in-out -translate-y-full",
          currentScrollY > 0 && "fixed w-full shadow-xl",
          isMenuOpen && "shadow-none",
          (currentScrollY === 0 || isScroll || isMenuOpen) && "translate-y-0",
          isMenuOpen && "backdrop-blur-0 bg-white"
        )}
        style={{ zIndex: "1000" }}
      >
        <div className="px-4 md:container flex  items-center justify-between ">
          <div className="flex items-center md:space-x-7 space-x-3">
            <img src={""} width={150} height={30} alt="logo" />
            <span className="group transition duration-300 ease-in-out mt-2">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="group-hover:text-secondary text-[16px] flex space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        className="fill-black group-hover:fill-secondary cursor-pointer mt-1 transition duration-300 ease-in-out"
                        viewBox="0 0 256 256"
                      >
                        <path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20ZM107.07,172h41.86A115.75,115.75,0,0,1,128,209.85,115.75,115.75,0,0,1,107.07,172Zm-5.66-24a142.55,142.55,0,0,1,0-40h53.18a142.55,142.55,0,0,1,0,40ZM44,128a83.49,83.49,0,0,1,2.43-20H77.22a164.54,164.54,0,0,0,0,40H46.43A83.49,83.49,0,0,1,44,128ZM148.93,84H107.07A115.75,115.75,0,0,1,128,46.15,115.75,115.75,0,0,1,148.93,84Zm29.85,24h30.79a83.52,83.52,0,0,1,0,40H178.78a164.54,164.54,0,0,0,0-40Zm20.74-24H174a148.59,148.59,0,0,0-13.95-33.63A84.5,84.5,0,0,1,199.52,84ZM96,50.37A148.59,148.59,0,0,0,82,84H56.48A84.5,84.5,0,0,1,96,50.37ZM56.48,172H82a148.59,148.59,0,0,0,14,33.63A84.5,84.5,0,0,1,56.48,172Zm103.57,33.63A148.59,148.59,0,0,0,174,172h25.52A84.5,84.5,0,0,1,160.05,205.63Z" />
                      </svg>
                      <p>English</p>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col space-y-4 py-4 px-8">
                      <NavigationMenuLink className="cursor-pointer hover:text-secondary">
                        Frensh
                      </NavigationMenuLink>
                      <NavigationMenuLink className="cursor-pointer hover:text-secondary">
                        Espaniol
                      </NavigationMenuLink>
                      <NavigationMenuLink className="cursor-pointer hover:text-secondary">
                        Kinyarwanda
                      </NavigationMenuLink>
                      <NavigationMenuLink className="cursor-pointer hover:text-secondary">
                        Kiswahiri
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </span>
          </div>
          <div className="block md:hidden">
            {isMenuOpen ? (
              <Close
                width={25}
                height={25}
                className="transition duration-500 ease-in-out"
                onClick={() => setIsMenuOpen((pre) => !pre)}
              />
            ) : (
              <List
                width={25}
                height={25}
                className="transition duration-500 ease-in-out"
                onClick={() => setIsMenuOpen((pre) => !pre)}
              />
            )}
          </div>
          {/* {isMenu && <div className="h-full w-full bg-white"></div>} */}
          <div className="hidden md:flex justify-center items-center space-x-12 font-semibold">
            <ul className="flex space-x-12 ">
              <li className="cursor-pointer hover:text-secondary transition duration-300 ease-in-out">
                Home
              </li>
              <li className="cursor-pointer hover:text-secondary ">
                <NavigationMenu className="p-0 my-0">
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="hover:text-secondary text-[16px] font-semibold transition duration-300 ease-in-out">
                        Product
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="py-4 px-8">
                        <ul className="space-y-4">
                          <li className="cursor-pointer hover:text-secondary transition duration-300 ease-in-out">
                            Product01
                          </li>
                          <li className="cursor-pointer hover:text-secondary transition duration-300 ease-in-out">
                            Product02
                          </li>
                          <li className="cursor-pointer hover:text-secondary transition duration-300 ease-in-out">
                            Product03
                          </li>
                          <li className="cursor-pointer hover:text-secondary transition duration-300 ease-in-out">
                            Product04
                          </li>
                          <li className="cursor-pointer hover:text-secondary transition duration-300 ease-in-out">
                            Product05
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </li>
              <li className="cursor-pointer hover:text-secondary transition duration-300 ease-in-out">
                Company
              </li>
              <li className="cursor-pointer hover:text-secondary transition duration-300 ease-in-out">
                FAQs
              </li>
              <li className="cursor-pointer hover:text-secondary transition duration-300 ease-in-out">
                Blog
              </li>
              <li className="cursor-pointer hover:text-secondary transition duration-300 ease-in-out">
                Sign in
              </li>
            </ul>
            <Button variant={"default"}>
              <p className="text-white ">Get Started</p>
            </Button>
          </div>
        </div>
      </nav>
      {isMenuOpen && <MobileMenu isOpen={isMenuOpen} />}
    </>
  )
}

export default Navbar
