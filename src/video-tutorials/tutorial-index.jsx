import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { JavaTutorial } from "./java-tutorial";
import { JavaScriptTutorial } from "./javascript-tutorial";
import { CarouselDemo } from "../components/carousel-demo/carousel-demo";
import { Details } from "./details";

export function TutorialIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <header className="p-3 bg-dark text-white border border-2 text-center mt-2">
                    <span className="bi bi-camera-video fs-3 fw-bold"> Tech Video Tutorials </span>
                    <div className="fs-5">
                        <Link to="/" className="text-white text-decoration-none"> Home </Link>
                        <Link to="/java" className="text-white text-decoration-none mx-4"> Java </Link>
                        <Link to="/js" className="text-white text-decoration-none"> JavaScript </Link>
                        <Link to="/carousel" className="text-white mx-2 text-decoration-none"> My Project </Link>
                    </div>
                </header>

                <section className="mt-4">
                    <Routes>
                        <Route path="/" element={<div><h3>Welcome to tech videos</h3><p>We provide videos for various technologies like Java, React, AWS, UI, .NET</p></div>} />
                        <Route path="java" element={<JavaTutorial />} />
                        <Route path="js" element={<JavaScriptTutorial />} />
                        <Route path="carousel" element={<CarouselDemo />} />
                        <Route path="details/:id/:name/:price" element={<Details />} />
                        <Route path="*" element={<h3>Requested Path : Not Found</h3>} />
                    </Routes>
                </section>
            
            </BrowserRouter>
        </div>
    )
}