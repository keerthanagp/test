import React from 'react'

function Components() {
  return (
    <div>
        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                <i className="fas fa-fw fa-cog"></i>
                <span>Components</span>
            </a>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Components:</h6>
                    
                    <a className="collapse-item" href="/Buttons">Buttons</a>
                    <a className="collapse-item" href="/cards">Cards</a>
                </div>
            </div>
        </li>
    </div>
  )
}

export default Components