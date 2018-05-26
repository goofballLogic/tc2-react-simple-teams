import React, { Component } from "react";
import { render } from "react-dom";

import { ProfileCard } from "./";

console.log( ProfileCard );

class LiveExample extends Component {

    constructor() {
        
        super();
        this.state = { 
            
            name: "Ben Black",
            avatar: "bison",
            colour: "rgb(128,200,40)",
            blurb: "Ben does database stuff mainly.\n\nYou can usually find him upstairs playing on the SNES mini."
            
        };
        
    }
    handleChange( what, e ) {
        
        this.setState( { [ what ]: e.target.value } );
        
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
            <div className="example-set">
            
                <div className="example-data">
                    
                    <p><input onChange={e => this.handleChange( "name", e )} placeholder="Name" value={this.state.name} /></p>
                    <p><input onChange={e => this.handleChange( "avatar", e )} placeholder="Avatar" value={this.state.avatar} /></p>
                    <p><input onChange={e => this.handleChange( "colour", e )} placeholder="Avatar" value={this.state.color} type="color" /></p>
                    <p><textarea onChange={e => this.handleChange( "blurb", e )} placeholder="Blurb" value={this.state.blurb} /></p>
                    
                </div>
                <div className="unstyled-example">
                    
                    <p>A (mostly) non-styled rendering looks like this:</p>
                    {this.renderProfileCard()}
                    
                </div>
                <div className="styled-example">
                
                    <p>Styled it can look like this:</p>
                    {this.renderProfileCard()}
                    
                </div>
                
            </div>
        
        </div>;
        
    }

}

export const renderLiveExample = selector => 

    render( 
    
        <LiveExample />,
        document.querySelector( selector )
    
    );