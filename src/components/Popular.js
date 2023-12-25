import c1 from "../assets/Images/c1.jpg"
import c2 from "../assets/Images/c2.jpg"
import c3 from "../assets/Images/c3.jpg"
import c4 from "../assets/Images/c4.jpg"

function Popular(){
    return(
        <div class="popular">
        <h1 class="popular__title">Most Popular</h1>
        <p class="popular__subtitle">Pick the best fit</p>
        <div class="popular__container">
          <div class="course-card">
            <img src= {c1} alt="" />
            <h3>2023 Python for Data Visualization Masterclass</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>449 <del>2999</del></p>
          </div>
          <div class="course-card">
            <img src= {c2} alt="" />
            <h3>Basic to Advance Programming with EMC</h3>
            <p>Col Steele</p>
            <p>3.5 ⭐⭐⭐</p>
            <p>449 <del>2999</del></p>
          </div>
          <div class="course-card">
            <img src= {c3} alt="" />
            <h3>Web Development Bootcamp <br />2023</h3>
            <p>Col Steele</p>
            <p>4 ⭐⭐⭐⭐</p>
            <p>449 <del>2999</del></p>
          </div>
          <div class="course-card">
            <img src={c4} alt="" />
            <h3>Master UI/UX Designing with <br />Figma</h3>
            <p>Col Steele</p>
            <p>2 ⭐⭐</p>
            <p>449 <del>2999</del></p>
          </div>
          <div class="course-card">
            <img src={c1} alt="" />
            <h3>2023 Python for Data Visualization Masterclass</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>449 <del>2999</del></p>
          </div>
          <div class="course-card">
            <img src={c2} alt="" />
            <h3>Basic to Advance Programming with EMC</h3>
            <p>Col Steele</p>
            <p>3.5 ⭐⭐⭐</p>
            <p>449 <del>2999</del></p>
          </div>
          <div class="course-card">
            <img src={c3} alt="" />
            <h3>Web Development Bootcamp <br />2023</h3>
            <p>Col Steele</p>
            <p>4 ⭐⭐⭐⭐</p>
            <p>449 <del>2999</del></p>
          </div>
          <div class="course-card">
            <img src={c4} alt="" />
            <h3>Master UI/UX Designing with <br />Figma</h3>
            <p>Col Steele</p>
            <p>2 ⭐⭐</p>
            <p>449 <del>2999</del></p>
          </div>
        </div>
      </div>
    )
}
export default Popular