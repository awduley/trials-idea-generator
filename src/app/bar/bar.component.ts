import { Component, OnInit } from '@angular/core';

import { valueArrays } from './arrays';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})

export class BarComponent implements OnInit {

  difficulty = null;
  theme = null;
  terrain = null;
  features = null; 

  constructor() { 
     
  }

  ngOnInit(): void {
  }

  getValues(): void {
    this.getDifficulty();
    this.getTheme();
    this.getTerrain();
    this.getFeature();
    
  } 

  getDifficulty() {
    const randDifficultyNum = Math.floor(Math.random() * valueArrays.difficulties.length);
    this.difficulty = valueArrays.difficulties[randDifficultyNum];
  }

  getTheme() {
    const randThemeNum = Math.floor(Math.random() * valueArrays.themes.length);
    this.theme = valueArrays.themes[randThemeNum];
  }

  getTerrain() {
    const randTerrainNum = Math.floor(Math.random() * valueArrays.terrain.length);
    this.terrain = valueArrays.terrain[randTerrainNum];
  }

  getFeature() {
    const randFeaturesNum = Math.floor(Math.random() * valueArrays.features.length);
    this.features = valueArrays.features[randFeaturesNum];
  }
}
