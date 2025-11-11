const Badge = ({ label }) => {
  return (
    <div
      variant="secondary"
      className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
    >
      {label}
    </div>
  );
};

export default Badge;
