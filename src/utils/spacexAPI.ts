import { Ship, ShipSummary } from '../Types';

const URL = 'https://api.spacexdata.com/v4/rockets';

export const fetchShips = async (): Promise<any> => {
	const res = await fetch(URL);
	const json = await res.json();
	console.log(json);
	const shipArr = json.map(
		(ship: Ship): ShipSummary => ({
			id: ship.id,
			name: ship.name,
			image: ship.flickr_images[1],
		})
	);
	return shipArr;
};
