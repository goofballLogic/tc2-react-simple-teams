import React from "react";
import { render } from "react-dom";

import { ProfileCard } from "./";

console.log( ProfileCard );

const LiveExample = () => <div>
    
    <h1>Profile cards</h1>
    <p>A team member has a profile card. The components of a profile card include:</p>
    <ul>
        <li>Name</li>
        <li>Colour</li>
        <li>Avatar</li>
        <li>Blurb</li>
    </ul>
    <p>A (almost) non-styled rendering looks like this:</p>
    
    <div className="unstyled-example">
    
        <ProfileCard id="ben_black" name="Ben Black" colour="rgba(255,128,200,0.3)" avatar="bison" blurb={"Ben does database stuff mainly.\n\nYou can usually find him upstairs playing on the SNES mini."} />
        
    </div>

</div>;

export const renderLiveExample = selector => 

    render( 
    
        <LiveExample />,
        document.querySelector( selector )
    
    );