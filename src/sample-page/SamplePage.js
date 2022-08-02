import useCount from "common/hooks/useCount";

export default function SamplePage() {
  const { count, inc, dec } = useCount();
  return (
    <div>
      <h3>Sample Pages</h3>
      <div>{`COUNT : ${count}`}</div>
      <button onClick={inc}>plus</button>
      <button onClick={dec}>minus</button>
    </div>
  );
}
