export const checkBudget = (budget, remaining) => {
  let badge;
  let index = remaining / budget;
  if (index > 0.75) {
    badge = "alert alert-success";
  } else if (index < 0.75 && index > 0.25) {
    badge = "alert alert-warning";
  } else {
    badge = "alert alert-danger";
  }

  return badge;
};
