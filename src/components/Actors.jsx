import React, { Component } from 'react'
import '../styles/actors_style.css'

export class Actors extends Component { 

    render() {
        const actors = [
            {Fullname: 'John Doe', Birthdate: '2020-01-01', Gender: 'Male'},
        ];

        const Actors = actors.map((data) =>  
            <div className="Actor">
                <img src="https://placehold.it/100x100/" alt="User Profile"/>
                <div className="Details">
                    <h3>{data.Fullname}</h3>
                    <h4>{data.Gender}</h4>
                    <h4>{data.Birthdate}</h4>
                </div>
            </div> 
        );

        return (
            <div>
                <h1>Dashboard</h1>
                <hr/>
                <div className="Grid">
                    
                    <div className="Box">
                        <img src="https://placehold.it/100x100/" id="uploadPreview" alt="User Profile"/>
                        <div className="Form">
                            <div className="Inputs">
                                <input type="file" name="Picture" id="Picture"/>
                                <input placeholder="Actor's Fullname" type="text" name="FullName" id="Fullname"/>
                                <input placeholder="Birth Date" type="date" name="Birthdate" id="Birthdate" value="2020-01-01" />
                                <button className="AddActor">Add Actor</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="Divider">
                        <h1>Actors</h1>
                        <hr/>
                    </div>
                    <div className="Actors">
                           {Actors}
                    </div>
                </div>
            </div>
        )
    }
}

export default Actors
