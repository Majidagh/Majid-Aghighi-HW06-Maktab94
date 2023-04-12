const salaries = {
  John: 100,
  Pete: 300,
  majid: 300,
  Mary: 250,
};

function topSalary(salaries) {
  const TopSalaries = [];

  let topSalary = 0;

  for (const [name, salary] of Object.entries(salaries)) {
    topSalary = salary >= topSalary ? salary : topSalary;
  }

  for (const [name, salary] of Object.entries(salaries)) {
    if (topSalary == salary) {
      TopSalaries.push(name);
    }
  }

  return TopSalaries;
}

let result = topSalary(salaries);
console.log(result);
