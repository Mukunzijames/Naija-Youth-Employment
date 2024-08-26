/* eslint-disable @next/next/no-img-element */
import  CardWraper  from "./CardWrapper"
interface CardProps {
  icons: string
  text: string
}
const Card = ({ icons, text }: CardProps) => {
  return (
    <CardWraper>
      <span className=" min-w-[40px] md:min-w-[60px] min-h-[50px] md:min-h-[70px]">
        <img src={icons} style={{ objectFit: "cover" }} alt="image" />
      </span>

      <h3 className="font-semibold">{text}</h3>
    </CardWraper>
  )
}

export default Card