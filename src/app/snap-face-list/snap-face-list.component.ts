import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "../models/face-snap.models";
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-snap-face-list',
  templateUrl: './snap-face-list.component.html',
  styleUrls: ['./snap-face-list.component.scss']
})
export class SnapFaceListComponent {
  faceSnaps!: FaceSnap[];
  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
  }

}
