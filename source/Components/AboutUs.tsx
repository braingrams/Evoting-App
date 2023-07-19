import React from 'react'

const AboutUs = () => {
  return (
     <div className="flex flex-col w-[100%] lg:h-[450px] bg-[#d8a642] mb-8 lg:mb-0">
          <div className="text-center text-4xl font-semibold text-[#ffffff] lg:ml-[58px] lg:mt-[43px]">
           About Us
          </div>
          <div className="lg:pl-[210px] lg:pr-[129px] self-center pt-[35px] text-[24px] font-500 lg:mt-[35px] text-white px-4 lg:px-0 pb-4 lg:pb-0">
          At Leadership, we are dedicated to modernizing the voting experience.
           Our eVoting app enables users to participate in elections conveniently and 
           securely, right from their smartphones. With user-friendly features and top-notch security measures,
            we prioritize the integrity and privacy of each vote.
           Join us in revolutionizing democracy by making voting accessible, inclusive, and efficient with our innovative eVoting app.
          </div>
     </div>
   
  )
}

export default AboutUs