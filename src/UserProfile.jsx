function UserProfile({
  name,
  age,
  isOnline = true,
  address,
  hobbies,
  greetUser,
  children,
}) {
  // return { name }, { age };
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Status: {isOnline ? "online" : "offline"}</p>
      <p>
        Address: {address.city}, {address.country}
      </p>

      <p>Hobbies: </p>
      <ul>
        {hobbies.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </ul>
      <div onClick={greetUser}>greetUser</div>
      <div>{children}</div>
    </div>
  );
}

export default UserProfile;
