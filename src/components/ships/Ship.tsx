import React from 'react';
import { ShipSummary } from '../../Types';

type ShipProps = {
	ship: ShipSummary;
};

const Ship = ({ ship }: ShipProps): JSX.Element => (
	<>
		<h1>{ship.name} Details</h1>
		<section>
			<p>{ship.name}</p>
			<p>Cost to launch {`$${ship.launchCost.toLocaleString('en-US')}`}</p>
			<p>{ship.description}</p>
		</section>
		<section>
			{ship.image.map((shipImg) => (
				<img width="400px" key={shipImg} src={shipImg} alt="spaceX rocket" />
			))}
		</section>
	</>
);

export default Ship;
