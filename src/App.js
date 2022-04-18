function App() {

  const list = [1, 3, 5, 6];
  const dataList = [
    {
      name: 'taro',
      age: 21
    },
    {
      name: 'hanako',
      age: 23
    }
  ]
  return (
    <div>
      <h1>Map Plactice</h1>
      {list.map((number) => (
        <div>
          {number * 2}
        </div>
      ))}
      {dataList.map((data) => (
        <div>
          <div>{data.name}</div>
          <div>{data.age}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
