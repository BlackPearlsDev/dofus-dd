import React from 'react';
import { useState, useEffect } from 'react';

// IMPORT ALL DD MODULES
import Dragodinde1 from '../../UI/Dragodinde/AllGens/Gen1/Index';
import Dragodinde2 from '../../UI/Dragodinde/Gen2/Index';
import Dragodinde3 from '../../UI/Dragodinde/Gen3/Index';
import Dragodinde4 from '../../UI/Dragodinde/Gen4/Index';
import Dragodinde5 from '../../UI/Dragodinde/Gen5/Index';
import Dragodinde6 from '../../UI/Dragodinde/Gen6/Index';
import Dragodinde7 from '../../UI/Dragodinde/Gen7/Index';
import Dragodinde8 from '../../UI/Dragodinde/Gen8/Index';

// IMPORT GESTATIONS MODULES
import Gestations from '../../UI/Dragodinde/Gestations/Index';

// GEN 1
import DragodindeDoree from '../../../assets/gen1/dd-doree.png';
import DragodindeRousse from '../../../assets/gen1/dd-rousse.png';
import DragodindeAmande from '../../../assets/gen1/dd-amande.png';
// GEN 1 COMBINAISON
import DragodindeDoreeRousse from '../../../assets/gen2/dd-doree-rousse.png';
import DragodindeAmandeRousse from '../../../assets/gen2/dd-amande-rousse.png';
import DragodindeAmandeDoree from '../../../assets/gen2/dd-amande-doree.png';

// GEN 2
import DragodindeIndigo from '../../../assets/gen3/dd-indigo.png';
import DragodindeEbene from '../../../assets/gen3/dd-ebene.png';

// GEN 3
import DragodindeEbeneIndigo from '../../../assets/gen4/dd-ebene-indigo.png';

// GEN 4
import DragodindePourpre from '../../../assets/gen5/dd-pourpre.png';
import DragodindeOrchidee from '../../../assets/gen5/dd-orchidee.png';

// GEN 5
import DragodindeIndigoPourpre from '../../../assets/gen6/dd-indigo-pourpre.png';
import DragodindeOrchideePourpre from '../../../assets/gen6/dd-orchidee-pourpre.png';
import DragodindeEbeneOrchidee from '../../../assets/gen6/dd-ebene-orchidee.png';

// GEN 6
import DragodindeIvoire from '../../../assets/gen7/dd-ivoire.png';
import DragodindeTurquoise from '../../../assets/gen7/dd-turquoise.png';

// GEN 7
import DragodindeIvoirePourpre from '../../../assets/gen8/dd-ivoire-pourpre.png';
import DragodindeIvoireTurquoise from '../../../assets/gen8/dd-ivoire-turquoise.png';
import DragodindeTurquoiseOrchidee from '../../../assets/gen8/dd-turquoise-orchidee.png';

// GEN 8
import DragodindeEmeraude from '../../../assets/gen9/dd-emeraude.png';
import DragodindePrune from '../../../assets/gen9/dd-prune.png';

function Generation() {

    const [generation, setGeneration] = useState(0);

    const [gen1Visible, setGen1Visible] = useState(false);
    const [gen2Visible, setGen2Visible] = useState(false);
    const [gen3Visible, setGen3Visible] = useState(false);
    const [gen4Visible, setGen4Visible] = useState(false);
    const [gen5Visible, setGen5Visible] = useState(false);
    const [gen6Visible, setGen6Visible] = useState(false);
    const [gen7Visible, setGen7Visible] = useState(false);
    const [gen8Visible, setGen8Visible] = useState(false);
    const [gestationVisible, setGestationVisible] = useState(false);

    useEffect (() => {
        generation === 'gen1' ? setGen1Visible(true) : setGen1Visible(false);
        generation === 'gen2' ? setGen2Visible(true) : setGen2Visible(false);
        generation === 'gen3' ? setGen3Visible(true) : setGen3Visible(false);
        generation === 'gen4' ? setGen4Visible(true) : setGen4Visible(false);
        generation === 'gen5' ? setGen5Visible(true) : setGen5Visible(false);
        generation === 'gen6' ? setGen6Visible(true) : setGen6Visible(false);
        generation === 'gen7' ? setGen7Visible(true) : setGen7Visible(false);
        generation === 'gen8' ? setGen8Visible(true) : setGen8Visible(false);
    }, [generation]);

    const handleGeneration = (e) => {
        setGeneration(e.target.value);
    }

    const handleGestation = (e) => {
        setGestationVisible(true);
    }

    return (
        <main>
            <section className='generationSelector'>
                <h2>Les différents croisements</h2>
                <select name="generation" id="generation-select" onChange={handleGeneration} value={generation}>
                    <option hidden>Choisir une generation</option>
                    <option value="gen1">Génération 1</option>
                    <option value="gen2">Génération 2</option>
                    <option value="gen3">Génération 3</option>
                    <option value="gen4">Génération 4</option>
                    <option value="gen5">Génération 5</option>
                    <option value="gen6">Génération 6</option>
                    <option value="gen7">Génération 7</option>
                    <option value="gen8">Génération 8</option>
                </select>
            </section>

            <section className='generationSelector'>
                <h2>Les temps de gestations</h2>

                <div className='checkbox-container'>
                    <input type="checkbox" id="gestation-checkbox" value="gestationTrue" onChange={handleGestation}/>
                    <label htmlFor="gestation-checkbox">Voir les temps</label>

                    <>
                        {gestationVisible && <Gestations />}
                    </>

                </div>
            </section>

            <>
                {gen1Visible && <Dragodinde1 imgUrl1={DragodindeDoree} imgUrl2={DragodindeRousse} imgUrl3={DragodindeAmande} imgUrl4={DragodindeDoreeRousse} imgUrl5={DragodindeAmandeRousse} imgUrl6={DragodindeAmandeDoree}/>}
            </>

            <>
                {gen2Visible && <Dragodinde2 imgUrl1={DragodindeAmandeRousse} imgUrl2={DragodindeAmandeDoree} imgUrl3={DragodindeDoreeRousse} imgUrl4={DragodindeIndigo} imgUrl5={DragodindeEbene}/>}
            </>

            <>
                {gen3Visible && <Dragodinde3 imgUrl1={DragodindeIndigo} imgUrl2={DragodindeEbene} imgUrl3={DragodindeAmandeRousse} imgUrl4={DragodindeEbeneIndigo} imgUrl5={DragodindeDoreeRousse}/>}
            </>

            <>
                {gen4Visible && <Dragodinde4 imgUrl1={DragodindeAmandeRousse} imgUrl2={DragodindeEbeneIndigo} imgUrl3={DragodindeDoreeRousse} imgUrl4={DragodindePourpre} imgUrl5={DragodindeOrchidee}/>}
            </>

            <>
                {gen5Visible && <Dragodinde5 imgUrl1={DragodindePourpre} imgUrl2={DragodindeOrchidee} imgUrl3={DragodindeIndigoPourpre} imgUrl4={DragodindeOrchideePourpre} imgUrl5={DragodindeEbeneOrchidee}/>}
            </>

            <>
                {gen6Visible && <Dragodinde6 imgUrl1={DragodindeIndigoPourpre} imgUrl2={DragodindeOrchideePourpre} imgUrl3={DragodindeEbeneOrchidee} imgUrl4={DragodindeIvoire} imgUrl5={DragodindeTurquoise}/>}
            </>

            <>
                {gen7Visible && <Dragodinde7 imgUrl1={DragodindeIvoire} imgUrl2={DragodindeTurquoise} imgUrl3={DragodindeIvoirePourpre} imgUrl4={DragodindeIvoireTurquoise} imgUrl5={DragodindeTurquoiseOrchidee}/>}
            </>

            <>
                {gen8Visible && <Dragodinde8 imgUrl1={DragodindeIvoirePourpre} imgUrl2={DragodindeIvoireTurquoise} imgUrl3={DragodindeTurquoiseOrchidee} imgUrl4={DragodindeEmeraude} imgUrl5={DragodindePrune}/>}
            </>
        </main>
    )
}

export default Generation;