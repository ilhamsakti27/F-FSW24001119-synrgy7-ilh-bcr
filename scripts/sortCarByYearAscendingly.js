function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  // console.log("Ini variable result")
  result.sort((car1, car2) => {
    if (car1.year < car2.year) return -1; // car1 harus ditempatkan sebelum car2
    if (car1.year > car2.year) return 1; // car2 harus ditempatkan setelah car2
    return 0; // car1 dan car2 dianggap sama, tidak ada perubahan urutan
  });
  
  // console.log(result)

  // console.log("------------")
  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
