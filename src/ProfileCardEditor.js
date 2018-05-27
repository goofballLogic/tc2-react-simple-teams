import React, { PureComponent } from "react";
import { colors } from "./colors";
import * as svgs from "./svgs";

class ProfileCardEditor extends PureComponent {
    
    handleChange( e ) {
        
        const { name, value } = e.target;
        const { onChange, profile } = this.props;
        onChange( { ...profile, [ name ]: value } );

    }
    pickSwatch( value, e ) {
        
        e.preventDefault();
        const { onChange, profile } = this.props;
        onChange( { ...profile, colour: value } );
        
    }
    pickAvatar( value ) {
        
console.log(1234,  value );
        const { onChange, profile } = this.props;
        onChange( { ...profile, avatar: value } );
        
    }
    render() {
        
        const { profile } = this.props;
        return <form className="profile-card-editor">
        
            <label>
                
                <span>Name</span>
                <input type="text" name="name" value={profile.name} onChange={this.handleChange.bind( this )} />
                
            </label>
            <label>
            
                <span>Blurb</span>
                <textarea name="blurb" value={profile.blurb} onChange={this.handleChange.bind( this )}></textarea>
            
            </label>
            <label>
                
                <span>Color</span>
                <input type="color" name="colour" value={profile.colour} onChange={this.handleChange.bind( this )} />
            
            </label>
            <div className="swatch-picker" onMouseDown={e => e.preventDefault()}>
                    
                <aside><b>Note:</b> A good colour should be highly complementary to the colours picked by others on your team so that it's easy to distinguish on a graph or in a table. The strongly contrasting colours below are a good start, but you can also use your native colour picker by clicking on the colour input field above.</aside>
                {colors.map( color => <span key={color} className="profile-color-swatch" onClick={e => this.pickSwatch( color, e )} style={{ "backgroundColor": color }} /> )}
            
            </div>
            <label>
            
                <span>Avatar</span>
                <input type="text" name="avatar" value={profile.avatar} onChange={this.handleChange.bind( this )} />
                
            </label>
            <div className="avatar-picker" onMouseDown={e => e.preventDefault()}>
                
                <aside><b>Note:</b> As well as picking on of the built-in images below, you can also enter a URL. Try to choose an image with a transparent background.</aside>
                {Object.keys( svgs ).map( x => React.createElement( svgs[ x ], { key: x, onClick: () => this.pickAvatar( x ) } ) )}
            
            </div>
            
        </form>;
        
    }
    
}
export default ProfileCardEditor;
