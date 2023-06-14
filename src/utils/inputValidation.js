export const isContactInputValid = (name, phone, email) => {
  if (name === "" || phone === "" || email === "") {
    return false;
  }
  return true;
};

export const isCompanyInputValid = (company, employees, about) => {
  console.log(company, employees, about);
  if (company === "" || employees === "" || about === "") {
    return false;
  }
  return true;
};

export const isProjectInputValid = (objectives) => {
  if (objectives === "") {
    return false;
  }
  return true;
};
