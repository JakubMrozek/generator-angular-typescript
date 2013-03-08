module app {

  export interface IController {}

  export interface IDirective {}

  export interface IFilter {
    filter (input: string): string;
  }

  export interface IService {}

}