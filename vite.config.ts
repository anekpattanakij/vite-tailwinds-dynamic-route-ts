import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import { envConfig } from 'vite-plugin-env-config';
import Pages, {
	type ImportMode,
	type ImportModeResolver,
} from 'vite-plugin-pages';

// https://vitejs.dev/config/
let shown = false;

const importMode: ImportModeResolver = (path) => {
	let retVal: ImportMode = 'async';
	if (path.endsWith('/src/routes/[...].tsx')) {
		retVal = 'sync';
	}
	console.log(`${shown ? '' : '\n'}Importing '${path}' ${retVal}hronously`);
	shown = true;
	return retVal;
};


export default defineConfig({
	define: {
		'process.env': process.env,
	},
	plugins: [
		vitePluginAxe(),
		tsconfigPaths(),
		svgrPlugin(),
		envConfig(),
		react(),
		Pages({
			extensions: ['tsx'],
			dirs: 'src/routes',
			resolver: 'react',
			importMode,
		}),
	],
});

function vitePluginAxe(): Plugin {
	let command: 'build' | 'serve';
	return {
		name: 'vite-plugin-axe',
		configResolved: (config) => {
			command = config.command;
		},
		resolveId(id) {
			if (id === '~axe') return '\x00~axe';
			else return null;
		},
		load(id, opts) {
			if (id === '~axe' || id === '\x00~axe') {
				if (command === 'serve' && !opts?.ssr) {
					return `import R from'react';import D from'react-dom';import a from'@axe-core/react';await a(R,D,500)`;
				} else {
					return '\n';
				}
			}
			return null;
		},
	};
}
