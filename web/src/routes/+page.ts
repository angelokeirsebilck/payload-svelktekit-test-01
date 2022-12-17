import type { Post } from 'types/payload-types';
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const getPosts = async (): Promise<Post[]> => {
		try {
			const res = await fetch(`http://localhost:3006/api/posts`);
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
