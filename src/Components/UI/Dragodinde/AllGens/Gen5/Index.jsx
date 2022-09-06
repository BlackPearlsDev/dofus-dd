import React from 'react';

function Dragodinde(props) {
    return (
        <section className='dragodindeZone'>
            <article className='dragodindeCombinaison'>
            <div className='divDragoTxt'>
                    <img src={props.imgUrl1} alt="Dragodinde Pourpre" />
                    <h4>Dragodinde <span className='txtYellow'>Pourpre</span></h4>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 100 Force</p>
                </div>

                <h3 className='plusCombinaison'>+</h3>

                <div className='divDragoTxt'>
                    <img src={props.imgUrl2} alt="Dragodinde Orchidée" />
                    <h4>Dragodinde <span className='txtYellow'>Orchidée</span></h4>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 100 Intelligence</p>
                </div>
            </article>

            <article className='dragodindeCombinaison'>
                <div className='divDragoTxt'>
                    <img src={props.imgUrl3} alt="Dragodinde Indigo et Pourpre" />
                    <h4>Dragodinde <span className='txtYellow'>Indigo et Pourpre</span></h4>
                    <p><span className='txtYellow'>Combinaison:</span> Pourpre et Orchidée (ancêtre Indigo)</p>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 70 Force, 70 Chance</p>
                </div>

                <div className='divDragoTxt'>
                    <img src={props.imgUrl4} alt="Dragodinde Orchidée et Pourpre" />
                    <h4>Dragodinde <span className='txtYellow'>Orchidée et Pourpre</span></h4>
                    <p><span className='txtYellow'>Combinaison:</span> Pourpre et Orchidée</p>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 70 Force, 70 Intelligence</p>
                </div>

                <div className='divDragoTxt'>
                    <img src={props.imgUrl5} alt="Dragodinde Ebène et Orchidée" />
                    <h4>Dragodinde <span className='txtYellow'>Ebène et Orchidée</span></h4>
                    <p><span className='txtYellow'>Combinaison:</span> Pourpre et Orchidée (ancêtre Ebène)</p>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 70 Intelligence, 70 Agilité</p>
                </div>
            </article>
        </section>
    )
}

export default Dragodinde;