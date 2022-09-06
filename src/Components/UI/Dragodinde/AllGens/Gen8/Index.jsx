import React from 'react';

function Dragodinde(props) {
    return (
        <section className='dragodindeZone'>
            <article className='dragodindeCombinaison'>
                <div className='divDragoTxt'>
                    <img src={props.imgUrl1} alt="Dragodinde Ivoire et Pourpre" />
                    <h4>Dragondinde <span className='txtYellow'>Ivoire et Pourpre</span></h4>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 70 Force, 50 Puissance</p>
                </div>

                <h3 className='plusCombinaison'>+</h3>

                <div className='divDragoTxt'>
                    <img src={props.imgUrl2} alt="Dragodinde Ivoire et Turquoise" />
                    <h4>Dragondinde <span className='txtYellow'>Ivoire et Turquoise</span></h4>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 60 Prospection, 50 Puissance</p>
                </div>

                <div className='divDragoTxt'>
                    <img src={props.imgUrl3} alt="Dragodinde Turquoise et Orchidée" />
                    <h4>Dragondinde <span className='txtYellow'>Turquoise et Orchidée</span></h4>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 70 Intelligence, 60 Prospection</p>
                </div>

                <h3 className='plusCombinaison'>+</h3>

                <div className='divDragoTxt'>
                    <img src={props.imgUrl2} alt="Dragodinde Ivoire et Turquoise" />
                    <h4>Dragondinde <span className='txtYellow'>Ivoire et Turquoise</span></h4>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 60 Prospection, 50 Puissance</p>
                </div>
            </article>

            <article className='dragodindeCombinaison'>
                <div className='divDragoTxt'>
                    <img src={props.imgUrl4} alt="Dragodinde Émeraude" />
                    <h4>Dragondinde <span className='txtYellow'>Émeraude</span></h4>
                    <p><span className='txtYellow'>Combinaison:</span> Ivoire Pourpre et Ivoire Turquoise</p>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 12% Critique</p>
                </div>

                <div className='divDragoTxt'>
                    <img src={props.imgUrl5} alt="Dragodinde Prune" />
                    <h4>Dragondinde <span className='txtYellow'>Prune</span></h4>
                    <p><span className='txtYellow'>Combinaison:</span> Turquoise Orchidée et Ivoire Turquoise</p>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 2 PO</p>
                </div>
            </article>
        </section>
    )
}

export default Dragodinde;