function JuiceCard({name, image, link}) {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div onClick={handleClick}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

export default JuiceCard;