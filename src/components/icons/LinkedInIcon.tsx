import linkedinIcon from "../../../public/icons/linkedin-icon.png"

interface Props {
  width?: number,
  height?: number
}

export const LinkedInIcon = ({ height, width }: Props) => {
  return (
    <a target="_blank" href="https://www.linkedin.com/in/hugocamposlopez/" className="transition hover:scale-125">
      <img id={"linkeid-icon"} src={linkedinIcon.src} alt={"LinkedIn Icon"} width={width} height={height} />
    </a>

  )
}

