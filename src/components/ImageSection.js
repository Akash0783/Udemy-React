import sale from "../assets/Images/sale-img.jpg"

function ImageSection(){
    return(
      <div class="sale-img">
        <img src= {sale} alt="Sale-Image" />
        <div class="sale-image__offer">
          <h2>Udemy Flash Sale! 24 hours to save it.</h2>
          <p>
            Get top Courses for just 499. Just one day to save a lifetime to learn
          </p>
        </div>
      </div>
    )
}
export default ImageSection