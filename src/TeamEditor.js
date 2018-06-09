import React, { Component } from "react";
import ProfileCard from "./ProfileCard";
import ProfileCardEditor from "./ProfileCardEditor";
import shortid from "shortid";

function handleChangeMissing() { throw new Error( "No onChange handler supplied to the TeamEditor component" ); }

function withEmpties( profiles, maxSize ) {
    
    return profiles.length >= maxSize ? profiles : withEmpties( [ {

        id: shortid(),
        isUndefined: true,
        name: "Empty"
        
    } ].concat( profiles ), maxSize );

}
class TeamEditor extends Component {
    
    constructor( { size, team } ) {
    
        super();    
        this.state = { profiles: withEmpties( team.profiles || [], size ) };
        
    }
    
    handleTeamChange( e ) {
        
        const { onChange = handleChangeMissing, team = {} } = this.props;
        if( e.target ) {
            
            onChange( { ...team, [ e.target.name ]: e.target.value } );
            
        } else {
            
            throw new Error( "Not implemented" );
            
        }
        
    }
    
    selectProfile( id ) {
        
        const { profiles, selectedProfile } = this.state;
        if ( selectedProfile && selectedProfile.id === id ) {
            
            this.setState( { selectedProfile: undefined } );
            
        } else {
    
            this.setState( { selectedProfile: profiles.find( p => p.id === id ) } );
            
        }
        
    }
    
    render() {
        
        const { className = "", size, team = {} } = this.props;
        const { selectedProfile, profiles } = this.state;
        const classy = ( ...bits ) => bits.filter( x => x ).join( " " );
        return <article className={`team-editor ${className}`.trim()}>

            <form className="team-details-editor">

                <p className="max-size">Maximum size: {size}</p>
                <img src={team.logo} className="team-logo" />
                <input type="text" name="name" value={team.name} className="team-name-editor" onChange={e => this.handleTeamChange( e )} />
                <input type="text" name="logo" value={team.logo} className="team-logo-editor" onChange={e => this.handleTeamChange( e )} />
                
            </form>
            {profiles.map( x => 
            
                <ProfileCard key={x.id} 
                    {...x} 
                    className={ classy( x.isUndefined && "undefined", x === selectedProfile && "selected" ) } 
                    onClick={ id => this.selectProfile( id ) } />
            
            )}
            {selectedProfile && <ProfileCardEditor profile={selectedProfile} />}
            
        </article>;
        
    }
    
}

export default TeamEditor;