import { useState } from 'react';

function App() {
	const [color, setColor] = useState('#242424');
	return (
		<>
			<div
				className='w-full h-screen duration-200'
				style={{ backgroundColor: color }}
			>
				<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
					<div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl'>
						<button
							className='outline-none px-4 py-1 rounded-full'
							style={{ backgroundColor: 'red' }}
							onClick={() => setColor('red')}
						>
							RED
						</button>
						<button
							className='outline-none px-4 py-1 rounded-full'
							style={{ backgroundColor: 'green' }}
							onClick={() => setColor('green')}
						>
							GREEN
						</button>
						<button
							className='outline-none px-4 py-1 rounded-full'
							style={{ backgroundColor: 'blue' }}
							onClick={() => setColor('blue')}
						>
							BLUE
						</button>
						<button
							className='outline-none px-4 py-1 rounded-full'
							style={{ backgroundColor: 'yellow' }}
							onClick={() => setColor('yellow')}
						>
							YELLOW
						</button>
						<button
							className='outline-none px-4 py-1 rounded-full'
							style={{ backgroundColor: 'pink' }}
							onClick={() => setColor('pink')}
						>
							PINK
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
