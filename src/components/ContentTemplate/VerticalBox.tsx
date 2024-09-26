const VerticalBox = (props: { header: string | undefined, description: string | undefined, imagepath: string | undefined }) => {
  return (
      <div className="my-14 w-[39vw] flex justify-center items-center">
          <div>
              <div className="flex justify-center">
                  <div className="text-center text-[20px] font-bold w-[30vw] mb-4 text-[#5b255d] ">
              {props.header}
             </div>
              </div>
              <div className="flex justify-center">
                  <div className="text-center w-[30vw] mb-12 text-[#424141] text-[15px]">
              {props.description}
          </div>
          </div>
          <div>
              <img src={props.imagepath} className="h-[32vh] w-[32vw]"/>
          </div>
          </div>
    </div>
  )
}

export default VerticalBox