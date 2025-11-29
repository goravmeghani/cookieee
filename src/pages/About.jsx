import AnimatedPage from '../components/common/AnimatedPage';

const About = () => {
  return (
    <AnimatedPage>
      <div className="container-padding mx-auto py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl text-primary">Our Story</h1>
          <p className="text-xl mt-2">Baking the world a better place, one cookie at a time.</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-secondary p-8 rounded-lg shadow-lg order-2 md:order-1">
            <h2 className="font-heading text-3xl text-primary mb-4">From a Humble Kitchen</h2>
            <p className="mb-4">
              Crumble Creations started in a small kitchen with a big dream: to share the joy of a perfect, homemade cookie. Our founder, Jane Dough, spent years perfecting her family's recipes, using only the finest ingredients and a whole lot of love.
            </p>
            <p className="mb-4">
              What began as a neighborhood favorite quickly grew, but our commitment to quality has never wavered. We believe that every cookie should be a small moment of happiness.
            </p>
            <p>
              From classic chocolate chip to innovative seasonal flavors, each cookie is handcrafted with care, ensuring that perfect texture and taste in every bite.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.pexels.com/photos/3845812/pexels-photo-3845812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Baker decorating cookies" 
              className="rounded-lg shadow-xl w-full h-auto object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default About;
