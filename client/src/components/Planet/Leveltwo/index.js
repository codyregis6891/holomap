import React from 'react';
import Galleryspin from '../../Surface';

function LevelTwo({
	name,
	characters,
	diameter,
	rotation_period,
	orbital_period,
	planet_info,
	img,
	surface,
}) {
	return (
		<div className='row'>
			{!surface ? (
				<div>
					{name} <br />
					{diameter} <br />
					{rotation_period}
					<br />
					{orbital_period}
					<br />
					{planet_info} <br />
				</div>
			) : (
				<div />
			)}
			{img && !surface ? (
				<img
					src={`/${img}`}
					style={{
						width: '600px',
						margin: '0 auto',
						textAlign: 'center',
						display: 'flex',
					}}
					alt=''
				/>
			) : (
				<img
					src={`/${surface}`}
					alt=''
					style={{ backgroundImage: `/${surface}`, zIndex: -1 }}
				/>
			)}

			
			{surface ? (
				<div style={{ position: 'relative' }}>
					<Galleryspin characters={characters} />{' '}
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
}

export default LevelTwo;
