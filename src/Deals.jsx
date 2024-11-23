import React, {useState} from 'react'

function Deals() {
    const dealssArr = [
                        {id:1, maintext:'$5 OFF', subtext:'on orders above $50'},
                        {id:2, maintext:'$15 OFF', subtext:'on orders above $75'},
                        {id:3, maintext:'$20 OFF', subtext:'on orders above $150'},
                        {id:4, maintext:'$30 OFF', subtext:'on orders above $200'},
    ];  
    const listOfDeatils = dealssArr.map(dealsData => <div className="deals-items-container"><div className="main-text">{dealsData.maintext}</div><div className="sub-text">{dealsData.subtext}</div></div>)
    return (
        <div className="deals-main-container">
            {listOfDeatils}
            <button className='deals-btn'>check out all site-wide deals</button>
        </div>
    );
}

export default Deals