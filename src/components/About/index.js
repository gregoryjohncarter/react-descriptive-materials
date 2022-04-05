import React from 'react';
// import coverImage from "../../assets/cover/cover-image.jpg";

function About({ currentCategory }) {
  const { section, description } = currentCategory;
  return (
    <section className="">
      <h1 id="">{section}</h1>
      <p className="">{description}</p>
    </section>
  );
}

export default About;