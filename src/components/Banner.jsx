import BannerImg from '../assets/banner.svg'

const Banner = () => {
  return (
    <section className="relative flex items-center">
      {/* left -words */}
      <div className="w-1/2 bg-white h-[500px] flex flex-col items-start px-10 pt-36 ">
        <h1 className="text-5xl font-bold">
          YOUR <span className="text-red-500">SUCCESS</span> JOURNEY START WITH
          US!
        </h1>
        <p className="pt-4 pb-4 text-xl">Providing A marketable Skills To Create A Brighter Future</p>

        <div className="absolute bottom-4 flex flex-row items-center justify-center gap-4 font-bold mt-16 text-lg">
          <button className=" bg-red-500 rounded-lg text-white  p-3 hover:bg-blue-500">
            Apply Online
          </button>
          <button className=" bg-blue-500 rounded-lg text-white  p-3  hover:bg-red-500">
            Discover
          </button>
        </div>
      </div>
      {/* right -- image */}
      <div className="relative w-1/2  h-[500px]">
        <div className='absolute right-[400px] top-24 -z-10 w-20 h-20 bg-red-500 rounded-full'>

        </div>
        <img src={BannerImg} alt="" className='w-[550px]'/>
      </div>
    </section>
  );
};
export default Banner;
