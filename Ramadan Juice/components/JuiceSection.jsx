import JuiceCard from "./JuiceCard";
import mangoImg from "../images/mango.jpg"
import lemonImg from "../images/lemon.jpg"
import pineappleImg from "../images/pineapple.jpg"

function JuiceSection() {
  const juices = [
    {
      id: 1,
      name: "Mango Juice",
      image: mangoImg,
      link: "https://www.youtube.com/watch?v=wjD76Ta_ANA",
    },
    {
      id: 2,
      name: "Lemon Juice",
      image: lemonImg,
      link: "https://www.youtube.com/watch?v=COx5Bf0PsQs"
    },
    {
      id: 3, 
      name: "Watermelon Juice",
      image: pineappleImg,
      link: "https://www.youtube.com/watch?v=AJRcOzR_13I"
    }
  ];

  return (
    <section>
      <h2>Juice Ideas</h2>

      <div>
        {juices.map((juice) => (
          <JuiceCard 
          key={juice.id}
          name={juice.name}
          image={juice.image}
          link={juice.link}
          />
        ))}
      </div>
    </section>
  );
}

export default JuiceSection;