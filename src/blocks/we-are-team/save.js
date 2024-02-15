export default function({attributes}){
    const {
      oneImage,
      twoImage,
      threeImage,
      fourImage,
      five,
      perOne,
      perTwo,
      perThree,
      perFour
    } = attributes;
    return (
      <div className="omg">
        <div className="hex-wrap">
          <div className="hex tar negr" data-h2={perOne}></div>
          <div className="hex a1" data-h1="Our"></div>
          <div className="hex a2" data-h1="Team"></div>
          <div className="hex" data-h2={perTwo}></div>
    
          <div className="hex a2"></div>
    
          <div className="hex hex-layer">
            <a className="hex modal-btn" style={{backgroundImage: `url(${oneImage})`}}></a>
          </div>
    
          <div className="hex hex-layer">
            <a className="hex tot" style={{backgroundImage: `url(${twoImage})`}}></a>
          </div>
    
          <div className="hex a2"></div>
    
          <div className="hex tar" data-h2={perThree}></div>
    
          <div className="hex hex-layer">
            <a className="hex" style={{backgroundImage: `url(${threeImage})`}}></a>
          </div>
    
          <div className="hex hex-layer">
            <a className="hex tob" style={{backgroundImage: `url(${fourImage})`}}></a>
          </div>
          <div className="hex negr" data-h2={perFour}></div>
  
          <div className="hex a1"></div>
          <div className="hex a1"></div>
    
          <a href="" className="overlay"></a>
        </div>
      </div>
    );
  }