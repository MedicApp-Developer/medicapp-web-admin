import { Switch, withRouter } from "react-router-dom";
import FinanceRoute from "../../ProtectedRoutes/FinanceRoute";
import AddExpenses from "./AddExpenses";
import Expenses from "./Expenses";

const FinanceRouter = withRouter(({ match, ...props }) => {
  return (
    <Switch {...props}>
      <FinanceRoute exact path={`${match.path}`}>
        <Expenses />
      </FinanceRoute>
      <FinanceRoute exact path={`${match.path}/add`}>
        <AddExpenses />
      </FinanceRoute>
    </Switch>
  );
});

export default FinanceRouter;
