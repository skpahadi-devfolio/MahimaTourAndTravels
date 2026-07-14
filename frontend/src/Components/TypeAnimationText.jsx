import { TypeAnimation } from "react-type-animation"

const TypeAnimationText = ({texts}) => {
  return (
    <TypeAnimation
    sequence={texts.flatMap((text) => [
        text,
        1000
    ])}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    className="text-xl md:text-3xl"
    />
  )
}

export default TypeAnimationText
