import React from 'react'

const Nav = ({setCategory}) => {


    

  return (
    <div>
           <nav className="navbar navbar-expand-lg bg-danger">
  <div className="container-fluid">
    <a className="navbar-brand bg-white rounded  "  onClick={() => setCategory("health")}>Charity App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      
        <li className="nav-item">
          <a className="nav-link text-black" onClick={() => setCategory("poverty")} aria-disabled="true">Poverty</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-black" onClick={() => setCategory("mental-health")} aria-disabled="true">Mental-Health</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-black" onClick={() => setCategory("disabilities")}  href="#">Disabilities</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-black" onClick={() => setCategory("adoption")} aria-current="page" href="#">Adoption</a>
        </li>
      

        <li className="nav-item">
          <a className="nav-link text-black" onClick={() => setCategory("environment")} aria-disabled="true">Environment</a>
        </li>
  
        <li className="nav-item">
          <a className="nav-link text-black" onClick={() => setCategory("immigrants")} aria-disabled="true">Immigrants</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-black" onClick={() => setCategory("animals")} href="#">Animals</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-black" onClick={() => setCategory("oceans")} href="#">Oceans</a>
        </li>
       
     

      
       
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav
