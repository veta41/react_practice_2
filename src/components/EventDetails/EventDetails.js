export const EventDetails = ({ event }) => {
  const { name, images, pleaseNote, locale } = event;
  return (
    <div>
      <p>{name}</p>
      <img width="200" src={images[0].url} alt={name}></img>
      <p>{pleaseNote}</p>
      <p>{locale}</p>
    </div>
  );
};
