import React from 'react';

const Home = () => {
   return (
      <div>
         <table class="table mt-3">
   <thead>
      <tr>
         <th scope="col">Employee ID</th>
         <th scope="col">First Name</th>
         <th scope="col">Last Name</th>
         <th scope="col">Email</th>
         <th scope="col">Mobile</th>
         <th scope="col">Salary</th>
         <th scope="col">Action</th>
      </tr>
   </thead>
   <tbody>
      <tr *ngFor="let data of employeeData |filter:lastName">
         <td>{{data.id}}</td>
         <td>{{data.firstName}}</td>
         <td>{{data.lastName}}</td>
         <td>{{data.email}}</td>
         <td>{{data.mobile}}</td>
         <td>{{data.salary}}</td>
         <td>
            <button (click)="editEmployee(data)" type="button" class="btn btn-info" data-bs-toggle="modal"
               data-bs-target="#exampleModal">Edit</button>
            <button (click)="deleteEmployee(data)" class="btn btn-danger mx-3">Delete</button>
         </td>
      </tr>
   </tbody>
</table>
      </div>
   );
}

export default Home;
