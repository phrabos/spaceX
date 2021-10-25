import { Ship, ShipSummary } from '../Types';

const URL = 'https://api.spacexdata.com/v4/rockets';

export const fetchShips = async (): Promise<ShipSummary[]> => {
	const res = await fetch(URL);
	const json: Ship[] = await res.json();

	const shipArr = json.map(
		(ship: Ship): ShipSummary => ({
			id: ship.id,
			name: ship.name,
			image: ship.flickr_images,
			launchCost: ship.cost_per_launch,
			description: ship.description,
		})
	);
	return shipArr;
};

export const fetchShipById = async (id: string): Promise<ShipSummary> => {
	const res = await fetch(`${URL}/${id}`);
	const json: Ship = await res.json();

	const shipArr = {
		id: json.id,
		name: json.name,
		image: json.flickr_images,
		launchCost: json.cost_per_launch,
		description: json.description,
	};

	return shipArr;
};
