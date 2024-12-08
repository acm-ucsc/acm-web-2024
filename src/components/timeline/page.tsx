import CarouselWrapper from "./carouselWrapper"; // Make sure this is the correct import path

const Home = () => {
  return (
    <div className="bg-black min-h-[400px] py-10 flex flex-col justify-center items-center" id="events">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mt-8 text-center w-full max-w-4xl mx-auto">
        OUR EVENTS
      </h1>
      <CarouselWrapper />{" "}
      {/* Carousel wrapper will handle the mobile and desktop views */}
    </div>
  );
};

export default Home;
