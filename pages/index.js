import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon, GlobeAltIcon, CodeIcon, LightBulbIcon } from '@heroicons/react/solid'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import Link from 'next/link'


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  return (
    <div className="relative bg-gray-800 overflow-hidden">
      <div className="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
        <svg
          className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
          width={364}
          height={384}
          viewBox="0 0 364 384"
          fill="none"
        >
          <defs>
            <pattern
              id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} fill="currentColor" />
            </pattern>
          </defs>
          <rect width={364} height={384} fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
        </svg>
      </div>
      <div className="relative pt-6 pb-16 sm:pb-24">


        <main className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>
                  <Link href='/contact'>
                  <a
                    href="#"
                    className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >

                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                      Open for Work
                    </span>
                    <span className="ml-4 text-sm">Hire me</span>
                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                  </a>
                  </Link>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                    <span className="md:block">Hi, I am</span>{' '}
                    <span className="text-indigo-400 md:block">David Paul Wanjala</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  A Graduate Software Engineer With a Background in Web and Mobile Development, Artificial Intelligence, Machine Learning and Recommendation Systems.
                  </p>
                  <p className="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">Specializes in</p>
                  <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                    <div className="flex flex-column items-start justify-between">
                      <div className="flex justify-center px-1">
                       <GlobeAltIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                       <span className="ml-3 text-gray-300">Fullstack web development</span>
                      </div>
                      <div className="flex justify-center px-1">
                      <CodeIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                       <span className="ml-3 text-gray-300">Javascript, Python & R</span>
                      </div>
                      <div className="flex justify-center px-1">
                      <LightBulbIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                       <span className="ml-3 text-gray-300">Recommendation and Scheduling Systems</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                <div className="sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                  <div className="px-4 py-8 sm:px-10">
                  
                  <img src="/dpwanjala-profile-pic-chin-01.jpg" className="aspect-auto"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

//mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl

// export default function Index() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-12">
//       <div className="flex justify-end col-span-3 md:order-last">
//         <div>
//            <img src="/dpwanjala-profile-pic-chin-01.jpg" className="aspect-auto"/>
//         </div> 
//       </div>
//       <div className="col-span-9">
//         <p>David Paul Wanjala is a member of the African Leadership Academy graduating class of 2015 and Quest University Canada graduating class of 2022. Before enrolling in university, he worked as an independent software developer in Nairobi, Kenya in 2016 and 2017. During this time, he designed web and mobile applications that helped his clients generate over $100,000 in revenue. David believes in the potential of transformative technology to solve the world's complex problems and this led him to develop a self-designed concentration in Artificial Intelligence and Machine Learning. He has been awarded the university's Presidential Honours thrice for demonstrating academic excellence and contribution to the university, first in 2019 and again in 2020 and 2021. In 2020, he partnered with a classmate and designed scheduling optimization software to help his university efficiently and fairly schedule classes for students spread across multiple time zones during the COVID-19 pandemic. In 2021, he worked with the help of his professor to build, train, and evaluate artificial neural networks that would help to automatically classify thousands of images and therefore save a lot of time in manual labour. As a peer tutor at his university, he provided one-on-one support with academic work for his peer at all levels and across disciplines. For his graduating thesis, he studied, designed and deployed a recommendation system that makes effective and cost-efficient personalized recommendations of study materials for individualized needs and abilities of his peers. He is excited about and continues to find new ways in which technology can help address complex educational problems and thereby help humans learn in a better and effective way. To unwind, David enjoys music and you will often find him djing at parties or just busting a move on the dance floor.</p>
//       </div>
//   </div>
//   );
// }