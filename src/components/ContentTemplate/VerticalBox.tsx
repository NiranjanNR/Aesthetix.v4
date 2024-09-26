const VerticalBox = (props: { header: string | undefined, description: string | undefined, imagepath: string | undefined }) => {
  return (
      <div className="h-[75vh] w-[39vw] flex justify-center items-center">
          <div>
              <div className="text-center text-[20px] font-bold w-[30vw] mb-4 text-[#5b255d] ">
              {props.header}
             </div>
          <div className="text-center w-[30vw] mb-12 text-[#424141] text-[15px] text-justify">
              {props.description}
          </div>
          <div>
              <img src={props.imagepath} className="h-[32vh] w-[32vw]"/>
          </div>
          </div>
    </div>
  )
}

export default VerticalBox