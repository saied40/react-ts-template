import useLocalStorageState from "@hooks/useLocalStorageState";

export default function Home() {
  const [count, setCount] = useLocalStorageState("count", 0);
  return (
    <div>
      <h1>Home</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} className="py-1 px-2 mx-2 border border-slate-500 hover:bg-slate-100 rounded-lg transition-all">Increment</button>
      <button onClick={() => setCount(count - 1)} className="py-1 px-2 mx-2 border border-slate-500 hover:bg-slate-100 rounded-lg transition-all">Decrement</button>
    </div>
  );
};
