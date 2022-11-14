import React from 'react';

const Home = () => {
   return (
      <div>
         <div class="container-fluid">
   <div class="row text-center mt-4">
      <div class="col-md-6">
         <input type="text" class="form-control" name="firstName" [(ngModel)]="lastName" placeholder="search...">
      </div>
   </div>
</div>
      </div>
   );
}

export default Home;
