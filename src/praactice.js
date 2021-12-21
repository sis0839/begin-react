// const arr = ['seo', 29, 'DSM'];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// const [name, age, school] = arr;
// console.log(name);
// console.log(age);
// console.log(school);

const obj = {
  name: 'age',
  age: 29,
  school: 'DSM',
};

function me({ name, age, school }) {
  console.log(name);
  console.log(age);
  console.log(school);
}

me(obj);
