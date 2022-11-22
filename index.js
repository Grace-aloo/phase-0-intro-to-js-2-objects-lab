// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress:"12 Broadway",
}
function updateEmployeeWithKeyAndValue(employee,key,value){
  const updateEmployee = {...employee};
updateEmployee[key]= value;
return updateEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){

employee[key]= value;
return employee;
}
function deleteFromEmployeeByKey(employee,key){
const newobject={...employee};
delete newobject.name;
return newobject;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee.name;
    return employee;
}
    