import React from 'react';
 const Nav = (props) =>(
<div>
         <nav className="bg-washed-green">
             <a className="link dim  b f3 green pl7 w-25" href="/" title="Home">Kitty Clicky Game</a>
             <h2 className="tc blue f3  dib  w-20">{props.message || "Start"}</h2>
             <h3 className="gray    f6 f5-ns dib w-20" >Score: {props.score}</h3>
             {/* <h3 className="tl gray    f6 f5-ns dib ph5" >|</h3> */}
             <h3 className="gray    f6 f5-ns dib w-20">Top Score: {props.topScore}</h3>
</nav>
     </div>)
export default Nav