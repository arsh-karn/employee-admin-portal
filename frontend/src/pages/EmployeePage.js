import { useState, useEffect } from "react";
import { fetchEmployees } from "../services/api";

export default function EmployeePage() {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchEmployees(page).then(setEmployees);
  }, [page]);

  return (
    <div>
      <h2>Employees</h2>
      <table border="1">
        <thead>
          <tr><th>ID</th><th>Name</th><th>Department</th><th>Role</th></tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setPage(p => Math.max(p - 1, 0))}>Prev</button>
      <button onClick={() => setPage(p => p + 1)}>Next</button>
    </div>
  );
}
