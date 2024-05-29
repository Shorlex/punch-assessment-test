import Categories from "./Categories";
import Form from "./Form";

const Hero = () => {
  return (
    <section id="#hero" className="">
      <div>
        <div className="w-full text-center mt-20 md:mt-30 px-1">
          <h1 className="text-[54px] font-bold leading-[64px]">
            Finding the right fit{" "}
            <span className="inline-block">
              {" "}
              <img
                src="/images/4921166cf2646c0f6f42c6cf4855a5ea.gif"
                alt="gif"
                className="w-[68px] h-[43px]"
              />
            </span>{" "}
            has
            <br className="hidden lg:block" />
            never been easier.
          </h1>
          <p className="mt-3 text-xl">
            With our rigorous pre-vetting process, you'll never have to
            <br className="hidden md:block" />
            worry about finding the ideal candidate ever again.
          </p>
        </div>
        <div className="px-3">
          <Form />
        </div>
        <div>
          <Categories />
        </div>
          </div>
          <div className="mt-20">
              <img src="/images/Union.png" alt="union" />
          </div>
    </section>
  );
};

export default Hero;
