import ReactPlayer from "react-player"

const VideoTemplate = (props: { 
    header: string | undefined,
    smallheader: string | undefined,
    description: string | undefined,
    videolink: string | undefined,
 }) => {
  return (
      <div className="bg-[#3f1846f0] md:h-[60vh] flex justify-center gap-9 mb-5">
          <div className="md:flex items-center px-10 md:w-[80vw]">
              <div className="w-full">
                  <ReactPlayer
        className="react-player"
                      url={props.videolink}
                      width="100%"
                      controls
      />
          </div>
          <div className="md:w-[30vw] ml-9">
              <div className="flex justify-center">
                  <div className=" text-[24px] font-bold md:w-[30vw] mb-4 text-[#e3e3e3] ">
              {props.header}
             </div>
             
                  </div>
                  <div className="flex justify-center">
                  <div className=" md:w-[30vw] md:mb-2 text-[#b879c3] font-semibold text-[18px]">
              {props.smallheader}
                      </div>
                  </div>
                      
              <div className="flex justify-center">
                  <div className=" md:w-[30vw] text-[#a5a5a5] font-semibold text-[15px]">
              {props.description}
          </div>
          </div>
          </div>
          </div>
    </div>
  )
}

export default VideoTemplate