import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.refreshEmp();
  }
 show: number=0;
 table: number=1;

openForm():void
 {
   this.show=1;
   this.table=0;
 }
 close():void{
   this.show=0;
   this.table=1;
 }
 onSubmit(empform : NgForm)
 {
 if(empform.value._id)
 {
  this.employeeService.putemp(empform.value).subscribe((res)=>{
    console.log(empform.value);
    this.show=0;
    this.table=1;
    this.refreshEmp();
    alert("Upadated Successfully");
  });
}
else{
  this.employeeService.postemp(empform.value).subscribe((res)=>{
    console.log(empform.value);
    this.show=0;
    this.table=1;
    this.refreshEmp();
    alert("Saved Successfully");
  });
}

  
 
}
  refreshEmp(){
    this.employeeService.getEmp().subscribe((res)=>{
      this.employeeService.employee = res as Employee[];
    })
  }
  onEdit(emp :Employee){
    
    this.employeeService.selectedEmployee = emp;
    this.show=1;
    this.table=0;

  }
  ondelete(_id: string)
  {
    if(confirm('Do you want to delete?')==true)
    
      {
        this.employeeService.delemp(_id).subscribe((res)=>{
          
          this.show=0;
          this.refreshEmp();
          alert("Deleted Successfully");
        });
    }
  

}
}
