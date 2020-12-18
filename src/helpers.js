export const checkBudget = (budget, remaining)=>{
    let auxClass;

    if ( remaining < (budget / 4) ) {
        auxClass = "alert alert-danger";
    } else if ( remaining < (budget / 2) ) {
        auxClass = "alert alert-warning";
    } else {
        auxClass = "alert alert-success";
    }

    return auxClass;
}