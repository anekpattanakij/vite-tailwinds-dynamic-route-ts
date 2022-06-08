import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';

const PostPage = () => {
	const { post } = useParams()
	return (
		<div className="text-center">
			<Helmet>
				<meta name="robots" content="noindex follow" />
				<title>Post Something</title>
			</Helmet>
			<main className="flex flex-col items-center justify-center h-screen pb-1 text-xl  dark:text-white dark:bg-gray-700 bg-white text-gray-700 h-min-full">
				<h1 className="text-9xl">Post {JSON.stringify(post)}</h1>
			</main>
		</div>
	);
};

export default PostPage;
