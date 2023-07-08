import { Injectable } from "@angular/core";
import {FaceSnap} from "../models/face-snap.models";

Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
    {
      title: 'My First Snap',
      description: 'This is my first snap',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createDate: new Date(),
      snaps: 140,
      location: 'New York'
    },
    {
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createDate: new Date(),
      snaps: 6,
    },
    {
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createDate: new Date(),
      snaps: 50
    }
  ];
    getAllFaceSnaps(): FaceSnap[] {
      return this.faceSnaps;
    }
}
