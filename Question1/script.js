const salaries = {
  john: 100,
  pete: 300,
  mary: 250,
};

const topSalary = (salaryPerson) => {
  for (const salary of Object.entries(salaryPerson)) {
    let [name, salary] = salary;
    console.log(salary);
  }
};
topSalary(salaries);
