import React from 'react';

function Dragodinde(props) {
    return (
        <section className='dragodindeZone'>
            <article className='dragodindeCombinaison'>
                <div className='divDragoTxt'>
                    <img src={props.imgUrl1} alt="Dragodinde Ivoire" />
                    <h4>Dragondinde <span className='txtYellow'>Ivoire</span></h4>
                    <p><span className='txtYellow'>Stats:</span>  50 Vitalité, 50 Puissance</p>
                </div>

                <div className='divDragoTxt'>
                    <img src={props.imgUrl2} alt="Dragodinde Turquoise" />
                    <h4>Dragondinde <span className='txtYellow'>Turquoise</span></h4>
                    <p><span className='txtYellow'>Stats:</span>  50 Vitalité, 80 Prospection</p>
                </div>
            </article>

            <article className='dragodindeCombinaison'>
                <div className='divDragoTxt'>
                    <img src={props.imgUrl3} alt="Dragodinde Ivoire et Pourpre" />
                    <h4>Dragondinde <span className='txtYellow'>Ivoire et Pourpre</span></h4>
                    <p><span className='txtYellow'>Combinaison:</span> Ivoire et Turquoise (ancêtre Pourpre)</p>
                    <p><span className='txtYellow'>Stats:</span>  100 Vitalité, 40 Force, 40 Puissance</p>
                </div>

                <div className='divDragoTxt'>
                    <img src={props.imgUrl4} alt="Dragodinde Ivoire et Turquoise" />
                    <h4>Dragondinde <span className='txtYellow'>Ivoire et Turquoise</span></h4>
                    <p><span className='txtYellow'>Combinaison:</span> Ivoire et Turquoise</p>
                    <p><span className='txtYellow'>Stats:</span>  100 Vitalité, 40 Prospection, 40 Puissance</p>
                </div>

                <div className='divDragoTxt'>
                    <img src={props.imgUrl5} alt="Dragodinde Turquoise et Orchidée" />
                    <h4>Dragondinde <span className='txtYellow'>Turquoise et Orchidée</span></h4>
                    <p><span className='txtYellow'>Combinaison:</span> Ivoire et Turquoise (ancêtre Orchidée)</p>
                    <p><span className='txtYellow'>Stats:</span>  100 Vitalité, 60 Intelligence, 40 Prospection</p>
                </div>
            </article>
        </section>
    )
}

export default Dragodinde;