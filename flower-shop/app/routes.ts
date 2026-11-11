import { type RouteConfig, route } from '@react-router/dev/routes';

export default [
	route('/', '../src/pages/StartPage.tsx'),
	// pattern ^           ^ module file
] satisfies RouteConfig;
