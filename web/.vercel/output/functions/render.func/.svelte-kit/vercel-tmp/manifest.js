export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-dd9b3d19.js","imports":["_app/immutable/start-dd9b3d19.js","_app/immutable/chunks/index-64452d82.js","_app/immutable/chunks/singletons-a4d25d88.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/env-public-f7741390.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[locale]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"locale","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/[locale]/[...uri]",
				pattern: /^\/([^/]+?)(?:\/(.*))?\/?$/,
				params: [{"name":"locale","optional":false,"rest":false,"chained":false},{"name":"uri","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
