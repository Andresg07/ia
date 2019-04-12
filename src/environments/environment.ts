// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const firebaseConfig = {
  apiKey: 'AIzaSyDefCU-jXb21ceGGZyt7ltrijBNIkyanyg',
  authDomain: 'iann-db368.firebaseapp.com',
  databaseURL: 'https://iann-db368.firebaseio.com',
  projectId: 'iann-db368',
  storageBucket: 'iann-db368.appspot.com',
  messagingSenderId: '866185524490'
  };

  export const snapshotToArray = snapshot => {
    // tslint:disable-next-line: prefer-const
        let returnArray = [];
        snapshot.forEach(element => {
    // tslint:disable-next-line: prefer-const
          let item = element.val();
          item.key = element.key;
          returnArray.push(item);
        });
        return returnArray;
      };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
