import React from 'react';
import { ShipSummary } from '../../Types';

type ShipListProps = {
	shipsArray: ShipSummary[];
};

const ShipList = ({ shipsArray }: ShipListProps): JSX.Element => (
	<>
		<ul>
			{shipsArray.map((ship: ShipSummary) => (
				<section>
					<li key={ship.id}>{ship.name}</li>
					<img style={{ width: '300px' }} src={ship.image} alt={ship.name} />
				</section>
			))}
		</ul>
	</>
);

export default ShipList;
