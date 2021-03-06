import React from 'react';
import "../styles/Card.css"
const Card = (props) => (
    <div className="tc bg-light-green grow dib w-20  mw5 f5-ns  black-95 pa3 ph2 ma2 ba b--light-silver shadow-3 br2 pointer kitty" onClick={props.clickKitten}>
    <div>
            <img alt={props.id}  src={`https://robohash.org/${props.name}.png?set=set4`} />
     </div>
    </div>)

export default Card;