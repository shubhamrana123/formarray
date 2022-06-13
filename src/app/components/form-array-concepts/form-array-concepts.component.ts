import { AfterContentInit, AfterViewInit, Component, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-array-concepts',
  templateUrl: './form-array-concepts.component.html',
  styleUrls: ['./form-array-concepts.component.css']
})
export class FormArrayConceptsComponent implements OnInit, AfterViewInit {

  // items!: FormArray;
  // orderForm!: FormGroup;
  // items!: FormArray;
  // orderForm!: FormGroup;
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
        { name: "angular", id: "2", versions: [{ name: "angular1" }] }]
    }
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.technologyForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(),
      technology: new FormArray([
        this.createTechnology()
      ])
    })
    this.technologyForm.patchValue(this.user)



  }


  ngAfterViewInit(): void {

    // console.log(this.orderForm.get('items')?.value.length);
    // console.log(this.orderForm.get('items')?.value);
    // const items= this.orderForm.get('items') as FormArray
    // console.log(items.value[0].itemDesc);
    // createItem(): FormGroup {
    //   return this.formBuilder.group({
    //     name: '',
    //     description: '',
    //     price: ''
    //   });
    // }

    // addItem(): void {
    //   this.items = this.orderForm.get('items') as FormArray;
    //   this.items.push(this.createItem());
  }

  createTechnology(): FormGroup {
    return this.formBuilder.group({
      name: new FormControl('', Validators.required),
      id: new FormControl('', Validators.required),
      versions: this.formBuilder.array([
        this.createVersion()

      ])
    });
  }


  getControls() {
    return (this.technologyForm.get('technology') as FormArray).controls;
  }
  //   get technology(){
  //     return this.technologyForm.get('technology') as FormArray
  //   }
  // //   remove(itemId:number){
  // this.items.removeAt(itemId)
  //   }
  reset() {
    this.technologyForm.reset();
  }
  getVersionControls() {
    return (this.technology.get('versions') as FormArray).controls;
  }
  addNewTechnology() {
    alert("hi")

    this.technology = this.technologyForm.get('technology') as FormArray
    this.technology.push(this.createTechnology());
  }

  createVersion() {
    // alert('version')
    return this.formBuilder.group({
      name: new FormControl('', Validators.required)

    })
  }
  addVersion(i: any) {

    this.version = (<FormArray>this.technologyForm.controls['technology']).at(i).get('versions') as FormArray;
    // this.technology= this.technologyForm.get('technology') as  FormArray
    // this.version=this.technology.get('version') as FormArray

    this.version.push(this.createTechnology())
  }
  removeVersion(versionId: any) {
    // this.version=  (<FormArray>this.technologyForm.controls['technology']).at(i).get('version') as FormArray;
    console.log(versionId);
    if (versionId > 0) {
      this.version.removeAt(versionId)
    }
  }

  submit() {
    this.submitted = true

    console.log();
    if (this.technologyForm.valid) {
      console.log(this.technologyForm.controls.technology);

    }


  }
  get f() { return this.technologyForm.controls; }
}

