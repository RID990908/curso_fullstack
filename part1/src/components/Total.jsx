const Total = ({ parts }) => {
    if (!parts || parts.length === 0) {
        return <p>No parts available</p>
      }
    const total = parts.reduce((sum, part) => sum + part.exercises, 0);

    return (
        <p>
            <strong>Total of {total} exercises</strong>
        </p>
    );
};

export default Total;