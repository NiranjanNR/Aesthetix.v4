const VerticalBox = (props: { header: string | undefined, description: string | undefined, imagepath: string | undefined }) => {
  return (
      <div className="h-[70vh] w-[39vw] flex justify-center items-center">
          <div>
              <div className="text-center text-2xl font-semibold w-[30vw] mb-4">
              {props.header}
          </div>
          <div className="text-center w-[30vw] mb-12">
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