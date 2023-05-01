import { FaGithub, FaGlobe } from "react-icons/fa"

interface PortfolioItemProps {
  itemTitle: string
  itemLiveLink: string
  itemSourceLink?: string
  itemStack: string[]
  itemImage: string
}

const PortfolioItem = (props: PortfolioItemProps) => {
  return (
    <div
      className="group relative p-2 flex items-center justify-center overflow-hidden border rounded-2xl screen border-3 border-primary-dark/80 w-full h-64 bg-primary-active-light/80 dark:bg-primary-active-dark md:h-96 md:w-96
      before:content-[''] before:h-1 before:absolute before:z-20 before:left-1/2 before:-translate-x-1/2 before:bg-primary-dark
      after:content-[''] after:h-1 after:absolute after:z-20 after:left-1/2 before:translate-1/2 after:bg-primary-dark before:w-[15%] before:top-0 before:rounded-b-2xl \
      after:w-[25%] after:bottom-0 after:rounded-t-2xl after:-translate-x-1/2 z-10">
      <div className="absolute top-0 left-0 z-20 w-screen h-screen ease-linear screen-overlay bg-gradient-to-b dark:from-primary-light/20 from-primary-dark/20 to-transparent animate-pan-overlay"></div>
      <div
        className="absolute z-30 screen-image animate-pan-image"
        style={{
          backgroundImage: `url(${props.itemImage})`,
        }}></div>
      <div className="relative z-30 flex flex-col items-center justify-center flex-1 w-full h-full border rounded-md screen-content border-primary-dark dark:border-primary-light ">
        <div className="relative flex flex-col items-center gap-4 screen-title">
          <span
            className="relative flex flex-col items-center gap-4 px-1 text-3xl rounded-md cursor-default md:text-3xl text-font-primary-dark bg-background-primary-dark title dark:text-black dark:bg-background-primary-light"
            data-value={props.itemTitle}>
            {props.itemTitle}{" "}
          </span>
          <span className="px-1 text-sm rounded-md cursor-default text-font-primary-dark bg-background-primary-dark stack dark:text-black dark:bg-background-primary-light md:text-lg">
            {props.itemStack}
          </span>
          <div className="flex items-center gap-2 px-1 text-lg text-center rounded-md links-item stack dark:bg-background-primary-light dark:text-black text-font-primary-dark bg-background-primary-dark md:text-lg ">
            <a
              className="flex items-center gap-1 link hover:underline hover:text-primary-hover-light dark:hover:text-primary-hover-dark"
              href={props.itemLiveLink}
              target="_blank">
              <FaGlobe /> Live
            </a>
            {props.itemSourceLink && (
              <a
                className="flex items-center link hover:underline hover:text-primary-hover-light dark:hover:text-primary-hover-dark"
                href={props.itemSourceLink}
                target="_blank">
                Github
                <FaGithub />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
