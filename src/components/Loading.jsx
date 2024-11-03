import { ClipLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-200 bg-opacity-50">
      <div className="text-center">
        <ClipLoader size={100} color={"#3498db"} />
        <p className="mt-4 text-xl font-semibold text-green-500 animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
