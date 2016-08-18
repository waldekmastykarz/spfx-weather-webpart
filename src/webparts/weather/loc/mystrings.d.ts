declare interface IStrings {
  PropertyPaneDescription: string;
  DataGroupName: string;
  LocationFieldLabel: string;
}

declare module 'mystrings' {
  const strings: IStrings;
  export = strings;
}
