import React from "react";
import "app/App.sass";
import { Sidebar } from "features/sidebar/Sidebar";
import { Nav } from "features/nav/Nav";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "common/components/layouts/Layout";
import { AboutMe } from "features/aboutMe/AboutMe";
import { CharacterRickAndMorty } from "features/charactersRickAndMorty/CharacterRickAndMorty";
import { Home } from "features/home/Home";
import { PostJsonPlaceholder } from "features/postsJsonPlaceholder/PostJsonPlaceholder";
import { WriteMe } from "features/writeMe/WriteMe";
import {Footer} from "features/footer/Footer"

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Sidebar />
                <Nav />
                <Layout>
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                        <Route path="/about-me" element={<AboutMe />} />
                        <Route
                            path="/rick-and-morty/characters/:id"
                            element={<CharacterRickAndMorty />}
                        />
                        <Route
                            path="/json-placeholder/posts/:id"
                            element={<PostJsonPlaceholder />}
                        />
                        <Route path={"/write-me"} element={<WriteMe />} />
                    </Routes>
                </Layout>
                <Footer />
            </div>
        </HashRouter>
    );
}

export default App;
