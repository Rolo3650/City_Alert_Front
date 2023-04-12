import React, { useContext } from 'react'
import { Context } from '../context/useReducer'
import Nav from '../components/Nav.jsx';
import Left from '../components/Mleft.jsx';
import Middle from '../components/Mmiddle';
import Right from '../components/Mright';
import Publish from '../components/publish';
import Customize from '../components/Customize';

const Index = () => {

    const [state, dispatch] = useContext(Context)

    return (
        <body>
            <Nav/>
            <div className="main">
                <div className="conteiner">
                    <Left/>
                    <Middle/>
                    <Right/>
                </div>
            </div>
            <div className="customize-theme">
                <Customize/>
            </div>
            <div className="o">
                <Publish/>
            </div>
        </body>
    )
}

export { Index }