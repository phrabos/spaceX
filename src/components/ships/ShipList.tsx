import React from 'react';
import { Link } from 'react-router-dom';
import { ShipSummary } from '../../Types';

type ShipListProps = {
	shipsArray: ShipSummary[];
};

const ShipList = ({ shipsArray }: ShipListProps): JSX.Element => (
	<>
		<ul aria-label="rocket-list">
			{shipsArray.map((ship: ShipSummary) => (
				<Link
					to={`/${ship.id}`}
					key={ship.id}
					style={{ textDecoration: 'none', color: 'white' }}
				>
					<li
						style={{
							listStyle: 'none',
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						{ship.name}
						<img width="300px" src={ship.image[0]} alt={ship.name} />
					</li>
				</Link>
			))}
		</ul>
	</>
);

export default ShipList;
