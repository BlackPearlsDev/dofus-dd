import React from 'react';
import DofusLogo from '../../../assets/img/dofus_Logo.webp';

function Main() {
    return (
        <main>
            <h2>L'élevage Dofus est un art qu'il faut maîtriser. C'est pourquoi cet outil permet de bien contrôler ses générations de dragodindes.</h2>
        

            <section className="imgHome">
                <img src={DofusLogo} alt="Dofus 1.29 Logo" />
            </section>
        
        </main>
    )
}

export default Main;