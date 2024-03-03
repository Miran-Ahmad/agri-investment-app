import React from 'react';
import Card from '../Components/Card';
import './Home.css';
import cardImg1 from '../Assets/werner-sevenster-JuP0ZG0UNi0-unsplash.jpg';
import cardImg2 from '../Assets/scott-goodwill-CtRE4_4L7b8-unsplash-1.jpg';
import cardImg3 from '../Assets/james-baltz-jAt6cN6zl8M-unsplash.jpg'

const Home = () => {

    const itemsList = [
        { id: 1, name: "Jamshedpur", imgurl: cardImg1 },
        { id: 2, name: "Sasaram", imgurl: cardImg2 },
        { id: 3, name: "Kasol", imgurl: cardImg3 }
    ];

    return (
        <>
            <div className='home-container'>
                <div className="home-header">
                    FOR ORGANIZED AGRICULTURE
                    <div className="home-text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <button type="button" class="btn btn-outline-success">Learn More</button>
                </div>
            </div>
            <div className="home-info">
                <h2>High Yeild Farms</h2>
                <p className="home-text">Agripure Farms are sustainable farm projects where fruits & vegetables are grown in anorganised way resulting in high yield of better quality produce.</p>

                <div className="cards-container">
                    {
                        itemsList.map(item => {
                            return (
                                <Card key={item.id} card={item} />
                            );
                        })
                    }
                </div>

            </div>
            <div className="home-footer">
                <div class="container">
                    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3">
                        <p class="col-md-4 mb-0 text-light">© 2024 Company, Inc</p>

                        <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none">
                            <h3>AGRIPURE FARMS</h3>
                        </a>

                        <ul class="nav col-md-4 justify-content-end">
                            <li class="nav-item"><a href="#" class="nav-link px-2 text-light">Home</a></li>
                            <li class="nav-item"><a href="#" class="nav-link px-2 text-light">About</a></li>
                            <li class="nav-item"><a href="#" class="nav-link px-2 text-light">Invest & Earn</a></li>
                            <li class="nav-item"><a href="#" class="nav-link px-2 text-light">Gallery</a></li>
                            <li class="nav-item"><a href="#" class="nav-link px-2 text-light">FAQs</a></li>
                        </ul>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Home