import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scholarship',
  templateUrl: './scholarship.component.html',
  styleUrls: ['./scholarship.component.css']
})
export class ScholarshipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  code = `
  <div class="col-md-4">
    <label asp-for="StemActivities" class="control-label"></label>
    <input asp-for="StemActivities" class="form-control" rows="4" />
    <span asp-validation-for="StemActivities" class="text-danger"></span>
  </div>
  `
}
