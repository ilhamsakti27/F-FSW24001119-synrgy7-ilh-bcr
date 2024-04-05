function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  result.sort((car1, car2) => {
    if (car1.year > car2.year) return -1;
    if (car1.year < car2.year) return 1;     return 0;
  });

  // console.log("Result descending");
  // console.log(result);
  // console.log("----------");

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
