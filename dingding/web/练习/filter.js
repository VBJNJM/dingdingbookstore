const data = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Charlie' },
  { id: 3, name: 'David' },
];

const result = data.filter(item => item.id === 1);

console.log(result);
// Output: [{ id: 1, name: 'Alice' }, { id: 1, name: 'Charlie' }]
