import "../../styles/Hero.css";

function Hero(){
    return(
       <section className="hero">

        <div className="hero-content">

        
           <h1>
              AI-Powered Shopping Experience
           </h1>
           <p>
              Discover smarter shopping with personalized recommendations,
              trending products, and an intelligent shopping experience.
           </p>

           <div className="hero-buttons">

               <button>Shop Now</button>

               <button>Explore Products</button>

           </div>
        </div>   

        <div className="hero-image">

          <img

               src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"

               alt="Shopping"

          />

        </div>
       </section>
    );
}

export default Hero;