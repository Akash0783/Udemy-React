// Creating Navbar
function Navbar(){
    return(
      <div class="navbar">
      <div class="navbar-sec1">
        <h1 class="navbar-sec1__title">Udemy</h1>
      </div>
      <div class="navbar-sec2">
        <i class="fa-solid fa-magnifying-glass" style={{color: '#070808'}}></i>
        <input placeholder="Search for anything here. Tech,Business,Art..." />
      </div>
      <div class="navbar-sec3">
        <p>Courses</p>
        <div class="mylearning">
          <p>My Learning</p>
          <div class="mylearning__popup">
            <p>You did not purchase anything yet</p>
          </div>
        </div>
        <i class="fa-solid fa-cart-shopping" style={{color: '#0a0a0a'}}></i>
        <i class="fa-solid fa-bell" style= {{color:'#00000'}}></i>
        <i class="fa-solid fa-user" style={{color: '#0c0d0d'}}></i>
      </div>
      <div class="navbar-sec4">
        <i class="fa-solid fa-bars" style={{color: '#00040a'}}></i>
      </div>
    </div>
  
    )
  }
export default Navbar
  
  