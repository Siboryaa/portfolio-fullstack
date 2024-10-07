const Aboutme = () => {
return (

<div
  className="hero min-h-screen" id="aboutme" style={{backgroundImage: "url(src/assets/images/about.jpg)",}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-6xl font-bold">About me.</h1>
      <p className="mb-5 text-xl font-semibold">
      I am a Junior Web Developer and UI Designer. In web development, I am proficient in HTML, CSS, JavaScript, as well as frameworks like React.js and Node.js to build responsive and user-friendly websites. As a UI Designer, I am skilled in using Figma to create visually appealing and functional interfaces.
      </p>
    </div>
  </div>
</div>
  );
};
export default Aboutme;