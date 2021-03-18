import Head from 'next/head';
import 'tailwindcss/tailwind.css';

const Home = () => (
  <div className="py-5">
    <Head>
      <title>Next.js on the Jamstack with Netlify!</title>
    </Head>
    <h1>
      Spanish with Caro - Book Now!
    </h1>

    <h3>
      <a href="/book">Book!</a>
    </h3>
  </div>
);

export default Home;
