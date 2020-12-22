import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments : string[] = ['Mars soil sample', 'Plant growth in habitat', 'Human bone density'];

  experimentBeingEdited = null;

  add(experiment : string){
    if(!this.experiments.includes(experiment)){
      this.experiments.push(experiment);
    }
  }

  remove(experiment : string){
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index,1);
  }

  edit(experiment : string){
    this.experimentBeingEdited = experiment;
  }

  save(updatedExperiment : string, originalExperiment : string){
    let index = this.experiments.indexOf(originalExperiment);
    this.experiments[index] = updatedExperiment;
    this.experimentBeingEdited = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
