import React from 'react';

function Capacity() {
    return (
        <main>
            <h2>Les différentes capacités</h2>
            
            <article className='articleCapacity'>
                <p><span className='txtYellow'>Caméléone</span> - S'adapte aux couleurs du cavalier.</p>
                <p><span className='txtYellow'>Précoce</span> - Double les points gagnés en maturité.</p>
                <p><span className='txtYellow'>Amoureuse</span> - Double les points gagnés en amour.</p>
                <p><span className='txtYellow'>Endurante</span> - Double les points gagnés en endurance.</p>
                <p><span className='txtYellow'>Sage</span> - Double l'expérience qui est donnée à la monture.</p>
                <p><span className='txtYellow'>Porteuse</span> - Double le nombre de pods de l'inventaire de la monture.</p>
                <p><span className='txtYellow'>Infatigable</span> - Double les points gagnés en énergie (avec mangeoire ou nourriture).</p>
                <p><span className='txtYellow'>Reproductrice</span> - Donne +1 bébé à l'accouchement (L'effet ne s’applique qu'aux femelles).</p>
                <p><span className='txtYellow'>Prédisposée Génétique</span> - Donne un arbre de 20,6,3,1 au lieu du 10,6,3,1, elle intervient seulement lors de l'étape de sélection de la couleur et non celle de combinaison.</p>
            </article>

            <h3>Informations importantes</h3>
            <p>Lors de la naissance d'une dragodinde il y aurait, d'après les statistiques :</p>
            <p>- 1 chance sur 20 que celle-ci ait une capacité qui apparaisse à l'accouchement.</p>
            <p>- 1 chance sur 10 qu'une capacité d'un parent soit transmise à l'enfant lors de l'accouchement.</p>

            <p>Chaque monture peut avoir jusqu'à deux capacités, ses deux capacités pouvant être identiques, et aucune des deux n'étant réservées à une transmission par les parents (il est possible à partir d'un accouplement de deux montures sans capacités d'en obtenir une en ayant deux)</p>

            <p><span className='txtYellow'>Note 1</span>: Une monture ayant deux fois la même capacité n'a pas 2 fois les avantages.</p>
            <p><span className='txtYellow'>Note 2</span>: La capacité Reproductrice est certainement la plus intéressante pour un éleveur.</p>

            <p>Ce dernier, dès qu'il aura obtenu une lignée pure devra tenter d'obtenir un couple de cette lignée ayant cette capacité.</p>
            
            <article className='articleExample'>
                <p>Exemple :</p>
                <p>- une femelle standard donne en moyenne 1,4 bébé par naissance.</p>
                <p>- une femelle avec la capacité reproductrice donnera donc en moyenne 2.4 bébés par naissance, au cours de sa vie cette femelle aura donc 20*2.4 = 48 bébés.</p>
                <p>- la probabilité de transmettre la capacité Reproductrice étant de 1 sur 10, tu obtiendra donc environ 4 à 5 nouvelles DD reproductrices.</p>
                <p>Et si cette femelle est toujours accouplée avec un mâle ayant lui aussi cette capacité cela fera 8 nouvelles montures Reproductrice.</p>
            </article>

            <p><span className='txtYellow'>Note 3</span>: La capacité Caméléone ne peut pas apparaître spontanément, elle ne peut qu’être transmise par un des deux parents.</p>
            <p>Le « gène original » s’obtient par la carte de loterie n°52, cadeau du Dofus Mag HS #1, qui donne une monture rousse, au hasard mâle ou femelle, avec un arbre généalogique vide et la capacité Caméléone.</p>
            <p>Cette capacité, comme les autres, ne peut se transmettre que par les parents directs (père ou mère). Elle ne reste pas stockée dans l'arbre et donc, un grand parent, même en l'ayant eue, ne peut pas agir sur le pourcentage de la transmission.</p>
        </main>
    )
}

export default Capacity;