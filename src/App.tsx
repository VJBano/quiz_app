
import './App.css'

import Image_Carousel from './image_carousel';
import image1 from './assets/sc/image1.jpg'
import image2 from './assets/sc/image2.jpg'
import image3 from './assets/sc/image3.jpg'
import image4 from './assets/sc/image4.jpg'
import image5 from './assets/sc/image5.jpg'
import image6 from './assets/sc/image6.jpg'
import image7 from './assets/sc/image7.jpg'
import image8 from './assets/sc/image8.jpg'
import image9 from './assets/sc/image9.jpg'
import image10 from './assets/sc/image10.jpg'
import image11 from './assets/sc/image11.jpg'
import image12 from './assets/sc/image12.jpg'
import image13 from './assets/sc/image13.jpg'
import image14 from './assets/sc/image14.jpg'
import image15 from './assets/sc/image15.jpg'
import image16 from './assets/sc/image16.jpg'
import image17 from './assets/sc/image17.jpg'
import vid from './assets/sc/vid.mp4'
import apk from './apk_files/QuizApp.apk'
function App() {

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17
  ]
  

  const handleDownload = () => {

    const link = document.createElement('a');
          link.href = apk
          link.download = "QuizApp.apk"; 
          link.click();
  }

  return (
    <div className="w-full  flex justify-center items-center flex-col">
     
      <div className='w-5/6 md:w-1/2 flex flex-col gap-2 my-5'>
      <h1 className=" text-4xl font-serif  text-black">Quiz App</h1>
      </div>
      
      <div className='w-5/6 md:w-1/2 flex flex-col gap-2'>
      <p className="mb-3 text-xl text-black indent-4 font-serif text-justify">
      Experience the excitement of our cutting-edge <strong className="font-semibold text-black">Quiz Mobile App </strong>, meticulously developed using React Native Expo. Designed to challenge and engage,
       this app presents a thrilling combination of time-bound quizzes and lifeline features across a diverse range of subjects such as Math, Geography, and Biology. 
      Currently in its developmental phase, the app promises to deliver an immersive experience that will revolutionize quizzing.
      </p>

      <p className="mb-3 text-xl text-black indent-4 font-serif text-justify">
      With a user-friendly interface and intuitive navigation, the app ensures a seamless and enjoyable experience for users of all ages and backgrounds. Embrace the rush of answering questions within the set time limit, putting your knowledge to the test under pressure. The life feature adds a strategic element, allowing you to recover from incorrect answers and continue your pursuit of excellence.
      </p>
     
      <p className="mb-3 text-xl text-black indent-4 font-serif text-justify">
      Spanning an array of categories, including the likes of Mathematics, Geography, and more, the app caters to a wide variety of interests and educational pursuits. Its dynamic nature means that more exciting features and improvements are on the horizon, enhancing the overall quizzing experience.
      Unleash your competitive spirit as the app features both local and global leaderboards, showcasing the highest scores achieved in each category. These leaderboards foster a sense of healthy competition, driving users to continuously improve and outperform themselves.
      </p>

      <p className="mb-3 text-xl text-black indent-4 font-serif text-justify">
      The app seamlessly integrates with <strong className="font-semibold text-black">Firebase Database System</strong>, ensuring efficient and reliable score management. Whether you're aiming to outscore your peers in a specific category or achieve mastery across multiple subjects, the app's architecture is designed to facilitate accurate score tracking and fair leaderboard representation.
      As you navigate through questions and categories, you'll find yourself expanding your knowledge and refining your critical thinking skills. The app's commitment to gamified learning guarantees an experience that is both educational and entertaining, breaking away from conventional learning methods.
      </p>

      <p className="mb-3 text-xl text-black indent-4 font-serif text-justify">
      Stay tuned for regular updates as the app evolves and introduces new features to elevate your quizzing adventure. Engage with a community of fellow quizzers, sharing insights and tips to further enhance your performance.
      In summary, my <strong className="font-semibold text-black">Quiz Mobile App</strong> , developed on the React Native Expo platform, delivers an immersive, time-sensitive quizzing experience across diverse subjects. With a focus on strategic lifelines, local and global leaderboards, and seamless integration with Firebase's database capabilities, this app is set to redefine the way we learn, compete, and engage with quizzes. Please note that the app is currently in the development phase, with a host of exciting features on the horizon.
      </p>
      
      </div>

      <div className='w-5/6 md:w-1/2 flex flex-col gap-2 justify-center items-center mt-5'>
        <h1 className='flex justify-start items-start w-full font-serif text-3xl'>
          App Overview
        </h1>
      <Image_Carousel images={images} />
      </div>
      
      <div className='w-5/6 md:w-1/2 flex flex-col gap-2 justify-center items-center my-10'>
        <video autoPlay controls className='w-[40%] h-[30%] flex mt-10'>
          <source src={vid} type="video/mp4" />
        </video>
      </div>
    
      <div className='w-5/6 md:w-1/2 flex flex-col gap-2 justify-center items-center my-10'>
      <h1 className='flex justify-start items-start w-full font-serif text-3xl'>
          Download
        </h1>
        <p className="mb-3 text-xl text-black indent-4 font-serif text-justify">
        <strong className="font-semibold text-black">Caution:</strong> This app has not yet undergone Google Play Protect's certification process. While we strive to provide you with a secure experience, 
        please be aware that this app has not yet been verified by Google Play Protect's rigorous security standards. 
        We recommend exercising caution when using apps that have not received this certification, as it may potentially expose your device to security risks.
         Our team is working diligently to meet these standards, and your safety remains our top priority. In the meantime, 
         we advise considering your personal security preferences before proceeding with the use of this app. Your protection is important, 
         and we're committed to ensuring a secure environment for your digital activities.
        </p>

        <div className='flex flex-col justify-start items-start my-10'>
        <button onClick={handleDownload} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Download
          </button>
        </div>
      </div>
    
      <div className='w-5/6 md:w-1/2 flex flex-col gap-2 justify-center items-center my-20'>
      <h1 className='flex justify-start items-start w-full font-serif text-2xl'>
        Copyright
        </h1>

        <p className="mb-3 text-base text-black indent-4 font-mono text-justify">
       {` Copyright@${new Date().getFullYear()} Vincent Jay Torres Bano`} 
        </p>
        <p className="mb-3 text-base text-black indent-4 font-mono text-justify">
        All rights reserved.
        </p>
        
        <p className=" text-base text-black indent-4 font-mono text-justify">
        Title: Quiz App Mobile
        </p>
        <p className="mb-3 text-base text-black indent-4 font-mono text-justify">
        Version: 1.0.0
        </p>

        <p className="mb-3 text-base text-black indent-4 font-mono text-justify">
        {` Copyright@${new Date().getFullYear()} Vincent Jay Torres Bano. All rights reserved.`}
        </p>
        <p className="mb-3 text-base text-black indent-4 font-mono text-justify">
        This quiz app and its content are protected by copyright law and international treaties. Unauthorized reproduction or distribution of this app, or any portion of it, may result in severe civil and criminal penalties, and will be prosecuted to the maximum extent possible under the law.
          </p>
        <p className="mb-3 text-base text-black indent-4 font-mono text-justify">
        For inquiries about licensing, usage, or any other matters, please contact:
         <strong>vincentjaybano45@gmail.com</strong>
        </p>

        <p className="mb-3 text-base text-black indent-4 font-mono text-justify">
        <a href='https://vjbano.github.io/vanz_web/' className='text-blue-600 underline '> Vincent Website</a> 
        </p>

      </div>
      </div> 
  )
}

export default App
