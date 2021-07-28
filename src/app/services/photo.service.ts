import { Injectable } from '@angular/core';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';




@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  public async addNewGallery(){
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      resource: CameraSource. Camera,
      quality: 100
    });
  }


}
