const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <span className="w-16 border-blue-600 h-16 border-[4px] border-l-transparent animate-spin rounded-full"></span>
    </div>
  );
};

export default LoadingSpinner;
