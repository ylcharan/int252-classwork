// function Details(props) {
//   return (
//     <div>
//       <h3>{props.name}</h3>
//       <h3>{props.age}</h3>
//       <h3>{props.country}</h3>
//     </div>
//   );
// }

function Details({ name, age, country }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Country: {country}</h3>
    </div>
  );
}

export default Details;
