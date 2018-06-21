import React, { Component } from "react";
import ProfileCard from "./ProfileCard";
import ProfileCardEditor from "./ProfileCardEditor";
import shortid from "shortid";

function handleChangeMissing() { throw new Error( "No onChange handler supplied to the TeamEditor component" ); }

function withEmpties( profiles, maxSize ) {
    
    return profiles.length >= maxSize ? profiles : withEmpties( [ {

        id: shortid(),
        isEmpty: true,
        name: "Empty",
        colour: "#ffffff",
        blurb: "",
        avatar: ""
        
    } ].concat( profiles ), maxSize );

}
class TeamEditor extends Component {
    
    constructor( { size, team } ) {
    
        super();
        this.state = { 
            
            profiles: withEmpties( team.profiles || [], size ) 
            
        };
        
    }
    
    static getDerivedStateFromProps(props, state) {
        
        const { selectedProfile, profiles } = state;
        const { team } = props;
        let newSelectedProfile = selectedProfile;
        for( const profile of team.profiles ) {
            
            if( selectedProfile && profile.id === selectedProfile.id ) {
                
                newSelectedProfile = profile;
                
            }
            let stateProfileIndex = profiles.findIndex( stateProfile => profile.id === stateProfile.id );
            if ( ~stateProfileIndex ) profiles.splice( stateProfileIndex, 1, profile );
            
        }
        return { 
            
            ...state,
            profiles,
            selectedProfile: newSelectedProfile
            
        };
        
    }
    
    handleProfileChange( profile ) {
        
        const { onChange = handleChangeMissing, team = {} } = this.props;

        delete profile.isEmpty;
        const profileIndex = team.profiles.findIndex( x => x.id === profile.id );
        if ( ~profileIndex ) {
            
            team.profiles.splice( profileIndex, 1, profile );
            
        } else {
            
            team.profiles.push( profile );
            
        }
        onChange( team );

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

        return <article className={classy( "team-editor", className, selectedProfile && "editing" )}>

            <form className="team-details-editor">

                <p className="max-size">Maximum size: {size}</p>
                <img src={team.logo} className="team-logo" />
                <input type="text" name="name" value={team.name} className="team-name-editor" onChange={e => this.handleTeamChange( e )} />
                <input type="text" name="logo" value={team.logo} className="team-logo-editor" onChange={e => this.handleTeamChange( e )} />
                
            </form>
            {profiles.map( x => 
            
                <ProfileCard key={x.id} 
                    {...x} 
                    className={ classy( x.isEmpty && "undefined", x === selectedProfile && "selected" ) } 
                    onClick={ id => this.selectProfile( id ) } />
            
            )}
            {selectedProfile && <ProfileCardEditor profile={selectedProfile} onChange={e => this.handleProfileChange( e )} />}
            
        </article>;
        
    }
    
}

export default TeamEditor;