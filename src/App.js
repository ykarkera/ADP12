import "./styles.css";

export default function Generate() {
  const arr = new Array(101).fill(0);
  const thisNew = arr.map((item, index) => index);
  const heyNew = thisNew.filter((el) => el % 2 === 0);
  const arrLength = heyNew.length;

  const today = new Date();
  const dates = Array.from({ length: arrLength }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() - i * 2);
    return date;
  });

  const randomValues = dates.map((date) => ({
    date: date,
    val: Math.floor(Math.random() * 51)
  }));

  return (
    <ul>
      {randomValues.map((item, index) => (
        <li key={index}>
          {item.date.toLocaleDateString()}, {item.val}
        </li>
      ))}
    </ul>
  );
}
