import React, { Component } from 'react'
import '../styles/entry_style.css'

export class Entry extends Component {
    render() {
        window.document.title = "Movie Manager - Home"
        return (
            <div>
                <div className="Entry">
                    <div className="Banner">
                        <img src={require('../assets/emilbarranco.png')} alt="developer"/>
                        <h1><span className="Accent">Developer</span>: Emil Perez Barranco</h1>
                        <h3>Web Developer / Technologist</h3>
                    </div>
                    <div className="Info">
                        <h1>Technologies</h1>
                        <div className="Techs">
                            <img src={require('../assets/reactjs.svg')} alt="icon"/>
                            <img src={require('../assets/postgresql.svg')} alt="icon"/>
                            <img src={require('../assets/nodejs.svg')} alt="icon"/>
                        </div>
                    </div>
                </div>
                
                <div className="Description">
                    <h1><spam className="accentRed">Hunter</spam> Technical Evaluation - PERN Stack</h1>
                    <p>My name is Emil Perez Barranco, here I present my evaluation as Front Web Developer 
                    on the PERN Stack Technologies (PostgreSQL, Express, ReactJS, NodeJS). 
                    Further information & Source control on the following repository: </p>
                    <button className="Repo"><a href="https://github.com/emilbarranco/technical-evaluation-hunter" target="_new">Repository</a></button>
                </div>

            </div>
        )
    }
}

export default Entry
