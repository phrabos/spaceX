import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShipSummary } from '../../Types';
import { fetchShipById } from '../../utils/spacexAPI';
import Ship from './Ship';

type ShipParams = {
	id: string;
};

const ShipsDetailContainer = (): JSX.Element => {
	const [ship, setShip] = useState<ShipSummary>({} as ShipSummary);
	const [loading, setLoading] = useState(true);
	const { id } = useParams<ShipParams>();

	useEffect(() => {
		fetchShipById(id)
			.then(setShip)
			.catch(console.error)
			.finally(() => setLoading(false));
	}, [id]);

	if (loading) return <h1>Loading...</h1>;
	return (
		<>
			<Ship ship={ship} />
		</>
	);
};

export default ShipsDetailContainer;
