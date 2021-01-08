import React from "react"
import {Link} from "react-router-dom"

function Http404(props) {

  return (
    <div>
      <img src="https://picsum.photos/id/3/400/300" className="w-100" alt="" />
      <h1>Not Found</h1>
      <h2><Link to="/" className="">Home Page</Link></h2>
    </div>
  )
}

export default Http404;