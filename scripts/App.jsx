import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './main/Header';
import { Footer } from './main/Footer';


export default class App extends React.Component{
   
    render() {
        return (
            <div>
                <Header />
                <main className="row">
                    {this.props.children}
                </main>
                <Footer />
            </div>
        );
    } 
}


