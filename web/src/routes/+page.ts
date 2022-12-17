import type { Post } from 'types/payload-types';
import { env } from '$env/dynamic/public';
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const getPosts = async (): Promise<Post[]> => {
		try {
			const res = await fetch(`${env.PUBLIC_CMS_API_ENDPOINT}/posts`);
			// console.log(res);
			const data = await res.json();

			return data.docs;
		} catch (err) {
			console.log(err);
		}
	};
	return {
		posts: getPosts()
	};
}
