function Pract() {
  const users = ["girish", "mani", "uppi"];

  return (
    <div>
      {users.map((e, i) => {
        return <div key={i}>{e}</div>;
      })}
    </div>
  );
}

export default Pract;
