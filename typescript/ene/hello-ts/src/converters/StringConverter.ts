export namespace Conversion {

  export class StringConverter {
      /**
      First letter to upper
      */
      public static firstToUpper(input: string): string {
          let tab: string[] = [];
          for (let i = 0; i < input.length; i++) {

              if (i == 0) {
                  tab.push(input[0].toUpperCase());
              }
              else {
                  tab.push(input[i]);
              }
          }
          return tab.join("");
      }
  }

export var conversionLibraryVersion:string = '1.0';

}
