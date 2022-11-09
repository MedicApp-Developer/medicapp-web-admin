import { CEO, FINANCE, EMPLOYEE } from "../constants/Roles"
import { CEORoutes } from "../constants/routes/CEORoutes";
import { FinanceRoutes } from "../constants/routes/FinanceRoutes";
import { EmployeeRoutes } from "../constants/routes/EmployeeRoutes";

export const selectNav = (role) => {
    let selectedNav = "/";
    switch (role) {
        case CEO: selectedNav = CEORoutes[0].name; break;
        case FINANCE: selectedNav = FinanceRoutes[0].name; break;
        case EMPLOYEE: selectedNav = EmployeeRoutes[0].name; break;
        default: selectedNav = ""
    }
    return selectedNav;
}
