import Head from 'next/head';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import NavBar from '../components/Navbar/Navbar';
import Loading from '../components/Loading/Loading';
import Process from '../components/sections/Process';
import Projects from '../components/sections/Projects';
import useProjects from '../hooks/useProjects';

const HomePage: React.FC = () => {
	const { data } = useProjects();

	if (!data) {
		return <Loading />;
	}

	return (
		<>
			<Head>
				<title>Jack Senyitko - Web Developer</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<nav className='animate-fade-in-down'>
				<NavBar />
			</nav>

			<main className='animate-fade-in-down'>
				<Hero />
				<Process />
				<Projects projects={data} />
			</main>

			<footer className='bg-gray-50'>
				<About />
			</footer>
		</>
	);
};

export default HomePage;
