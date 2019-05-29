import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Student} from '../student';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService: StudentService, private fb: FormBuilder) { }
  students: Student[];
  student: Student;
  dtOptions: DataTables.Settings = {};
  addStudentForm: FormGroup;
  ngOnInit() {
    this.reloadData();
    this.dtOptions = {
      pagingType: 'full_numbers',
      processing: true
    };
    this.addStudentForm = this.fb.group({
      new_name: [''],
      new_birth: ['']
    });
  }

  getStudentById(id: number) {
    return this.studentService.getStudentById(id).subscribe(data => this.student = data);
  }

  reloadData() {
    this.studentService.getStudent().subscribe(data => this.students = data);
  }

  onSubmit() {
    console.log(this.addStudentForm.value);
    this.studentService.addStudent(this.addStudentForm.value).subscribe(response => console.log('Success', response),
        error => console.log('Error', error));
  }
}
