import React from 'react';

function Dragodinde(props) {
    return (
        <section className='dragodindeZone'>
            <article className='dragodindeCombinaison'>
                <div className='divDragoTxt'>
                    <img src={props.imgUrl1} alt="Dragodinde Dorée" />
                    <h4>Dragodinde <span className='txtYellow'>Dorée</span></h4>
                    <p><span className='txtYellow'>Stats:</span> 300 Vitalité, 2 Invocations</p>
                </div>

                <h3 className='plusCombinaison'>+</h3>

                <div className='divDragoTxt'>
                    <img src={props.imgUrl2} alt="Dragodinde Rousse" />
                    <h4>Dragodinde <span className='txtYellow'>Rousse</span></h4>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 50 Soins</p>
                </div>
                <h3 className='plusCombinaison'>+</h3>

                <div className='divDragoTxt'>
                    <img src={props.imgUrl3} alt="Dragodinde Amande" />
                    <h4>Dragodinde <span className='txtYellow'>Amande</span></h4>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 1500 Initiative</p>
                </div>
            </article>

            <article className='dragodindeCombinaison'>
                <div className='divDragoTxt'>
                    <img src={props.imgUrl4} alt="Dragodinde Dorée Rousse" />
                    <h4>Dragodinde <span className='txtYellow'>Dorée Rousse</span></h4>
                    <p><span className='txtYellow'>Combinaison:</span> Dorée et Rousse</p>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 1 Invocation, 35 Soins</p>
                </div>

                <div className='divDragoTxt'>
                    <img src={props.imgUrl6} alt="Dragodinde Amande Dorée" />
                    <h4>Dragodinde <span className='txtYellow'>Amande Dorée</span></h4>
                    <p><span className='txtYellow'>Combinaison:</span> Amande et Doree</p>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 1000 Initiative, 1 Invocation</p>
                </div>

                <div className='divDragoTxt'>
                    <img src={props.imgUrl5} alt="Dragodinde Amande Rousse" />
                    <h4>Dragodinde <span className='txtYellow'>Amande Rousse</span></h4>
                    <p><span className='txtYellow'>Combinaison:</span> Rousse et Amande</p>
                    <p><span className='txtYellow'>Stats:</span>  300 Vitalité, 1000 Initiative, 35 Soins</p>
                </div>
            </article>
        </section>
    )
}

export default Dragodinde;