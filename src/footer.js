import React from "react";
import './footer.css';
import 'font-awesome/css/font-awesome.min.css';


function Footer(){
    return(
        
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <h5>Siguenos en nuestras redes sociales</h5>
                        <div className="social-icons">
                            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook fa-2x"></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-2x"></i></a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok fa-2x"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <h5>Contactanos</h5>
                        <a href="" className="enlaces"><i className="fas fa-envelope"></i><p>Correo</p></a>
                        <a href="" className="enlaces"><i className="fab fa-whatsapp"></i><p>Whatsapp</p></a>
                    </div>
                    <div className="col-md-4 text-center">
                        <img
                        src=""
                        alt="Mapa"
                        className="map"
                        />
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p>Chucheria Urbana 2024</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;