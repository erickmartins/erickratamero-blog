import { json } from '@sveltejs/kit';

export function GET() {
	const body = {
		subject: 'acct:ratamero@idlethumbs.social',
		aliases: ['https://idlethumbs.social/@ratamero', 'https://idlethumbs.social/users/ratamero'],
		links: [
			{
				rel: 'http://webfinger.net/rel/profile-page',
				type: 'text/html',
				href: 'https://idlethumbs.social/@ratamero'
			},
			{
				rel: 'self',
				type: 'application/activity+json',
				href: 'https://idlethumbs.social/users/ratamero'
			},
			{
				rel: 'http://ostatus.org/schema/1.0/subscribe',
				template: 'https://idlethumbs.social/authorize_interaction?uri={uri}'
			}
		]
	};

	return json(body, {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
