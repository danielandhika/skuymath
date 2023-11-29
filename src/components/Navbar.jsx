const NavLink = [
  {
    title: "Courses",
    path: "/courses",
  },
  {
    title: "Testimonials",
    path: "/testimonials",
  },
  {
    title: "Why SkuyMath",
    path: "/why-us",
  },
  {
    title: "Mentors",
    path: "/mentors",
  },
  {
    title: "Alumni",
    path: "/alumni",
  },
];

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center lg:py-12 py-6">
      <h1 className="text-2xl text-[#D20202] font-semibold">SkuyMath</h1>
      <div className="hidden lg:flex lg:gap-12 md:gap-8">
        {NavLink.map((item, index) => (
          <h1 key={index} className="text-[#D20202]">
            {item.title}
          </h1>
        ))}
      </div>
      <div className="hidden lg:flex gap-4">
        <button className="text-[#D20202] font-medium px-6 py-2">Login</button>
        <button className="bg-[#D20202] text-white px-6 py-2 rounded-md">
          Register
        </button>
      </div>
    </div>
  );
};
export default Navbar;
