import "./userCard.css";

export default function UserCard({ name, age, location, gender, image }) {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{location}</p>
      <div className="gender">
        {gender == "male" ? <p>♂</p> : <p>♀</p>}
        <p>{gender}</p>
      </div>
    </div>
  );
}
