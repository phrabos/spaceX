import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import rocketData from '../../fixtures/rocketData.json';

const URL = 'https://api.spacexdata.com/v4/rockets';

const server = setupServer(
	rest.get(URL, (req, res, ctx) => {
		return res(ctx.json(rocketData));
	})
);

describe('AnimalCross container', () => {
	beforeAll(() => server.listen());
	afterAll(() => server.close());

	it('renders a list of rockets on the page', async () => {
		render(<App />);

		screen.getByText('Loading...');

		const ul = await screen.findByRole('list', { name: 'rocket-list' });

		expect(ul).not.toBeEmptyDOMElement();
		expect(ul).toMatchSnapshot();
	});
});
