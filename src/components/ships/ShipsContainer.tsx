import React, { useEffect, useState } from 'react';
import { ShipSummary } from '../../Types';
import { fetchShips } from '../../utils/spacexAPI';
import ShipList from './ShipList';

const ShipsContainer = (): JSX.Element => {
	const [shipsArray, setShipsArray] = useState<ShipSummary[]>(
		[] as ShipSummary[]
	);

	useEffect(() => {
		(async () => {
			const ships = await fetchShips();
			setShipsArray(ships);
		})();
	}, []);

	return (
		<>
			<h1>SpaceX Rockets</h1>
			<ShipList shipsArray={shipsArray} />
		</>
	);
};

export default ShipsContainer;
