import Image from 'next/image'
import { Remarkable } from 'remarkable'
import IEvent from '../utils/interfaces/IEvent'
import { GithubSlugger } from 'github-slugger-typescript'

const WorkshopCard = (props: IEvent) => {
  const md = new Remarkable()
  const parsedDescription = md.render(props.description)
  const date = new Date(props.date)
  const slugger = new GithubSlugger()
  const eventUrl =
    'https://events.purduehackers.com/' + slugger.slug(props.name)

  return (
    <div className="max-w-sm mx-5 mt-5 overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="px-6 py-4">
        <a
          className="mb-2 text-xl font-bold underline text-declaration hover:text-amber-500"
          href={eventUrl}
          target="_blank"
        >
          {props.name}
        </a>
        <p className="text-slate-500">{date.toDateString()}</p>
        <div className="h-40 overflow-auto text-base text-gray-700">
          <div dangerouslySetInnerHTML={{ __html: parsedDescription }}></div>
        </div>
      </div>
      <div className="relative w-full h-52">
        <Image src={props.img} layout="fill" objectFit="contain"></Image>
      </div>

      <div className="px-6 pt-4 pb-2">
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          {props.location}
        </span>
        <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          Hackers: {props.rsvp}
        </span>
      </div>
    </div>
  )
}

export default WorkshopCard