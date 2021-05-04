import React, { useState, useEffect } from 'react';
import API from '../utils/Api';
import Characters from '../components/Characters';
import Planets from '../components/Planets/';
import LevelTwo from '../components/Planet/Leveltwo';
import Planet from '../components/Planet';
import Galaxy from '../components/Galaxy/Galaxy';
import LevelThree from '../components/Planet/Levelthree';
import Modal from '../components/Modal';
import Charchive from '../components/Archive';
import Planetarchive from '../components/PlanetArchive'
import Search from '../components/Search'

const BUTTON_WRAPPER_STYLES = {
	// position: 'relative',
	// zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
	// position: 'relative',
	// zIndex: 2,
	// backgroundColor: 'red',
	// padding: '10px',
};

function Archive() {
	const [planet, setPlanet] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [characters, setCharacters] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		getPlanets();
		getCharacters();
	}, [planet]);

	const getPlanets = () => {
		// console.log(name)
		API.getPlanets()
			.then((res) => {
				setPlanets(res.data);
                console.log(res.data)
			})
			.catch(() => setPlanets([]));
	};

	const getCharacters = () => {
		API.getCharacters()
			.then((res) => {
				setCharacters(res.data);
				console.log(res.data);
			})
			.catch(() => setCharacters([]));
	};


	return (
		<div className='row justify-content-center'>
			<div className='p-5'
				// style={BUTTON_WRAPPER_STYLES}
				onClick={() => console.log('clicked')}
			>
				<button className='btn btn-outline-warning' onClick={() => setIsOpen(true)}>Access Archives</button>

				{/* <a href="/Open"><button>Open</button></a> */}
					<a href="/holodex"><button className='btn btn-outline-warning'>Holodex</button></a>
				<Modal open={isOpen} onClose={() => setIsOpen(false)}>

				<div className='viewport container border border-5 border-info mt-3 p-2 shadow-lg'>
					<div className='row m-3 justify-content-between'>
						<main className='One border border-info rounded-top col-12' style={{color: "white", textAlign: "center"}}>
                        
							{characters ? (
								characters.map((character) => {
									return (
										<Charchive
											key={character.name}
											name={character.name}
											image={character.image}
											description={character.description}
											birth_year={character.birth_year}
                                            mass={character.mass}
                                            planet_name={character.planet_name}
                                            skin_color={character.skin_color}
                                            hair_color={character.hair_color}
                                            eye_color={character.eye_color}
                                            height={character.height}
										/>
									);
								})
							) : (
								<div></div>
							)}
                            
                                {planets ? (
                                    planets.map((plan) => {
                                        return (
                                            <Planetarchive 
                                            key={plan.name}
                                            name={plan.name}
                                            rotation_period={plan.rotation_period}
                                            orbital_period={plan.orbital_period}
                                            diameter={plan.diameter}
                                            climate={plan.climate}
                                            gravity={plan.gravity}
                                            terrain={plan.terrain}
                                            surface_water={plan.surface_water}
                                            population={plan.population}
                                            description={plan.description}
                                            planet_info={plan.planet_info}
                                            img={plan.img}
                                            />
                                        );
                                    })
                                ) : (<div></div>)}
						</main>


                        <div>
                            </div>
                            <div>
                            </div>
					</div>
				</div>
				</Modal>

			</div>
		</div>
	);
}

export default Archive;