const Hero = ({ src, alt, name, description }) => {
  return (
    <div className="hero">
      <div className="hero-content flex-col gap-3">
        <img src={src} className="w-32 h-32 rounded-full" alt={alt} />
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};

export default Hero;
