import { CEO_ROUTE, EMPLOYEE_ROUTE, FINANCE_ROUTE } from "../constants/Redirects"
import { CEO, FINANCE, EMPLOYEE } from "../constants/Roles"

export const redirectTo = (role) => {
    console.log("ROLE => ", role);
    let redirecTo = "/";
    switch (role) {
        case CEO: redirecTo = CEO_ROUTE; break;
        case FINANCE: redirecTo = FINANCE_ROUTE; break;
        case EMPLOYEE: redirecTo = EMPLOYEE_ROUTE; break;
        default: redirecTo = "/login"
    }
    return redirecTo;
}
