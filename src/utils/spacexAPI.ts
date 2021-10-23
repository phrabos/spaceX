import { Ship, ShipSummary } from '../Types';

const URL = 'https://api.spacexdata.com/v4/rockets';

export const fetchShips = async (): Promise<ShipSummary[]> => {
	const res = await fetch(URL);
	const json: Ship[] = await res.json();

	const shipArr = json.map(
		(ship: Ship): ShipSummary => ({
			id: ship.id,
			name: ship.name,
			image: ship.flickr_images[1],
		})
	);
	return shipArr;
};
