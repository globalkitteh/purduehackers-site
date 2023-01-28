import Image from 'next/future/image'
import Draggable from 'react-draggable'

const DiscordWindow = ({
  channel,
  content,
  pfpImageSrc,
  username,
  imageSrc,
  imageAlt
}: {
  channel: string
  content: string
  pfpImageSrc: string
  username: string
  imageSrc?: string
  imageAlt?: string
}) => {
  return (
    <Draggable handle=".handle">
      <div className="message border-2 border-black w-11/12 sm:w-96 shadow-email shadow-gray-900/30 h-fit z-0 relative odd:right-40 odd:sm:right-96 sm:odd:top-4 sm:even:bottom-8 even:left-40 even:sm:left-96 sm:first-of-type:right-80 sm:last-of-type:left-80">
        <div className="flex flex-row bg-gray-discord-darker cursor-pointer text-gray-100">
          <p className="px-2 border-r-2 border-b-2 border-black bg-blue-discord hover:bg-discord-light">
            ∆
          </p>
          <div className="grow handle" />
          <p className="handle">{channel}</p>
          <div className="grow handle" />
          <div />
        </div>
        <div className="border-black flex flex-col bg-gray-discord p-2 text-white text-sm">
          <div className="flex flex-row gap-4">
            <div>
              <div className="w-10">
                <Image
                  src={pfpImageSrc}
                  alt="Profile picture"
                  width={0}
                  height={0}
                  sizes="100%"
                  className="rounded-full w-auto h-auto"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-gold-discord">{username}</p>
              <p>{content}</p>
              {imageSrc && imageAlt && (
                <div className="w-1/2">
                  <a href={imageSrc} target="_blank">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      width={0}
                      height={0}
                      sizes="100%"
                      className="rounded w-auto h-auto mt-1"
                    />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  )
}

export default DiscordWindow
