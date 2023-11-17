import React from 'react';

function BrowserInfo({browser}) {
    return (
        <article>
            <section>
                <h2>{browser.name}</h2>
                <img src={browser.logo} alt={`${browser.name} logo`} />
                <p>{browser.description}</p>
            </section>
        </article>
    );
}

export default BrowserInfo;