// customSplice: Adds, removes, or replaces items in an array
function customSplice(arr, start, deleteCount, ...items) {
    const result = [];
    for (let i = 0; i < start; i++) {
      result.push(arr[i]);
    }
    for (let i = 0; i < items.length; i++) {
      result.push(items[i]);
    }
    for (let i = start + deleteCount; i < arr.length; i++) {
      result.push(arr[i]);
    }
    return result;
  }
  
  // customSlice: Returns a part of the array
  function customSlice(arr, start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(arr[i]);
    }
    return result;
  }
  
  // customIncludes: Checks if an element is in the array
  function customIncludes(arr, element) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) return true;
    }
    return false;
  }
  
  // customToLowerCase: Converts a string to lowercase
  function customToLowerCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      result += String.fromCharCode(str.charCodeAt(i) |32);
    }
    return result;
  }
  
  // customToUpperCase: Converts a string to uppercase
  function customToUpperCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
      
      if (charCode >= 97 && charCode <= 122) {

        result += String.fromCharCode(charCode & ~32);
      } else {
        result += str[i];
      }
    }
    return result;
  }
  
  // customPush: Adds items to the end of the array
  function customPush(arr, ...items) {
    for (let i = 0; i < items.length; i++) {
      arr[arr.length] = items[i];
    }
    return arr.length;
  }
  
  // customPop: Removes the last item from the array
  function customPop(arr) {
    const lastElement = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return lastElement;
  }
  
