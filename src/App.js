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
  ];
  const words = ['apple', 'lemon', 'grapefruit', 'kiwi', 'peach'];
  const result = words.filter((word) => word.length < 6);
  console.log(result);
  //splice aplice(start, deletecount, 'items)
  const months = ['january', 'february', 'april', 'may'];
  const result2 = months.splice(1, 1, 'march');
  console.log(result2);

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
      <div>三項演算子</div>
      {false ? <div>true</div> : <div>false</div>}
    </div>
  );
}

export default App;
