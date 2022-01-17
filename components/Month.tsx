import Container from './Container'
import Cards from './Cards'
import type { CardContent } from '../types'

const Month = ({ data, light, title, intro }: Props) => {
  return (
    <Container>
      <div className={`${light ? 'text-black' : 'text-white'} py-10`}>
        <h1 className="font-bold text-2xl py-4">{title}</h1>

        <p className="capitalize font-light text-xs md:text-sm lg:text-base py-1">
          {intro}
        </p>

        <Cards data={data} light={light} />
      </div>
    </Container>
  )
}

export default Month

type Props = {
  data: CardContent[]
  light?: boolean
  title: string
  intro: string
}
