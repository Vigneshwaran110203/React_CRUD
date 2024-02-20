
export function Features({ handleNameSort, handleAgeSort }) {
  return (
    <div className="sorting-buttons">
      <button onClick={handleNameSort}>Sort by Name</button>
    </div>
  );
}
