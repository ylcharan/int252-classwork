// function Pract() {
//   const users = ["girish", "mani", "uppi"];

//   return (
//     <div>
//       {users.map((e, i) => {
//         return <div key={i}>{e}</div>;
//       })}
//     </div>
//   );
// }

// function Pract() {
//   const students = [
//     { name: "Aarav", marks: 88 },
//     { name: "Riya", marks: 82 },
//   ];

//   return (
//     <div>
//       <h3>Student Marks</h3>
//       {students.map((e, i) => (
//         <div key={i} style={{ display: "flex", gap: "20px" }}>
//           <p>Name: {e.name}</p>
//           <p>marks: {e.marks}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

function Pract() {
  const hobbies = ["Reading", "Music", "Traveling"];

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "start" }}
    >
      {hobbies.map((e, i) => (
        <p key={i}>
          {i + 1}. {e}
        </p>
      ))}
    </div>
  );
}
export default Pract;
