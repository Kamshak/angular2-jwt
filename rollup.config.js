export default {
  entry: './dist/index.js',
  dest: './dist/bundles/angular2-jwt.umd.js',
  format: 'umd',
  moduleName: 'angular2-jwt',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/http': 'ng.http',
    'rxjs/Observable': 'Rx',
    'rxjs/add/observable/fromPromise': 'Rx.Observable.prototype',
    'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype'
  }
}