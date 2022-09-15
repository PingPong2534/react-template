import React from 'react';
//import background from '../img/home-background.jpg';

class Home extends React.Component{

    render(){
        return(
            <>
                <div className='portfolio'>
                     
                </div>
                <header className="header">
                        <div className="header__logo-box">
                            {/* <img src={background} alt="logo" className="header__logo"/> */}
                        </div>
                        <div className="header__text-box">
                            <h1 className="heading-primary">
                                <span className="heading-primary--main">Outdoors</span>
                                <span className="heading-primary--sub">is where life happens</span>
                            </h1>

                            <a href="#" className="btn btn--white btn--animated">Discover our tours</a>
                        </div>
                    </header>
            </>
        )  
    }
}

export default Home;