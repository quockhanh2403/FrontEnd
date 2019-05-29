import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  addStudentForm: FormGroup;
  constructor(private fb: FormBuilder, private studentService: StudentService) { }

  ngOnInit() {
    this.addStudentForm = this.fb.group({
      name: [''],
      birth: ['']
    });
  }

  onSubmit() {
    console.log(this.addStudentForm.value);
    this.studentService.addStudent(this.addStudentForm.value).subscribe(
      response => console.log('Success', response),
      error => console.log('Error', error));
  }

}
