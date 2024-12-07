import Carousel from "./carousel";

const Home = () => {
  return (
    <div className="bg-black min-h-[400px] py-10 flex flex-col justify-center items-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center w-full max-w-4xl mx-auto">
        OUR EVENTS
      </h1>
      <Carousel />
    </div>
  );
};

export default Home;
