import Title from "../../Components/Title";

const AboutMe = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `/Frontend_Developer_Resume_of_Jannatul_Afroz_Faria.pdf`;
    link.download = "Frontend_Developer_Resume_of_Jannatul_Afroz_Faria.pdf";
    link.click();
  };

  return (
    <div>
      <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
        <Title heading={"introduction"}></Title>
      </div>
      <div
        data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-duration="1500"
        className="img_bg_about_me grid grid-cols-1 md:grid-cols-2 gap-6 p-6 shadow-xl rounded-xl"
      >
        <div
          data-aos="flip-up"
          data-aos-delay="2000"
          data-aos-duration="2500"
          className="w-full md:1/4"
        >
          <figure className="img_bg2">
            <div className="p-6 text-justify">
              <p className="text-orange-300 text-lg font-semibold">
                Committed to :
              </p>
              <p className="text-yellow-300 text-base ">
                Providing top-notch, scalable, and performant solutions, from
                creating user-friendly interfaces to putting strong front-end
                logic into place and interfacing with back-end systems.
                Continuously expanding my skill set, I stay up-to-date with the
                latest industry trends and best practices, ensuring efficient
                and maintainable code.
              </p>
              <div className="my-4">
                <p className="text-orange-300 text-lg font-semibold">
                  Fun Fact :
                </p>
                <p className="text-yellow-300 text-base">
                  I love reading story books, cycling and I know 4 languages.
                  They are : Bengali, English, Hindi & Urdu.{" "}
                </p>
              </div>
              <div className="">
                <p className="text-orange-300 text-lg font-semibold">
                  Currently Looking For :
                </p>
                <p className="text-yellow-300 text-base">Remote Job</p>
              </div>
            </div>
          </figure>
        </div>
        <div className="w-full md:w-5/6 mt-6">
          <h2
            data-aos="fade-left"
            data-aos-delay="1500"
            data-aos-duration="2000"
            className="card-title text-yellow-500 text-lg font-semibold"
          >
            About Me
          </h2>
          <div
            data-aos="fade-left"
            data-aos-delay="2000"
            data-aos-duration="2000"
            className="mb-6 text-justify text-yellow-300"
          >
            {/* <p>I'm a Web Developer with expertise in HTML, CSS, Tailwind, JavaScript, React.js, Node.js, MongoDB, and Express.js. Currently advancing my skills in Next.js, I focus on building responsive, user-friendly interfaces and have hands-on experience translating Figma designs into functional web pages. 
                        I’m also experienced with Vercel for deploying projects, gaining practical knowledge in continuous integration and deployment pipelines.
                    </p>
                    <p> My strengths include strong communication skills in English (written and oral), punctuality, and a collaborative spirit, making me a reliable team player. I’m highly adaptable, eager to learn, and flexible with working hours to meet project demands. I'm excited to keep expanding my skill set and contribute meaningfully to impactful projects!
                        I am capable of creating single-page applications and managing and storing data with MongoDB. With a passion for creating seamless user experiences, I thrive in collaborative environments where I can contribute to the full lifecycle of web development. 
                    </p> */}
            <p>
              I'm a Front-End Web Developer with 6 months of remote experience
              at N. I. Bloom Investments, where I contributed to building
              scalable, user-focused web applications. I specialize in React.js,
              Next.js, JavaScript, and modern CSS frameworks like Tailwind CSS
              and DaisyUI. <p className="mt-2">At N.I. Bloom, I developed reusable UI components
              using Next.js, TypeScript, and Tailwind CSS, boosting development
              efficiency by 30%. I worked in Agile sprints with cross-functional
              teams, helping deliver projects 20% faster through close
              collaboration and proactive communication. </p>
              <p className="mt-2">I’m highly skilled in
              translating Figma designs into responsive, production-ready code
              with a strong focus on detail and user experience. </p>
            </p>
            <p className="mt-2">Known for being
              reliable, adaptable, and a clear communicator, I thrive in remote
              team environments and am always eager to expand my skill set. I'm
              currently deepening my expertise in Next.js and TypeScript while
              contributing to impactful digital products.</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="3000"
            className="card-actions justify-start"
          >
            <button className="btn btn-base" onClick={handleDownload}>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
