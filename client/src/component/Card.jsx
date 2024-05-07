import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { Carousel } from "flowbite-react";

export default function Card({trip , getKeyword}) {
  return (
    <div className="rounded-lg bg-emerald-900 bg-opacity-90 p-2 flex max-md:flex-col gap-5 shadow-lg relative">
        <div className="tooltip absolute top-0 right-0 p-4 text-blue-500 font-extrabold text-2xl z-10" data-tip="copy to Clipboard">
          <button onClick={() => navigator.clipboard.writeText(trip.url)}> 
            <FontAwesomeIcon icon={faCopy} />
          </button>
        </div>
        <div className='w-2/4 max-md:w-full h-80 overflow-hidden rounded-lg max-md:mt-4'>
            <Carousel indicators={false} draggable={false}>
              {
                trip.photos.map((img , index) => {
                  return <img key={index} src={img} />
                })
              } 
            </Carousel>
        </div>
        <div className="w-2/3 max-md:w-full max-md:text-center rounded-lg text-white font-serif text-lg flex flex-col justify-around">
            <h1 className="text-2xl font-semibold">{trip.title}</h1>
            <p className="px-5">{trip.description.slice(0,100)} <a href={trip.url} target="_blank" className='text-blue-600 underline'>อ่านต่อ</a></p>
            <div className="flex w-full gap-2 px-5 items-center max-md:flex-col "> 
                <span className=' w-28'>Categrories :</span>
                <div className="flex gap-1 items-center flex-wrap">
                    {
                      trip.tags.map((tag , index)=>{
                          if (index === trip.tags.length - 1) {
                            return <>
                                    <span>และ</span>
                                    <a className="p-1 rounded bg-black cursor-pointer" onClick={()=>getKeyword(tag)} >{tag}</a>
                                  </>
                          } else {
                            return <a className="p-1 rounded bg-black cursor-pointer" onClick={()=>getKeyword(tag)} >{tag}</a>
                        }
                      })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
