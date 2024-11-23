import React, {useState} from 'react'

function Benefits() {
    const imgBenefitsLocation = './src/assets/benefits';
    const benefitsArr = [
                        {id:1, img:'vip.svg', text:'Exclusive Deals for VIP 2 and up'},
                        {id:2, img:'start.svg', text:'Weekly New Arrival'},
                        {id:3, img:'delivery.svg', text:'Free Shipping On Orders Over $100'},
                        {id:4, img:'pin-location.svg', text:'Track Your Order'},
                        {id:5, img:'price-tag.svg', text:'10% Off On Your First Order!'},
    ];

    const html = benefitsArr.map(benefitsitem => <div className='benefits-sub-container' key={benefitsitem.id}>   
                                                    <span>
                                                        <img src={imgBenefitsLocation + "/" + benefitsitem.img} width={25} height={25} />
                                                        <p className="benefits-text">{benefitsitem.text}</p>
                                                    </span>
                                                    
                                                </div>
                                );
    return(
        <>
            <div className="benefits-container">
                {html}
            </div>
        </>
    );
}

export default Benefits