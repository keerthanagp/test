import React from 'react'
import { useNavigate } from 'react-router-dom'

function Utilities() {
  
  return (
    <div>
        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i className="fas fa-fw fa-wrench"></i>
                <span>Utilities</span>
            </a>
            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Utilities:</h6>
                    <a className="collapse-item" href="utilities-color" >Colors</a>
                    <a className="collapse-item" href="utilities-border">Borders</a>
                    <a className="collapse-item" href="utilities-animation">Animations</a>
                    <a className="collapse-item" href="utilities-other">Other</a>
                </div>
            </div>
        </li>
    </div>
  )
}

export default Utilities