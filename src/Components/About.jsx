import React from "react";

const About = () => {
  return (
    <>
      <div className="app flex items-center h-[100vh] py-5 max-lg:px-5 max-lg:text-center max-lg:pt-[150px] justify-around flex-wrap">
        <div className="w-[60%] max-lg:w-full">
          <h6 className=" font-poppins ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius animi
            veniam ipsum nesciunt, dolores consectetur blanditiis deserunt iusto
            praesentium quibusdam fugiat ex libero impedit possimus pariatur
            nostrum hic fugit aut perspiciatis beatae dicta aspernatur
            distinctio! Mollitia consectetur, corporis doloribus ad officia, sed
            deleniti veniam dignissimos hic optio quo facere voluptas. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Distinctio libero
            saepe fuga minus corrupti veniam aut dignissimos, magni dolor ullam
            neque iusto, aliquid non fugit ratione. Sint reprehenderit tempore
            error? Libero obcaecati iste laudantium est tenetur, ab quia
            molestias sequi. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Est qui quisquam error consectetur cupiditate? Consequatur rem
            amet eveniet incidunt animi est accusantium eaque. Sed expedita
            consectetur modi doloribus voluptas dolorem sit molestiae. Sequi,
            voluptates rerum non voluptas provident quam ducimus?
          </h6>
          <button className="mt-4 border cursor-pointer w-[60%] py-2 bg-purple-400 text-white font-bold">
            Thanks for rading{" "}
          </button>
        </div>
        <img
          className="w-[400px] mt-5 max-md:w-full"
          src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </>
  );
};

export default About;
