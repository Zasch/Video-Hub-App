import { Pipe, PipeTransform } from '@angular/core';
import { ImageElement } from '../common/final-object.interface';

@Pipe({
  name: 'folderViewPipe'
})
export class FolderViewPipe implements PipeTransform {

  constructor() { }

  /**
   * Inserts folders os elements for file view
   * @param finalArray
   * @param render      whether to insert folders
   * @param folderOnly  whether to ONLY show folders
   */
  transform(finalArray: any[], render: boolean, folderOnly: boolean): any[] {
    if (render) {
      const arrWithFolders = [];

      let previousFolder = '';

      finalArray.forEach((element, index) => {
        if (previousFolder !== element.partialPath) {
          const tempClone: ImageElement = {
            cleanName: '***',
            duration: 0,
            fileName: element.fileName,
            fileSize: 0,
            hash: '',
            numOfScreenshots: 10, // temp hardcoded
            partialPath: element.partialPath,
            resolution: '',
          };

          arrWithFolders.push(tempClone);
          previousFolder = element.partialPath;
        }
        if (!folderOnly) {
          arrWithFolders.push(element);
        }
      });

      // console.log('folderViewPipe running');

      return arrWithFolders;
    } else {
      return finalArray;
    }
  }

}
