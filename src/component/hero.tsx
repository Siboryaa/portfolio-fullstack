const Hero = () => {
  return (

<div className="hero bg-base-200 min-h-screen" id="hero" style={{ backgroundImage: 'url(src/assets/images/sepeda.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="hero-content flex-col lg:flex-row">
    <div>
      <h1 className="text-2xl font-bold">Hi There!</h1>
      <p className="text-slate-600 py-1 text-5xl font-bold">
      I'm Sultan arya
      </p>
      <p className="text-indigo-400 py-1 text-4xl font-semibold">
      UI Designer & Web Developer
      </p>
      <p className=" py-2 text-3xl font-semibold">
      From Indonesia
      </p>
    </div>
  </div>
</div> 
  );
};
export default Hero;