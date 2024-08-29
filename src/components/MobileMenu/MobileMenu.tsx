"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Arrow, Caretdown } from "../Icons/Icons"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
interface MobileMenuProps {
  isOpen: boolean
}
const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const [isSelectorOpen, setIsSelectOpen] = useState<boolean>(false)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <div
      className={cn(
        "h-screen px-6 bg-white w-full fixed md:hidden top-0 z-50 -translate-y-full transition-all  duration-300 ease-in-out overflow-y-auto py-24 pb-44",
        isOpen && "translate-y-0"
      )}
    >
      <ul className="font-bold space-y-6 mb-16">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer flex justify-between items-center">
          <p>Product</p>
          <Caretdown
            onClick={() => setIsSelectOpen((prev) => !prev)}
            className={cn(
              "transition duration-300 ease-in-out",
              isSelectorOpen && "rotate-180 "
            )}
          />
        </li>

        {isSelectorOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -35 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 0 }}
            className={cn(
              "space-y-6 flex flex-col transition duration-500 ease-in-out w-full items-start justify-start font-normal  translate-y-0"
              // isSelectorOpen && "translate-y-[10px]"
            )}
          >
            <li className=" cursor-pointer transition duration-300 ease-in-out  w-full">
              Why BestChat
              <div className="w-full h-[1px] bg-black/5 mt-4"></div>
            </li>
            <li className=" cursor-pointer transition duration-300 ease-in-out w-full">
              Tour
              <div className="w-full h-[1px] bg-black/5 mt-4"></div>
            </li>
            <li className=" cursor-pointer transition duration-300 ease-in-out w-full">
              {" "}
              Features
              <div className="w-full h-[1px] bg-black/5 mt-4"></div>
            </li>
            <li className=" cursor-pointer transition duration-300 ease-in-out w-full">
              Company
              <div className="w-full h-[1px] bg-black/5 mt-4"></div>
            </li>
            <li className=" cursor-pointer  w-full">
              FAQs
              <div className="w-full h-[1px] bg-black/5 mt-4"></div>
            </li>
          </motion.ul>
        )}

        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">FAQs</li>
        <li className="cursor-pointer">Blog</li>
      </ul>

      <div className="w-full h-[1px] bg-black/5 my-8"></div>

      <span className={cn("space-y-4 transition duration-300 ease-in-out")}>
        <Input
          type="email"
          placeholder="Enter your work Email"
          className="bg-[#f3f7f3] border-none focus:border-none py-6"
        />
        <div className="bg-black relative group hover:bg-secondary transition duration-300 ease-in-out grid place-items-center rounded-lg  py-2 ">
          <Button className="group-hover:bg-secondary transition duration-300 ease-in-out flex items-center justify-center ">
            <p className="text-white font-bold">Try for free Now</p>
            <Arrow
              width={20}
              height={16}
              className=" absolute bottom-[35%] right-[5.8rem]  group-hover:right-[5rem] group-hover: group-transition duration-300 ease-in-out"
            />
          </Button>
        </div>
      </span>
    </div>
  )
}

export default MobileMenu