
// eslint-disable-next-line react/prop-types
const Card = ({ children , bg = 'bg-gray-100' }) => {  //Display a card
  return <div className= {`${bg} p-6 rounded-ld shadow-md`}> { children }</div>;
};

export default Card;