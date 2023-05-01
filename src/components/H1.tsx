interface H1Props {
  text: string
  className?: string
}

export default function H1(props: H1Props) {
  return (
    <h1
      className={`${props.className} text-4xl font-black text-black dark:text-white mb-8`}>
      {props.text}
    </h1>
  )
}
