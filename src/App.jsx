// Components
import Navbar from "./components/Navbar";

// Images
const Image = [
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function App() {
  return (
    <div className="w-full min-h-screen">
      <section
        id="section-1"
        className="flex flex-col min-h-screen lg:px-12 md:px-8 px-4"
      >
        <Navbar />
        <div className="flex lg:flex-row flex-col-reverse lg:items-stretch items-center h-full grow pb-12 pt-4 gap-x-10">
          <div className="lg:w-3/5 flex flex-col justify-start mb-auto pt-8 lg:mb-0">
            <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold text-[#F03939] mb-4">
              SkuyMath
            </h1>
            <h2 className="lg:text-4xl md:text-2xl text-xl text-[#F03939]">
              Mathking Easy with Skuy Living Theory
            </h2>
            <div className="w-full border-b-2 border-b-gray-200 my-6 lg:my-12" />
            <p className="lg:text-2xl md:text-xl text-lg text-neutral-900 mb-4 md:mb-8 lg:mb-auto text-justify">
              Platform digital yang menyediakan tempat siswa SMA/sederajat untuk
              mempelajari materi terkait matematika dalam rangka mempersiapkan
              tes masuk perguruan tinggi Media pembelajaran yang interaktif,
              mudah diakses dan dipahami, serta teknik belajar gaya baru yang
              tentunya tidak membosankan
            </p>
            <button className="bg-[#FF4820] text-2xl text-white px-8 py-4 rounded-sm w-fit">
              Get Started
            </button>
            {/* People Section */}
            <div className="flex items-center flex-wrap">
              <div className="flex w-[240px]">
                {Image.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    className={`w-12 h-12 rounded-full object-cover lg:my-8 md:my-6 my-4 border-2 border-white ${
                      index === 0
                        ? ""
                        : index === 1
                        ? "-translate-x-[16px]"
                        : index === 2
                        ? "-translate-x-[32px]"
                        : index === 3
                        ? "-translate-x-[48px]"
                        : index === 4
                        ? "-translate-x-[64px]"
                        : index === 5
                        ? "-translate-x-[80px]"
                        : ""
                    }`}
                  />
                ))}
              </div>
              <h2 className="text-sm font-medium text-neutral-900">
                1600 students have already registered their interest just within
                the last month.
              </h2>
            </div>
          </div>
          <div className="lg:w-2/5 lg:py-8 h-auto flex-1 flex lg:max-h-none md:max-lg:h-[300px] sm:max-lg:h-[300px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section
        id="section-2"
        className="flex flex-col min-h-screen lg:px-12 md:px-8 px-4 lg:py-10 my-6"
      >
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-semibold text-[#F03939] mb-4 text-center">
          Our Courses
        </h1>
        <p className="lg:text-2xl md:text-xl text-lg text-neutral-900 text-center">
          All the courses you can take right now!
        </p>
        <div className="w-[85%] border-b-2 border-b-gray-200 my-8 mx-auto" />
        <div className="flex flex-wrap justify-center gap-4 grow pb-10 px-10">
          {/* Card 1 */}
          <div className="lg:w-[30%] md:w-2/3 w-full p-4 bg-gray-200 min-w-[300px]">
            {/* Card content goes here */}
          </div>

          {/* Card 2 */}
          <div className="lg:w-[30%] md:w-2/3 w-full p-4 bg-gray-200 min-w-[300px]">
            {/* Card content goes here */}
          </div>

          {/* Card 3 */}
          <div className="lg:w-[30%] md:w-2/3 w-full p-4 bg-gray-200 min-w-[300px]">
            {/* Card content goes here */}
          </div>
        </div>
      </section>

      <section
        id="section-3"
        className="flex flex-wrap w-full xl:px-[10%] lg:px-8 md:px-6 px-4 lg:mb-28 mb-16 gap-y-6 md:gap-y-8"
      >
        <div class="w-full lg:w-8/12 md:pr-4 lg:pr-8 flex flex-col justify-center">
          <h1 class="lg:text-5xl md:text-3xl text-2xl font-semibold text-[#F03939] mb-6 md:mb-8 text-center">
            Our Ultimate & <br /> Most Assured Course
          </h1>
          <p class="lg:text-xl text-lg text-neutral-900 text-justify font-medium">
            Unlock your potential with 'Skuymath.' Our course offers flexible,
            engaging learning tailored to your needs. Access expert content,
            interactive lessons, and supportive instructors. Take a step closer
            to your dreams. Get your free access today - invest in yourself!
            <div className="w-full my-6" />
            Don't hesitate to seize this opportunity to enrich your knowledge,
            enhance your skills, and take a step closer to realizing your
            dreams. Invest in yourself with 'Skuymath' - your path to success
            begins here. Grab your free access today and embark on a
            transformative learning journey!"
          </p>
        </div>

        <div class="w-full h-auto bg-white lg:w-4/12 border-2 border-[#661717d1] rounded-xl">
          <p className="font-semibold md:text-3xl text-xl text-white bg-[#661717d1] text-center py-4">
            SkuyMath Free Access
          </p>
          <ol class="list-decimal px-10 py-6">
            <li>
              Course Materials: Access to core learning materials, including
              videos, readings, presentations, and assignments.
            </li>
            <li>
              Assessments: Quizzes, tests, or assignments to measure your
              understanding of the content.
            </li>
            <li>
              Interactivity: Interactive elements like discussion forums,
              projects, or hands-on exercises.
            </li>
            <li>
              Instructor Support: Access to instructors or support staff for
              questions and guidance.
            </li>
            <li>Online Learning: Access to the course content online.</li>
          </ol>
          <p class="text-center font-medium text-xl mt-4">Pricing: Rs 50,000</p>
          <div class="flex justify-center my-4 gap-x-4 px-4">
            <button class="bg-[#407BEF] text-white px-6 py-2 rounded">
              See the opportunities
            </button>
            <button class="bg-[#FF4820] text-white px-6 py-2 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </section>
      <section
        id="section-4"
        className="flex flex-col justify-center min-h-screen lg:px-12 md:px-8 px-4 bg-[#FAEFEF]"
      >
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-semibold mb-6 md:mb-8 text-center">
          What our learners say
        </h1>
        <p className="lg:text-2xl md:text-xl text-lg mb-6 md:mb-8 text-center">
          100+ thousand people have already joined SkuyMath
        </p>
        <div className="flex flex-col lg:flex-row gap-x-6 gap-y-8">
          {/* 1 */}
          <div className="p-6">
            <h2 className="lg:text-2xl md:text-xl text-lg font-semibold text-center mb-2">
              Review 1
            </h2>
            <img
              className="w-40 h-40 object-cover rounded-full mx-auto my-4"
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <p className="text-lg mb-4 text-center">
              "SkuyMath has been a game-changer for me! As someone who struggled
              with math, the engaging lessons and interactive exercises helped
              me grasp difficult concepts with ease. The platform's
              user-friendly interface makes learning enjoyable, and I appreciate
              the personalized approach to teaching. Kudos to the SkuyMath team
              for creating such an excellent resource!"
            </p>
            <p className="text-center text-lg md:text-xl font-medium">
              Student of SMAN 1 Semarang
              <br />
              Grade 11
            </p>
          </div>
          {/* 2 */}
          <div className="p-6">
            <h2 className="lg:text-2xl md:text-xl text-lg font-semibold text-center mb-2">
              Review 2
            </h2>
            <img
              className="w-40 h-40 object-cover rounded-full mx-auto my-4"
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <p className="text-lg mb-4 text-center">
              "SkuyMath has been a game-changer for me! As someone who struggled
              with math, the engaging lessons and interactive exercises helped
              me grasp difficult concepts with ease. The platform's
              user-friendly interface makes learning enjoyable, and I appreciate
              the personalized approach to teaching. Kudos to the SkuyMath team
              for creating such an excellent resource!"
            </p>
            <p className="text-center text-lg md:text-xl font-medium">
              Student of SMAN 1 Semarang
              <br />
              Grade 11
            </p>
          </div>
          {/* 3 */}
          <div className="p-6">
            <h2 className="lg:text-2xl md:text-xl text-lg font-semibold text-center mb-2">
              Review 3
            </h2>
            <img
              className="w-40 h-40 object-cover rounded-full mx-auto my-4"
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <p className="text-lg mb-4 text-center">
              "SkuyMath has been a game-changer for me! As someone who struggled
              with math, the engaging lessons and interactive exercises helped
              me grasp difficult concepts with ease. The platform's
              user-friendly interface makes learning enjoyable, and I appreciate
              the personalized approach to teaching. Kudos to the SkuyMath team
              for creating such an excellent resource!"
            </p>
            <p className="text-center text-lg md:text-xl font-medium">
              Student of SMAN 1 Semarang
              <br />
              Grade 11
            </p>
          </div>
        </div>
      </section>
      <section
        id="section-5"
        className="flex flex-col justify-center min-h-screen lg:px-12 md:px-8 px-4 py-12"
      >
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-semibold mb-6 md:mb-8 text-center text-[#F03939]">
          Why Choose SkuyMath
        </h1>
        <div className="border-2 rounded-lg border-dashed border-[#9747FF] md:p-12 p-6 flex flex-col items-center justify-center">
          {/* Grid Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit gap-6">
            {/* INI COPY TERGANTUNG DARI MASING MASING ITEM */}
            <div class="bg-gray-200 lg:max-h-[350px] p-6 lg:aspect-square flex flex-col justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Feature 1 icon"
                class="w-16 h-16"
              />
              <h4 class="text-xl font-semibold text-gray-800 my-2">
                Feature 1
              </h4>
              <p class="text-gray-600 text-base text-center">
                The course offers a thorough exploration of the subject matter,
                covering all relevant topics and providing a deep understanding
                of the subject. The content is often regularly updated to ensure
                it remains current and relevant.
              </p>
            </div>
          </div>
          {/* Button */}
          <h1 className="mt-8 mb-4 md:text-2xl text-xl font-semibold text-[#F03939]">
            Get the opportunities in your hand
          </h1>
          <button className="bg-[#F03939] px-5 py-2 text-white font-medium">
            Get Started
          </button>
        </div>
      </section>
      <section
        id="section-6"
        className="flex flex-col min-h-screen lg:px-12 md:px-8 px-4"
      >
        Section 6
      </section>
      <section
        id="section-7"
        className="flex flex-col min-h-screen lg:px-12 md:px-8 px-4"
      >
        Section 7
      </section>
      <section
        id="section-8"
        className="flex flex-col min-h-screen lg:px-12 md:px-8 px-4"
      >
        Section 8
      </section>
      <section
        id="footer"
        className="flex flex-col min-h-screen lg:px-12 md:px-8 px-4"
      >
        Footer
      </section>
    </div>
  );
}

export default App;

{
  /*
  flex flex-wrap h-auto lg:px-[10%] md:px-[8%] px-4 md:py-12 gap-y-4 lg:mb-28 mb-16
   <div className="flex flex-col items-center justify-center gap-4 w-auto h-full text-justify">
          <h1 className="lg:text-6xl md:text-4xl text-2xl font-semibold text-[#F03939] mb-4 text-center">
            Our Ultimate & <br />
            Most Assured Course
          </h1>
          <p className="lg:text-2xl text-lg">
            Unlock your potential with 'Skuymath.' Our course offers flexible,
            engaging learning tailored to your needs. Access expert content,
            interactive lessons, and supportive instructors. Take a step closer
            to your dreams. Get your free access today - invest in yourself!
            <div className="my-6 w-full" />
            Don't hesitate to seize this opportunity to enrich your knowledge,
            enhance your skills, and take a step closer to realizing your
            dreams. Invest in yourself with 'Skuymath' - your path to success
            begins here. Grab your free access today and embark on a
            transformative learning journey!"
          </p>
        </div>
        <div className="flex flex-col h-auto min-h-[600px] bg-gray-200 w-[300px]"></div> */
}
