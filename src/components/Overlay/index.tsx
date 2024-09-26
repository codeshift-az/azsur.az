
interface Props{
    heading:string,
    pageName:string,
    bgUrl:string 
}

const Overlay = ({heading, pageName, bgUrl}:Props) => {
  return (
    <div className="breadcrumb-area" style={{backgroundImage:`url(${bgUrl})`}}>
          <div className="overly-bread" />
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-head text-center">
                  <h3 className="bread-heading">{heading}</h3>
                  <ul>
                    <li className="bread-first">RoyalSteel</li>
                    <li>{pageName}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Overlay