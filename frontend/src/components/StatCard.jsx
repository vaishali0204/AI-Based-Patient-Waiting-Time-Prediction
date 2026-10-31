
function StatCard(props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-gray-500 text-sm">
        {props.title}
      </h2>

      <p className="text-3xl font-bold text-blue-700 mt-2">
        {props.value}
      </p>

      <p className="text-gray-400 text-sm mt-2">
        {props.description}
      </p>
    </div>
  );
}

export default StatCard;
