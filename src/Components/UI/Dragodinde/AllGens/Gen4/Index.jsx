import React from 'react';

function Dragodinde(props) {
    return (
        <section className='dragodindeZone'>
            <article className='dragodindeCombinaison'>
                <div className='divDragoTxt'>
                    <img src={props.imgUrl1} alt="Dragodinde Amande Rousse" />
                    <h4>Dragodinde <span className='txtYellow'>Amande Rousse</span></h4>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 1000 Initiative, 35 Soins</p>
                </div>

                <h3 className='plusCombinaison'>+</h3>

                <div className='divDragoTxt'>
                    <img src={props.imgUrl2} alt="Dragodinde Ebène Indigo" />
                    <h4>Dragodinde <span className='txtYellow'>Ebène Indigo</span></h4>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 70 Chance, 70 Agilité</p>
                </div>

                <div className='divDragoTxt'>
                    <img src={props.imgUrl3} alt="Dragodinde Dorée Rousse" />
                    <h4>Dragodinde <span className='txtYellow'>Dorée Rousse</span></h4>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 1 Invocation, 35 Soins</p>
                </div>

                <h3 className='plusCombinaison'>+</h3>

                <div className='divDragoTxt'>
                    <img src={props.imgUrl2} alt="Dragodinde Ebène Indigo" />
                    <h4>Dragodinde <span className='txtYellow'>Ebène Indigo</span></h4>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 70 Chance, 70 Agilité</p>
                </div>
            </article>

            <article className='dragodindeCombinaison'>
                <div className='divDragoTxt'>
                    <img src={props.imgUrl4} alt="Dragodinde Pourpre" />
                    <h4>Dragodinde <span className='txtYellow'>Pourpre</span></h4>
                    <p><span className='txtYellow'>Combinaison:</span> Amande Rousse et Ebène Indigo</p>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 100 Force</p>
                </div>

                <div className='divDragoTxt'>
                    <img src={props.imgUrl5} alt="Dragodinde Orchidée" />
                    <h4>Dragodinde <span className='txtYellow'>Orchidée</span></h4>
                    <p><span className='txtYellow'>Combinaison:</span> Dorée Rousse et Ebène Indigo</p>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 100 Intelligence</p>
                </div>
            </article>
        </section>
    )
}

export default Dragodinde;