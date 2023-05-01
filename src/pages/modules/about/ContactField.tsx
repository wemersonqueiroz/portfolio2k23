interface ContactFieldProps {
  icon: React.ReactNode
  title: string
  text?: string
  children?: React.ReactNode
  hr?: boolean
}

export default function ContactField(props: ContactFieldProps) {
  return (
    <>
      <div className="flex items-center space-x-2 text-start">
        <div className="w-8 h-8 p-2 rounded-lg bg-secondary-light dark:bg-secondary-dark first:text-black first:dark:text-white first:drop-shadow-lg">
          {props.icon}
        </div>
        <div className="flex flex-col text-white dark:text-black ">
          <p className="text-xs font-medium">{props.title}</p>
          {props.children}
          {props.text}
        </div>
      </div>
      {props.hr && <hr className="mt-1 border-background-primary-dark " />}
    </>
  )
}
