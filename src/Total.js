const Total = ({ exercises1, exercises2, exercises3 }) => {
  return (
    <div>
      <p>
        Total Number of exercises <b>{exercises1 + exercises2 + exercises3}</b>
      </p>
    </div>
  );
};

export default Total;
