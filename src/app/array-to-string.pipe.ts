import { Pipe, PipeTransform } from '@angular/core';
import { isEmpty } from 'rxjs';

@Pipe({
  name: 'arrayToString'
})
export class ArrayToStringPipe implements PipeTransform {

  transform(value: any): string {
    console.log('***** value:', value);  // Log the value
    console.log('***** Type of value:', typeof value);  // Log the type of value
    
    // If the value is an array, join its elements into a string with commas
    if (Array.isArray(value) && value.length > 0) {
      return value.join(', ');
    }

    // If the value is a string that looks like an array but is not valid JSON
    if (typeof value === 'string' && value.startsWith('[') && value.endsWith(']')) {
      try {
        // Try to fix the string if it's not a valid JSON format by adding quotes around the items
        const cleanedString = value.replace(/^\[|\]$/g, '').trim();  // Remove leading [ and trailing ]
        console.log('*******'+cleanedString);
        // const parsedArray = JSON.parse(cleanedString);  // Now parse the string into an array
        // console.log('****gg***'+parsedArray);

        
        if (cleanedString==''){
          return 'NA';  // Join array elements into a string


        }else{
        return cleanedString;  // Join array elements into a string
      }
      } catch (e) {
        console.error('Error parsing string:', e);
        return 'No Data';  // If parsing fails, return 'No Data'
      }
    }

    // If the value is neither an array nor a valid array string, return 'No Data'
    return 'No Data';
  }
}
