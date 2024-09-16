
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
          <div className="h-[58vh] w-[100vw] flex">
          <div className="w-[50vw] flex justify-center items-center">
          <img className={` w-[30vw] h-[40vh]`} src={props.imagepath} style={props.style}/>
          </div>
          <div className="w-[50vw] flex items-center">
                      <div>
                          <div className="text-2xl font-semibold text-[#5b255d] mb-7">
                  {props.heading}
              </div>
              <div className="w-[36vw]">
                  {props.description}
              </div>
              </div>
          </div>
              </div>

              : 

          <div className="h-[58vh] w-[100vw] flex gap-32">
          <div className="w-[50vw] flex items-center justify-end ">
                      <div>
                          <div className="text-2xl font-semibold text-[#5b255d] mb-7">
                  {props.heading}
              </div>
              <div className="w-[36vw]">
                  {props.description}
              </div>
              </div>
          </div>
                  <div className="w-[50vw] flex justify-start items-center">
              <img className="w-[30vw] h-[40vh]" src={props.imagepath} />
          </div>
    </div>
          }
          
          
      </div>
  )
}

export default ContentTemplate