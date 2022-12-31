//import React
import React from "react";

//import header component
import Header from '../components/Header';


//import footer component
import Footer from '../components/Footer';



//import menu component
import Menu from '../components/Menu';

export default function LayoutWeb({children}) {

    return(
        <>
            <Header />
            <div className="main">
                {children}
          
                <Footer />
             
                <Menu />
            </div>
        </>
    )

}