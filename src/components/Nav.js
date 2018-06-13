import React from 'react';
 const Nav = (props) =>(
<div>
         <nav className="bg-washed-green shadow-3">
             <a className="link dim  b f3 purple pl7 w-40" href="/" title="Home">Kitty Clicky Game</a>
             <h2 className={props.clNm || 'tc blue f3  dib  w-40'}>{props.message || "Click an image to begin!"}</h2>
             <h3 className="purple f4  dib w-10" >Score: {props.score}</h3>
             {/* <h3 className="tl gray    f6 f5-ns dib ph5" >|</h3> */}
             <h3 className="purple f4  dib w-10">Top Score: {props.topScore}</h3>
</nav>
     </div>)
export default Nav