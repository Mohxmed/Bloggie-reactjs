export default function IconButton({ icon: Icon, onClick }) {
  const style =
    "p-2 rounded shadow  text-blue-800 active:opacity-80 active:bg-gray-100 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800";
  return (
    <button onClick={onClick} className={`${style} text-blue-600`}>
      <Icon size={20} />
    </button>
  );
}
