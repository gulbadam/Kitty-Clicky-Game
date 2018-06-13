import React from 'react';
import Card from "./Card";



const Cardlist = ({ robots }) =>

    (
        <div>
            {robots.map((user, i) => {
                return (<Card key={i} id={robots[i].id}/>)

            })}
        </div>
    )
export default Cardlist