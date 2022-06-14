import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-array-concepts',
  templateUrl: './form-array-concepts.component.html',
  styleUrls: ['./form-array-concepts.component.css']
})
export class FormArrayConceptsComponent implements OnInit {


  submitted = false;
  technologyForm!: FormGroup;
  technology!: FormArray;
  version!: FormArray;
  user =
    {
      firstName: "shubham",
      lastName: "rana",
      technology: [
        { name: "react", id: "1", versions: [{ name: "1" }, { name: "2" }] },
        { name: "angular", id: "2", versions: [{ name: "angular1" },{name:'3'}] }]
    }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.technologyForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(),
      technology: new FormArray([
        this.createTechnology(),
      ])
    })
    this.technologyForm.patchValue({

    })
    // this.technologyForm.controls.technology.((x:any) => {

    // });
  }
  createTechnology(): FormGroup {
    return this.formBuilder.group({
      name: new FormControl(''),
      id: new FormControl('', Validators.required),
      versions: this.formBuilder.array([
        this.createVersion()
        
      ])
    });
  }

getFormControl(){
   return this.technologyForm.get('technology') as FormArray
}
  getControls() {
    return (this.technologyForm.get('technology') as FormArray).controls;
  }

  reset() {
    this.technologyForm.reset();
  }

  addNewTechnology() {
    this.technology = this.technologyForm.get('technology') as FormArray
    this.technology.push(this.createTechnology());
  }

  createVersion() {
    return this.formBuilder.group({
      name: new FormControl('', Validators.required)

    })
  }
  addVersion(i: any) {

    this.version = (<FormArray>this.technologyForm.controls['technology']).at(i).get('versions') as FormArray;
    this.version.push(this.createVersion())
  }
  removeVersion(i: any, versionId: any) {
    // alert("version")
    this.version = (<FormArray>this.technologyForm.controls['technology']).at(i).get('versions') as FormArray;


    this.version.removeAt(versionId)

  }

  submit() {
    this.submitted = true
    // console.log(this.technologyForm.controls.technology.value.length);

    if (this.technologyForm.valid) {
      console.log(this.technologyForm.value);
    } else {
      console.log("invalid form");

    }
  }
  deleteTechnology(technologyId: any) {


      this.technology.removeAt(technologyId)
    
  }
  get f() { return this.technologyForm.controls; }
}

