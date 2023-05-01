import H1 from "@/components/H1"
import { NextPage } from "next"
import PortfolioItem from "./modules/portfolio/PortfolioItem"

const portfolio: NextPage = () => {
  return (
    <div className="flex flex-col w-full">
      <H1 text="Portfolio" />
      <div className="flex flex-col-reverse flex-wrap items-center justify-center gap-2 mt-4 md:flex-row-reverse ">
        <PortfolioItem
          itemLiveLink="https://wemersonqueiroz.github.io/bootstrap-tindog/"
          itemSourceLink="https://github.com/wemersonqueiroz/bootstrap-tindog"
          itemStack={["HTML ", "CSS ", "Bootstrap "]}
          itemTitle="Landing Page"
          itemImage="./assets/tindog.png"
        />
        <PortfolioItem
          itemLiveLink="https://tailwindlandingpage-hazel.vercel.app/"
          itemSourceLink="https://github.com/wemersonqueiroz/bootstrap-tindog"
          itemStack={["HTML ", "Javascript ", "Tailwind"]}
          itemTitle="Landing Page"
          itemImage="./assets/manage.png"
        />
        <PortfolioItem
          itemLiveLink="https://niche-invest.com/"
          itemStack={["HTML ", "Javascript ", "Tailwind"]}
          itemTitle="Landing Page"
          itemImage="./assets/niche.png"
        />
        <PortfolioItem
          itemLiveLink="https://fem-results-summary-tawny.vercel.app/"
          itemSourceLink="https://github.com/wemersonqueiroz/fem-results-summary"
          itemStack={["HTML ", "Tailwind"]}
          itemTitle="Summary Component"
          itemImage="./assets/result-summary.png"
        />
      </div>
    </div>
  )
}

export default portfolio
