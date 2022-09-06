import React from 'react';

function Dragodinde(props) {
    return (
        <section className='dragodindeZone'>
            <article className='dragodindeCombinaison'>
            <div className='divDragoTxt'>
                    <img src={props.imgUrl1} alt="Dragodinde Indigo" />
                    <h4>Dragodinde <span className='txtYellow'>Indigo</span></h4>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 100 Chance</p>
                </div>

                <h3 className='plusCombinaison'>+</h3>

                <div className='divDragoTxt'>
                    <img src={props.imgUrl2} alt="Dragodinde Ebène" />
                    <h4>Dragodinde <span className='txtYellow'>Ebène</span></h4>
                    <p><span className='txtYellow'>Combinaison:</span> Dorée Rousse et Amande Dorée</p>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 100 Agilité</p>
                </div>
            </article>

            <article className='dragodindeCombinaison'>
                <div className='divDragoTxt'>
                    <img src={props.imgUrl3} alt="Dragodinde Amande Rousse" />
                    <h4>Dragodinde <span className='txtYellow'>Amande Rousse</span></h4>
                    <p><span className='txtYellow'>Combinaison:</span> Indigo et Ebène (ratée)</p>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 1000 Initiative, 35 Soins</p>
                </div>

                <div className='divDragoTxt'>
                    <img src={props.imgUrl4} alt="Dragodinde Ebène Indigo" />
                    <h4>Dragodinde <span className='txtYellow'>Ebène Indigo</span></h4>
                    <p><span className='txtYellow'>Combinaison:</span> Indigo et Ebène (réussie)</p>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 70 Chance, 70 Agilité</p>
                </div>

                <div className='divDragoTxt'>
                    <img src={props.imgUrl5} alt="Dragodinde Dorée Rousse" />
                    <h4>Dragodinde <span className='txtYellow'>Dorée Rousse</span></h4>
                    <p><span className='txtYellow'>Combinaison:</span> Indigo et Ebène (ratée)</p>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 1 Invocation, 35 Soins</p>
                </div>
            </article>
        </section>
    )
}

export default Dragodinde;