import React from "react";
import * as svgs from "./svgs";

const ProfileCard = ( { id, name, colour, color, avatar, blurb } ) => console.log( blurb ) || <article id={id} className="tc2rst profile-card">

    <style>{`#${id}.profile-card { --profile-color: ${colour || color}; }`}</style>
    <span className="profile-swatch" />
    <h3 className="profile-name">{name}</h3>
    <div className="profile-avatar">
        {avatar in svgs ? React.createElement( svgs[ avatar ] ) : <img src={avatar} />}
    </div>
    <div className="profile-blurb">{blurb.replace( /\n/g, "\u000A" )}</div>
    
</article>

export default ProfileCard;
