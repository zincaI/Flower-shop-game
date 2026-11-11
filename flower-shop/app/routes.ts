import { type RouteConfig, route } from '@react-router/dev/routes';

export default [
	route('/', '../src/components/StartMenu.tsx'),
	// pattern ^           ^ module file
] satisfies RouteConfig;
