import React, { Component } from "react";
import { render } from "react-dom";

import { ProfileCard } from "./";

console.log( ProfileCard );

class LiveExample extends Component {

    constructor() {
        
        super();
        this.state = { 
            
            name: "Imran Munir",
            avatar: "elephant",
            colour: "#ABD71D",
            blurb: "Role: Front-end Engineer\n\nImran does mostly front-end stuff. He's also a big Scrum advocate.",
            styled: true
            
        };
        
    }
    handleChange( what, e ) {
        
        this.setState( { [ what ]: e.target.value } );
        
    }
    toggleStyled() {
        
        this.setState( { styled: !this.state.styled } );
        
    }
    toggleUnstyled() {
        
        this.setState( { unstyled: !this.state.unstyled } );
        
    }
    renderProfileCard() {
        
        return <ProfileCard 
            id="ben_black"
            name={this.state.name}
            colour={this.state.colour}
            avatar={this.state.avatar}
            blurb={this.state.blurb} />;
                
    }
    render() {
    
        return <div>
    
            <h1>Profile cards</h1>
            <p>A team member has a profile card. The components of a profile card include:</p>
            <ul>
                <li>Name</li>
                <li>Colour</li>
                <li>Avatar</li>
                <li>Blurb</li>
            </ul>
            <div className="example-data">
                
                <p><input onChange={e => this.handleChange( "name", e )} placeholder="Name" value={this.state.name} /></p>
                <p><input onChange={e => this.handleChange( "avatar", e )} placeholder="Avatar" value={this.state.avatar} /></p>
                <p><label>Colour: <input onChange={e => this.handleChange( "colour", e )} value={this.state.colour} type="color" /></label></p>
                <p><textarea onChange={e => this.handleChange( "blurb", e )} placeholder="Blurb" value={this.state.blurb} /></p>
                <button onClick={() => this.toggleStyled()}>Styled</button>
                <button onClick={() => this.toggleUnstyled()}>Unstyled</button>
            </div>
            {this.state.unstyled && <div id="profile-card-unstyled" className="unstyled-example">
                
                <p>A (mostly) non-styled rendering looks like this:</p>
                {this.renderProfileCard()}
                
            </div>}
            {this.state.styled && <div id="profile-card-styled" className="styled-example">
            
                <p>Styled it can look like this:</p>
                {this.renderProfileCard()}
                
            </div>}

        
        </div>;
        
    }

}

export const renderLiveExample = selector => 

    render( 
    
        <LiveExample />,
        document.querySelector( selector )
    
    );