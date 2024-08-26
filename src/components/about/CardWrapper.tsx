import { cn } from "@/lib/utils"
import React from "react"
interface CardWraperProps {
  children: React.ReactNode
  className?: string
}
const CardWraper = ({ children, className }: CardWraperProps) => {
  return (
    <div
      className={cn(
        "bg-white  flex justify-between space-x-5 rounded-[16px] px-8 py-9",
        className
      )}
    >
      {children}
    </div>
  )
}

export default CardWraper