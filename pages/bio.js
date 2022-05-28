import { CameraIcon } from '@heroicons/react/solid'

export default function Example() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase"></h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet David
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="/dpwanjala-profile-pic-chin-01.jpg"
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-2">Photograph by dpwanjala</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              {/* <p className="text-lg text-gray-500">
                Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                pellentesque. Blandit amet, sed aenean erat arcu morbi.
              </p> */}
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p>David Paul Wanjala is a member of the African Leadership Academy graduating class of 2015 and Quest University Canada graduating class of 2022. Before enrolling in university, he worked as an independent software developer in Nairobi, Kenya in 2016 and 2017. During this time, he designed web and mobile applications that helped his clients generate over $100,000 in revenue. David believes in the potential of transformative technology to solve the world's complex problems and this led him to develop a self-designed concentration in Artificial Intelligence and Machine Learning. He has been awarded the university's Presidential Honours thrice for demonstrating academic excellence and contribution to the university, first in 2019 and again in 2020 and 2021. In 2020, he partnered with a classmate and designed scheduling optimization software to help his university efficiently and fairly schedule classes for students spread across multiple time zones during the COVID-19 pandemic. In 2021, he worked with the help of his professor to build, train, and evaluate artificial neural networks that would help to automatically classify thousands of images and therefore save a lot of time in manual labour. As a peer tutor at his university, he provided one-on-one support with academic work for his peer at all levels and across disciplines. For his graduating thesis, he studied, designed and deployed a recommendation system that makes effective and cost-efficient personalized recommendations of study materials for individualized needs and abilities of his peers. He is excited about and continues to find new ways in which technology can help address complex educational problems and thereby help humans learn in a better and effective way. To unwind, David enjoys music and you will often find him djing at parties or just busting a move on the dance floor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}