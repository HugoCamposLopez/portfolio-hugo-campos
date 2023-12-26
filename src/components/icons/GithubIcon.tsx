import GitHuSvg from "../../../public/icons/github-mark-white.svg"

interface Props {
  width?: number,
  height?: number
}

export const GithubIcon = ({height, width }: Props) => {
  return (
    <a target="_blank" href="https://github.com/HugoCamposLopez" className="transition hover:scale-125" >
      <img id={"github-icon"} src={GitHuSvg.src} alt={"GithubIcon"} width={width} height={height} />
    </a >
  )
}

