function UserCard({ username, email, country }) {
  // instead of writing props.username we directly extract them
  return (
    <div>
      <h2>{username}</h2>
      <p>Email: {email}</p>
      <p>Country: {country}</p>
    </div>
  );
}

export default UserCard;
