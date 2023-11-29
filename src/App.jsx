// Components
import Navbar from './components/Navbar';
import logo from './assets/logo.png';

// Images
const Image = [
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

function App() {
  return (
    <div className="w-full min-h-screen">
      <section id="section-1" className="flex flex-col min-h-screen lg:px-12 md:px-8 px-4">
        <Navbar />
        <div className="flex lg:flex-row flex-col-reverse lg:items-stretch items-center h-full grow pb-12 pt-4 gap-x-10">
          <div className="lg:w-3/5 flex flex-col justify-start mb-auto pt-8 lg:mb-0">
            <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold text-[#F03939] mb-4">SkuyMath</h1>
            <h2 className="lg:text-4xl md:text-2xl text-xl text-[#F03939]">Mathking Easy with Skuy Living Theory</h2>
            <div className="w-full border-b-2 border-b-gray-200 my-6 lg:my-12" />
            <p className="lg:text-2xl md:text-xl text-lg text-neutral-900 mb-4 md:mb-8 lg:mb-auto text-justify">
              Platform digital yang menyediakan tempat siswa SMA/sederajat untuk mempelajari materi terkait matematika dalam rangka mempersiapkan tes masuk perguruan tinggi Media pembelajaran yang interaktif, mudah diakses dan dipahami,
              serta teknik belajar gaya baru yang tentunya tidak membosankan
            </p>
            <button className="bg-[#FF4820] text-2xl text-white px-8 py-4 rounded-sm w-fit">Get Started</button>
            {/* People Section */}
            <div className="flex items-center flex-wrap">
              <div className="flex w-[240px]">
                {Image.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    className={`w-12 h-12 rounded-full object-cover lg:my-8 md:my-6 my-4 border-2 border-white ${
                      index === 0 ? '' : index === 1 ? '-translate-x-[16px]' : index === 2 ? '-translate-x-[32px]' : index === 3 ? '-translate-x-[48px]' : index === 4 ? '-translate-x-[64px]' : index === 5 ? '-translate-x-[80px]' : ''
                    }`}
                  />
                ))}
              </div>
              <h2 className="text-sm font-medium text-neutral-900">1600 students have already registered their interest just within the last month.</h2>
            </div>
          </div>
          <div className="lg:w-2/5 lg:py-8 h-auto flex-1 flex lg:max-h-none md:max-lg:h-[300px] sm:max-lg:h-[300px] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
      <section id="section-2" className="flex flex-col min-h-screen lg:px-12 md:px-8 px-4 lg:py-10 my-6">
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-semibold text-[#F03939] mb-4 text-center">Our Courses</h1>
        <p className="lg:text-2xl md:text-xl text-lg text-neutral-900 text-center">All the courses you can take right now!</p>
        <div className="w-[85%] border-b-2 border-b-gray-200 my-8 mx-auto" />
        <div className="flex flex-wrap justify-center gap-4 grow pb-10 px-10">
          {/* Card 1 */}
          <div class="w-full h-auto bg-white lg:w-3/12 border-2 border-[#661717d1] rounded-xl">
            <p className="font-semibold md:text-3xl text-xl text-white bg-[#661717d1] text-center py-4 rounded-lg">Geometri</p>
            <ol class="list-decimal px-10 py-6">
              <li>Konsep Dasar Geometri</li>
              <li>Sifat-sifat Bangun Datar</li>
              <li>Segitiga</li>
              <li>Bangun Datar</li>
              <li>Lingkaran</li>
              <li>Trigonometri</li>
              <li>Transformasi Geometri</li>
              <li>Pengukuran S</li>
            </ol>
            <p class="text-center font-medium text-xl mt-4">Pricing: Rs 23,000</p>
            <div class="flex justify-center my-4 gap-x-4 px-4">
              <button class="bg-[#407BEF] text-white px-6 py-2 rounded">Learn More</button>
              <button class="bg-[#FF4820] text-white px-6 py-2 rounded">Buy Now</button>
            </div>
          </div>

          {/* Card 2 */}
          <div class="w-full h-auto bg-white lg:w-3/12 border-2 border-[#661717d1] rounded-xl">
            <p className="font-semibold md:text-3xl text-xl text-white bg-[#661717d1] text-center py-4 rounded-lg">Statistika</p>
            <ol class="list-decimal px-10 py-6">
              <li>Pengumpulan Data</li>
              <li>Presentasi Data</li>
              <li>Ukuran Pemusatan Data</li>
              <li>Ukuran Penyebaran Data</li>
              <li>Distribusi Data</li>
              <li>Diagram Batang dan Lingkaran</li>
              <li>Diagram Garis</li>
              <li>Rata-Rata, Median, Modus</li>
            </ol>
            <p class="text-center font-medium text-xl mt-4">Pricing: Rs 23,000</p>
            <div class="flex justify-center my-4 gap-x-4 px-4">
              <button class="bg-[#407BEF] text-white px-6 py-2 rounded">Learn More</button>
              <button class="bg-[#FF4820] text-white px-6 py-2 rounded">Buy Now</button>
            </div>
          </div>

          {/* Card 3 */}
          <div class="w-full h-auto bg-white lg:w-3/12 border-2 border-[#661717d1] rounded-xl">
            <p className="font-semibold md:text-3xl text-xl text-white bg-[#661717d1] text-center py-4 rounded-lg">Limit dan Turunan</p>
            <ol class="list-decimal px-10 py-6">
              <li>Konsep Dasar Limit</li>
              <li>Batasan</li>
              <li>Menghitung Limit</li>
              <li>Kalkulus Diferensial</li>
              <li>Aturan Turunan</li>
              <li>Turunan Fungsi Aljabar</li>
              <li>Turunan Fungsi Trigonometri</li>
              <li>Turunan Fungsi Eksponensial</li>
            </ol>
            <p class="text-center font-medium text-xl mt-4">Pricing: Rs 23,000</p>
            <div class="flex justify-center my-4 gap-x-4 px-4">
              <button class="bg-[#407BEF] text-white px-6 py-2 rounded">Learn More</button>
              <button class="bg-[#FF4820] text-white px-6 py-2 rounded">Buy Now</button>
            </div>
          </div>
        </div>
      </section>

      <section id="section-3" className="flex flex-wrap w-full xl:px-[10%] lg:px-8 md:px-6 px-4 lg:mb-28 mb-16 gap-y-6 md:gap-y-8">
        <div class="w-full lg:w-8/12 md:pr-4 lg:pr-8 flex flex-col justify-center">
          <h1 class="lg:text-5xl md:text-3xl text-2xl font-semibold text-[#F03939] mb-6 md:mb-8 text-center">
            Our Ultimate & <br /> Most Assured Course
          </h1>
          <p class="lg:text-xl text-lg text-neutral-900 text-justify font-medium">
            Unlock your potential with 'Skuymath.' Our course offers flexible, engaging learning tailored to your needs. Access expert content, interactive lessons, and supportive instructors. Take a step closer to your dreams. Get your
            free access today - invest in yourself!
            <div className="w-full my-6" />
            Don't hesitate to seize this opportunity to enrich your knowledge, enhance your skills, and take a step closer to realizing your dreams. Invest in yourself with 'Skuymath' - your path to success begins here. Grab your free
            access today and embark on a transformative learning journey!"
          </p>
        </div>

        <div class="w-full h-auto bg-white lg:w-4/12 border-2 border-[#661717d1] rounded-xl">
          <p className="font-semibold md:text-3xl text-xl text-white bg-[#661717d1] text-center py-4 rounded-lg">SkuyMath Free Access</p>
          <ol class="list-decimal px-10 py-6">
            <li>Course Materials: Access to core learning materials, including videos, readings, presentations, and assignments.</li>
            <li>Assessments: Quizzes, tests, or assignments to measure your understanding of the content.</li>
            <li>Interactivity: Interactive elements like discussion forums, projects, or hands-on exercises.</li>
            <li>Instructor Support: Access to instructors or support staff for questions and guidance.</li>
            <li>Online Learning: Access to the course content online.</li>
          </ol>
          <p class="text-center font-medium text-xl mt-4">Pricing: Rs 50,000</p>
          <div class="flex justify-center my-4 gap-x-4 px-4">
            <button class="bg-[#407BEF] text-white px-6 py-2 rounded">See the opportunities</button>
            <button class="bg-[#FF4820] text-white px-6 py-2 rounded">Buy Now</button>
          </div>
        </div>
      </section>
      <section id="section-4" className="flex flex-col justify-center min-h-screen lg:px-12 md:px-8 px-4 bg-[#FAEFEF]">
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-semibold mb-6 md:mb-8 text-center">What our learners say</h1>
        <p className="lg:text-2xl md:text-xl text-lg mb-6 md:mb-8 text-center">100+ thousand people have already joined SkuyMath</p>
        <div className="flex flex-col lg:flex-row gap-x-6 gap-y-8 justify-center">
          {/* 1 */}
          <div className="p-6">
            <h2 className="lg:text-2xl md:text-xl text-lg font-semibold text-center mb-2">Ryujin Itzy</h2>
            <img className="w-40 h-40 object-cover rounded-full mx-auto my-4" src="https://i.pinimg.com/564x/7d/3b/33/7d3b33a22749c7acc774fb7ff236ae4c.jpg" />
            <p className="text-lg mb-4 text-center">
              “I recently completed this course, and I couldn't be more pleased with the experience. The content was not only informative but also engaging, making it easy to stay motivated throughout. The instructor's expertise shone
              through, and the way the material was structured made it accessible for learners of all levels. I highly recommend this course to anyone looking to gain a deep understanding of the subject matter.”
            </p>
            <p className="text-center text-lg md:text-xl font-medium">
              Student of SMAN 3 Semarang
              <br />
              Grade 12
            </p>
          </div>
          {/* 2 */}
          <div className="p-6">
            <h2 className="lg:text-2xl md:text-xl text-lg font-semibold text-center mb-2">Jihyooooo</h2>
            <img className="w-40 h-40 object-cover rounded-full mx-auto my-4" src="https://i.pinimg.com/736x/9f/0e/b0/9f0eb0fd02ae4b802373ee5c8bd6d6ee.jpg" />
            <p className="text-lg mb-4 text-center">
              “I've taken numerous courses in the past, but this one stands out as truly exceptional. The course material was comprehensive and up-to-date, and the delivery was top-notch. The assignments were challenging but manageable, and
              the feedback provided by the instructors was invaluable. I appreciated the practical approach and real-world applications, which have been immensely helpful in my career. If you're considering enrolling in a course, this one
              should be at the top of your list.”
            </p>
            <p className="text-center text-lg md:text-xl font-medium">
              Student of SMAN 1 Semarang
              <br />
              Grade 12
            </p>
          </div>
          {/* 3 */}
          <div className="p-6">
            <h2 className="lg:text-2xl md:text-xl text-lg font-semibold text-center mb-2">Yeji Itzy</h2>
            <img className="w-40 h-40 object-cover rounded-full mx-auto my-4 " src="https://i.pinimg.com/564x/21/d2/88/21d28842dfe89f4af9fbebc927b258a5.jpg" />
            <p className="text-lg mb-4 text-center">
              “This course exceeded my expectations in every way. It not only enhanced my knowledge and skills but also transformed the way I approach the subject matter. The instructors were passionate and dedicated, and the online
              community they fostered allowed for insightful discussions and peer learning. The resources and support provided were exceptional. I can confidently say that the investment in this course was worth every penny. I now feel more
              confident and capable in my field, and I'm eager to apply what I've learned.”
            </p>
            <p className="text-center text-lg md:text-xl font-medium">
              Student of SMK 8 Semarang
              <br />
              Grade 11
            </p>
          </div>
        </div>
      </section>
      <section id="section-5" className="flex flex-col justify-center min-h-screen lg:px-12 md:px-8 px-4 py-12">
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-semibold mb-6 md:mb-8 text-center text-[#F03939]">Why Choose SkuyMath</h1>
        <div className="border-2 rounded-lg border-dashed border-[#9747FF] md:p-12 p-6 flex flex-col items-center justify-center">
          {/* Grid Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit gap-6">
            {/* INI COPY TERGANTUNG DARI MASING MASING ITEM */}
            <div class="bg-gray-200 lg:max-h-[350px] p-6 lg:aspect-square flex flex-col justify-center items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/1786/1786975.png" alt="Feature 1 icon" class="w-16 h-16" />
              <h4 class="text-xl font-semibold text-gray-800 my-2">Comperehensive Content</h4>
              <p class="text-gray-600 text-base text-center">
                The course offers a thorough exploration of the subject matter, covering all relevant topics and providing a deep understanding of the subject. The content is often regularly updated to ensure it remains current and
                relevant.
              </p>
            </div>
            <div class="bg-gray-200 lg:max-h-[350px] p-6 lg:aspect-square flex flex-col justify-center items-center">
              <img src="https://icons.veryicon.com/png/o/education-technology/education-cloud/teach.png" alt="Feature 1 icon" class="w-16 h-16" />
              <h4 class="text-xl font-semibold text-gray-800 my-2">Expert Instruction</h4>
              <p class="text-gray-600 text-base text-center">
                You'll have the opportunity to learn from experienced and knowledgeable instructors who bring their expertise to the course. Their guidance and insights provide valuable real-world perspectives and enhance the quality of
                your learning.
              </p>
            </div>
            <div class="bg-gray-200 lg:max-h-[350px] p-6 lg:aspect-square flex flex-col justify-center items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/3868/3868547.png" alt="Feature 1 icon" class="w-16 h-16" />
              <h4 class="text-xl font-semibold text-gray-800 my-2">Flexible Learning </h4>
              <p class="text-gray-600 text-base text-center">
                The course is designed to accommodate your schedule. You can choose when and where you study, making it suitable for working professionals, students, or anyone with a busy lifestyle. This flexibility enables you to balance
                your learning with other commitments.
              </p>
            </div>
            <div class="bg-gray-200 lg:max-h-[350px] p-6 lg:aspect-square flex flex-col justify-center items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/3048/3048628.png" alt="Feature 1 icon" class="w-16 h-16" />
              <h4 class="text-xl font-semibold text-gray-800 my-2">Interractive Experience</h4>
              <p class="text-gray-600 text-base text-center">
                The course offers an engaging and interactive learning experience. Through activities, assignments, and assessments, you'll actively apply the knowledge you gain. This hands-on approach reinforces your understanding and
                encourages practical skill development.
              </p>
            </div>
            <div class="bg-gray-200 lg:max-h-[350px] p-6 lg:aspect-square flex flex-col justify-center items-center">
              <img src="https://static.thenounproject.com/png/5444947-200.png" alt="Feature 1 icon" class="w-16 h-16" />
              <h4 class="text-xl font-semibold text-gray-800 my-2">Proven Track Record</h4>
              <p class="text-gray-600 text-base text-center">
                trusted course typically has a history of successful outcomes, with numerous individuals benefiting from its content. It has consistently delivered value to learners over time.
              </p>
            </div>
            <div class="bg-gray-200 lg:max-h-[350px] p-6 lg:aspect-square flex flex-col justify-center items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/5455/5455693.png" alt="Feature 1 icon" class="w-16 h-16" />
              <h4 class="text-xl font-semibold text-gray-800 my-2">Supportive Community</h4>
              <p class="text-gray-600 text-base text-center">
                Many courses foster a strong sense of community among learners. You'll have the opportunity to interact with fellow students, share experiences, and collaborate on projects. Additionally, you may receive support from
                instructors and support staff, making your learning journey more enriching and enjoyable.
              </p>
            </div>
          </div>
          {/* Button */}
          <h1 className="mt-8 mb-4 md:text-2xl text-xl font-semibold text-[#F03939]">Get the opportunities in your hand</h1>
          <button className="bg-[#F03939] px-5 py-2 text-white font-medium">Get Started</button>
        </div>
      </section>
      <section id="section-4" className="flex flex-col justify-center min-h-screen lg:px-12 md:px-8 px-4 bg-[#FFF]">
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-semibold text-[#F03939] mb-4 text-center">Meet Your Instructors</h1>
        <p className="lg:text-2xl md:text-xl text-l  text-[#F03939]  mb-6 md:mb-8 text-center">Our learners are all professionally qualified and have rich experience, essential for giving a practical context to concepts</p>
        <div className="flex flex-col lg:flex-row gap-x-6 gap-y-8  justify-center">
          {/* 1 */}
          <div className="p-6">
            <h2 className="lg:text-2xl md:text-xl text-lg font-semibold text-center mb-2">Ryujin Itzy</h2>
            <img className="w-40 h-80 object-cover rounded-full mx-auto my-4" src="https://i.pinimg.com/564x/34/7c/5e/347c5e4e224c79d2ae85fc7c07303644.jpg" />
            <p className="text-center text-lg md:text-xl font-medium">
              Computer Engineering
              <br />
              Diponegoro University
            </p>
          </div>
          {/* 2 */}
          <div className="p-6">
            <h2 className="lg:text-2xl md:text-xl text-lg font-semibold text-center mb-2">Jihyooooo</h2>
            <img className="w-40 h-80 object-cover rounded-full mx-auto my-4" src="https://i.pinimg.com/564x/7f/c0/d4/7fc0d4d197966a0f667373931fe399fb.jpg" />

            <p className="text-center text-lg md:text-xl font-medium">
              Statistics
              <br />
              Brawijaya University
            </p>
          </div>
          {/* 3 */}
          <div className="p-6">
            <h2 className="lg:text-2xl md:text-xl text-lg font-semibold text-center mb-2">Yeji Itzy</h2>
            <img className="w-40 h-80 object-cover rounded-full mx-auto my-4" src="https://i.pinimg.com/564x/7f/08/c0/7f08c078b7c88956a891f934e41f2ed7.jpg" />

            <p className="text-center text-lg md:text-xl font-medium">
              Matemathics
              <br />
              Diponegoro University
            </p>
          </div>
        </div>
      </section>
      <section id="section-4" className="flex flex-col justify-center min-h-screen lg:px-12 md:px-8 px-4 bg-[#FAEFEF]">
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-semibold mb-6 md:mb-8 text-center">Where SkuyMath Alumni Now</h1>
        <p className="lg:text-2xl md:text-xl text-lg mb-6 md:mb-8 text-center">Our Alumni are all placed in reputed university due to the knowledge and skills gained from our courses.</p>
        <div className="flex flex-col lg:flex-row gap-x-6 gap-y-8 justify-center">
          {/* 1 */}
          <div className="p-6">
            <img className="h-40 object-cover mx-auto my-4" src="https://dmc-indonesia.com/wp-content/uploads/2022/03/Logo-UI-Universitas-Indonesia.png" />
          </div>
          {/* 2 */}
          <div className="p-6">
            <img className="h-40 object-cover mx-auto my-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Bogor_Agricultural_University_%28IPB%29_symbol.svg/2048px-Bogor_Agricultural_University_%28IPB%29_symbol.svg.png" />
          </div>
          {/* 3 */}
          <div className="p-6">
            <img className="h-40 object-cover mx-auto my-4" src="https://upload.wikimedia.org/wikipedia/id/thumb/9/9f/Emblem_of_Universitas_Gadjah_Mada.svg/1200px-Emblem_of_Universitas_Gadjah_Mada.svg.png" />
          </div>
          <div className="p-6">
            <img className="h-40 object-cover mx-auto my-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Logo_Universitas_Brawijaya.svg/2036px-Logo_Universitas_Brawijaya.svg.png" />
          </div>
          <div className="p-6">
            <img className="h-40 object-cover mx-auto my-4" src="https://upload.wikimedia.org/wikipedia/id/2/2d/Undip.png" />
          </div>
        </div>
      </section>
      <section id="section-4" className="flex flex-col justify-center min-h-screen lg:px-12 md:px-8 px-4 bg-[#Fff]">
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-semibold mb-6 md:mb-8 text-center">Ready to Develop Your Knowledge and Skill in Math ?</h1>
        <div className="flex flex-col lg:flex-row gap-x-6 gap-y-8 justify-center">
          {/* 1 */}
          <div className="p-6">
            <button className="bg-[#FF4820] text-2xl text-white px-8 py-4 rounded-sm w-fit">Get Started</button>
          </div>
        </div>
      </section>
      {/* <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <img src={logo} alt="Logo Perusahaan" class="h-16 w-16 mb-4 lg:mb-0" />

          <div class="flex flex-col items-center lg:items-start">
            <p class="mb-2">Hubungi Kami:</p>
            <p class="mb-2">Email: info@perusahaan.com</p>
            <p class="mb-2">Telepon: (123) 456-7890</p>

            <p>Alamat: Jalan Contoh No. 123, Kota, Negara</p>
          </div>

          <div class="flex space-x-4 mt-4 lg:mt-0">
            <a href="#" class="hover:text-gray-300">
              Beranda
            </a>
            <a href="#" class="hover:text-gray-300">
              Tentang Kami
            </a>
            <a href="#" class="hover:text-gray-300">
              Kontak
            </a>
          </div>
        </div>
      </footer> */}

      <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2 lg:col-span-1">
            <img src={logo} alt="Logo Perusahaan" class="h-40 w-40 mb-4" />
            <p>&copy; 2023 SkuiyMath. All rights reserved.</p>
          </div>

          <div class="col-span-1">
            <h4 class="text-lg font-semibold mb-4">Company</h4>
            <p>Terms & Condition</p>
            <p>Privacy & Policy</p>
          </div>

          <div class="col-span-1">
            <h4 class="text-lg font-semibold mb-4">Get In Touch</h4>
            <p>Semarang, Jawa Tengah</p>
            <p>+62 818-0419-6358</p>
            <p>skuymath@gmail.com</p>
          </div>

          <div class="col-span-1">
            <h4 class="text-lg font-semibold mb-4">Contact Us</h4>
            <div class="flex space-x-4">
              <button class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i class="fab fa-instagram"></i>
              </button>
              <button class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i class="fab fa-whatsapp"></i>
              </button>
              <button class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i class="fab fa-linkedin"></i>
              </button>
            </div>
          </div>
        </div>
      </footer>
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
