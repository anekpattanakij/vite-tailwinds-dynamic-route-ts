import { Suspense } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import Nav from '$layout/Nav';
import routes from '~react-pages';

function Pages() {
	const loc = useLocation();
	const route = useRoutes(routes, loc);
	return <Suspense fallback={<div />}>{route}</Suspense>;
}

function App() {

  return (
    <div
				id="main"
				className=" dark:bg-slate-900  w-screen h-screen transition-colors duration-500 ease-in-out">
				<Nav />
				<div id="page" className="h-full w-screen *col-prim">
					<Pages/>
				</div>
			</div>
  )
}

export default App
