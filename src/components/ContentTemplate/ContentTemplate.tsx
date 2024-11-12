
const ContentTemplate = (props: {
    imagepath: string | undefined,
    heading: string | undefined,
    description: string | undefined,
    direction: string | undefined,
    style?: React.CSSProperties // Add this line for inline styles
 }) => {
  return (
      <div>
          {props.direction === "right" ? 
          <div className="md:h-[58vh] w-[100vw] md:flex">
          <div className="w-[50vw] flex justify-center items-center">
          <img className={`  md:h-[40vh]`} src={props.imagepath} style={props.style}/>
          </div>
          <div className="md:w-[50vw] flex items-center">
                      <div>
                          <div className="text-2xl font-bold text-[#5b255d] mb-7">
                  {props.heading}
              </div>
              <div className="md:w-[36vw] text-[#424141] text-[16.5px]" >
                  {props.description}
              </div>
              </div>
          </div>
              </div>

              : 

          <div className="md:h-[58vh] w-[100vw] md:flex gap-32">
          <div className="md:w-[50vw] flex items-center md:justify-end ">
                      <div>
                          <div className="text-2xl font-bold text-[#5b255d] mb-7">
                  {props.heading}
              </div>
              <div className="md:w-[36vw] text-[#424141] text-[16.5px]">
                  {props.description}
              </div>
              </div>
          </div>
                  <div className="md:w-[50vw] flex justify-start items-center">
              <img className=" md:h-[40vh]" src={props.imagepath} />
          </div>
    </div>
          }
          
          
      </div>
  )
}

export default ContentTemplate