import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';

interface TemplateProps {
    children: ReactNod
}

export function Template({children}:TemplateProps) {
    return (
        <Router>
            <div className="App">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    {/* <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} /> */}
                </main>
            </div>
        </Router>
    )
}

