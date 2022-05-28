import AppBar from '../components/AppBar.tsx'
import AppFooter from '../components/AppFooter.tsx'

// import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
        <nav>
            <AppBar></AppBar>
        </nav>
        <main>
            <Component {...pageProps} />
          </main>
          <footer>
            <AppFooter></AppFooter>
          </footer>
    </div>
  );
}

export default MyApp

// function MyApp({ Component, pageProps }) {
//   return (
//     <div className="container mx-auto">
//       <div>
//           <nav className="flex flex-col md:flex-row justify-between">
//             <h1><p className="text-2xl font-bold hover:text-red-600 text-center"><Link href="/">DPWANJALA</Link></p></h1>
//             <ul className="flex-row justify-center flex space-x-5">
//               <li className='hover:text-red-600'><Link href="/">Home</Link></li>
//               <li className='hover:text-red-600'><a href="https://drive.google.com/file/d/129AloutBrGwOUDL8_CBawkYAZUI_0J_n/view?usp=sharing">Resume</a></li>
//               <li className='hover:text-red-600'><a href="https://github.com/dpwanjala?tab=repositories">Recent Projects</a></li>
//               <li className='hover:text-red-600'><Link href="/contact">Contact</Link></li>
//             </ul>
//           </nav>
//           <main>
//             <Component {...pageProps} />
//           </main>
//           <footer className="flex flex-row justify-between">
//             <p>©2022 dpwanjala</p>
//             <ul className="flex space-x-5">
//               <li className='hover:text-red-600'><a href='https://github.com/dpwanjala'>Github</a></li>
//               <li className='hover:text-red-600'><a href='https://www.linkedin.com/in/dpwanjala/'>Linkedin</a></li>
//             </ul>
//           </footer>
//       </div>
//     </div>
//   );
// }

// export default MyApp
