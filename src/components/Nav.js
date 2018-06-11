import React from 'react';
 const Nav= (props) =>(
<div>
<nav className="pa3 pa4-ns">
             <a className="link dim black b f6 f5-ns dib mr3" href="#" title="Home">Kitty Clicky Game</a>
             <h2 className="link dim gray f6 f5-ns dib mr3">{props.message || "Start"}</h2>
             <h3 className="link dim gray    f6 f5-ns dib mr3" >Score: {props.score}</h3>
             <h3 className="link dim gray    f6 f5-ns dib mr3" >|</h3>
             <h3 className="link dim gray    f6 f5-ns dib">Top Score: {props.topScore}</h3>
</nav>
     </div>)
export default Nav