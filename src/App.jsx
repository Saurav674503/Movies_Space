import NavBar from './Components/NavBar';
import VideoFrame from './Components/Frame';
import RequestMovie from './Components/RequestMovie';
import { useMemo } from 'react';

const videos = [
	{
		src: 'https://drive.google.com/file/d/1QeEsqRlcoUxJqnwP1oI6ubiSMVS27vwO/preview',
		title: 'Movie Space By NamasteCode',
		poster:
			'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
		watched: 1200,
		added: 1718000000000,
	},
	{
		src: 'https://www.w3schools.com/html/mov_bbb.mp4',
		title: 'Big Buck Bunny',
		poster:
			'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
		watched: 900,
		added: 1717000000000,
	},
	{
		src: 'https://www.w3schools.com/html/movie.mp4',
		title: 'Bear in the Forest',
		poster:
			'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
		watched: 500,
		added: 1716000000000,
	},
	// Add more video objects as needed
];

function App() {
	const mostWatched = useMemo(
		() => [...videos].sort((a, b) => b.watched - a.watched).slice(0, 3),
		[]
	);
	const sortedByAdded = useMemo(
		() => [...videos].sort((a, b) => b.added - a.added),
		[]
	);

	return (
		<div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526]">
			<NavBar />
			<div className="container mx-auto px-4 pt-16 sm:pt-20 pb-16">
				{/* Hero Section */}
				<section className="text-center mb-12 sm:mb-16">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mb-4 drop-shadow-lg">
						Welcome to Movie Space
					</h1>
					<p className="text-base sm:text-xl text-gray-200 mb-4">
						Your destination for the best movies, curated by{' '}
						<span className="text-yellow-300 font-bold">NamasteCode</span>.
					</p>
				</section>
				{/* Most Watched Movies */}
				<section className="mb-12 sm:mb-16">
					<h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 px-2">
						Most Watched Movies
					</h2>
					<div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory custom-scrollbar">
						{mostWatched.map((video, idx) => (
							<div
								key={idx}
								className="w-[300px] sm:w-[400px] flex-shrink-0 snap-center"
							>
								<VideoFrame
									src={video.src}
									title={video.title}
									poster={video.poster}
								/>
							</div>
						))}
					</div>
				</section>
				{/* All Movies Sorted by Added Time */}
				<section>
					<h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 px-2">
						All Movies
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
						{sortedByAdded.map((video, idx) => (
							<div
								key={idx}
								className="w-full"
							>
								<VideoFrame
									src={video.src}
									title={video.title}
									poster={video.poster}
								/>
							</div>
						))}
					</div>
				</section>
			</div>
			<RequestMovie />
		</div>
	);
}

export default App;
