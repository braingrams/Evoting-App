import React from "react";
import Image from "next/image";

const Candidates = () => {
  return (
    <section className="pt-16 bg-blueGray-50">
      <div className="w-full lg:w-4/12 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <Image
                    src="/assets/a.jpg"
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    alt={""}
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                David Adeleke
              </h3>
              <div className="mb-2 text-blueGray-600 mt-10">
                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                SUG President
              </div>
              <div className="mb-2 text-blueGray-600">
                <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                Department - Petroleum Engineering
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    My name David Adeleke, a distinguished academic leader and a
                    visionary candidate running for the position of an SUG President at
                    the University Of Bells. With a profound commitment to excellence in
                    higher education and a passion for fostering a vibrant
                    learning community, bringing wealth of experience,
                    innovative ideas, and a deep understanding of the evolving
                    landscape of higher education. Education and Professional
                    Background: I am a 500 Level student studing Petroleum Engineering. I have 
                    dedicated my career to the advancement of academia.
                    I have served as a department president in the Department of
                    Engineering at the University Of Bells for 5 years, I have 
                    been widely recognized for my teaching, leadership and research
                    contributions. My extensive experience in the classroom
                    has provided me with a unique perspective on the needs and
                    aspirations of both faculty and students. Leadership and
                    Administrative Experience: Throughout my career, I demonstrated 
                    exemplary leadership skills and has held
                    several administrative roles within the university. As the
                    president of the Department of engineering, I have successfully
                    implemented innovative programs to enhance student
                    engagement, fostered collaborative research initiatives, and
                    actively promoted diversity and inclusion within the
                    department. I have also served as a member of various
                    university-wide committees, where I advocated for
                    student-centered policies and initiatives. 
                    
                    Vision for University Of Bells: My vision for University Of Bells is centered
                    around academic excellence, student empowerment, and
                    community engagement. I envision a university that
                    embraces interdisciplinary collaboration, embraces emerging
                    technologies, and prepares students for the challenges of
                    the future job market. Sarah firmly believes in the
                    importance of a well-rounded education that combines
                    rigorous academic programs with practical experiences,
                    internships, and global learning opportunities. 
                    
                    Key Priorities: 
                    
                    1. Enhancing Academic Programs: My aim is to
                    strengthen existing academic programs and develop new
                    interdisciplinary initiatives that align with emerging
                    fields and industry demands. She believes in fostering a
                    culture of innovation and creativity, encouraging faculty to
                    engage in cutting-edge research and scholarship. 
                    
                    2. Student Success and Engagement: I am deeply committed to
                    promoting student success and engagement. My plans is to
                    implement comprehensive support services, mentorship
                    programs, and career development resources to ensure that
                    students have the necessary tools and guidance to thrive
                    academically and personally. 
                    
                    3. Diversity and Inclusion: Recognizing the importance of 
                    diversity and inclusion, I am is dedicated to creating
                    a campus environment the celebrates differences and fosters 
                    an inclusive community.
                    I would implement policies and initiatives that promote
                    diversity at all levels of the university and ensure equal
                    opportunities for students and faculty from all backgrounds.
                    
                    4. Community Outreach and Partnerships: I believe in
                    the transformative power of community engagement. I
                    intends to forge strong partnerships with local businesses,
                    government agencies, and nonprofit organizations to provide
                    students with real-world learning experiences and create
                    mutually beneficial opportunities for collaboration and
                    community impact. With her unwavering commitment to academic
                    excellence, innovative thinking, and inclusive leadership,
                    I stand as a formidable candidate for the
                    position of SUG President at the University Of Bells. My vision,
                    experience, and dedication will make me capable and an inspiring
                    leader who can guide the university towards a promising
                    future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Candidates;
