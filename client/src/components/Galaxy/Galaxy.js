import React from 'react';
import '../Galaxy/Galaxy.css';

// const props = {

// }

function Galaxy(props) {
	return (
		<div className='galaxy col-5'>
			<div
				className='tatooine circle glow-yell'
				data-name='Tatooine'
				onClick={props.handlePlanetClick}
			></div>
			<div
				className='coruscant circle'
				data-name='Coruscant'
				onClick={props.handlePlanetClick}
			></div>
			<div
				className='endor circle'
				data-name='Endor'
				onClick={props.handlePlanetClick}
			></div>
			<div
				className='bespin circle'
				data-name='Bespin'
				onClick={props.handlePlanetClick}
			></div>
			<button onClick={props.handleSurfaceClick}>Visit Planet</button>
		</div>
	);
} 

export default Galaxy;
