import React from 'react';
 const Nav= (props) =>(
<div>
         <nav className="bg-washed-green">
             <a className="link dim black b f6 f5-ns mh1" href="#" title="Home">Kitty Clicky Game</a>
             <h2 className="gray f4 f5-ns dib mr3 mh1">{props.message || "Start"}</h2>
             <h3 className="gray    f6 f5-ns dib mh5" >Score: {props.score}</h3>
             <h3 className="gray    f6 f5-ns dib" >|</h3>
             <h3 className="gray    f6 f5-ns dib mh5">Top Score: {props.topScore}</h3>
</nav>
     </div>)
export default Nav