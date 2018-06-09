import React from "react";
import * as svgs from "./svgs";

function noop( id ) { console.log( `Profile ${id} was selected` ); }

const ProfileCard = ( { id, name, colour, color, avatar, blurb, style, className = "", onClick = noop } ) => <article onClick={() => onClick(id)} id={id} className={`tc2rst profile-card ${className}`.trim()} style={style}>

    <style>{`#${id}.profile-card { --profile-color: ${colour || color}; }`}</style>
    <span className="profile-swatch" style={{ "backgroundColor": "var(--profile-color)" }}>&nbsp;</span>
    <h3 className="profile-name">{name}</h3>
    <div className="profile-avatar">
        {avatar in svgs ? React.createElement( svgs[ avatar ] ) : <img src={avatar} />}
    </div>
    <div className="profile-blurb">{(blurb || "").replace( /\n/g, "\u000A" )}</div>
    
</article>;

export default ProfileCard;
