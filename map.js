function sum(a, b) {
    return a + b;
  }
  
  const ans = sum(1, 2);
  console.log(ans);
  
  // Arrow function
  const sum1 = (a, b) => {
    return a + b;
  };
  const ans1 = sum1(1, 2); // Calling the function sum1 with arguments (1, 2)
  console.log(ans1); // Logging the result of sum1(1, 2), which should be 3
  // app.get('/',(res,rej)=>{
    
  // })
  
  
  // app.get('/',function(res,rej){
  
  // })
  
  //given an array and give me back new array in whih new value is multiplied by 2
  //[1,2,3,4,5]
  //[2,4,6,8,10]
  const input = [1, 2, 3, 4, 5];
  // const newArray = [];
  // for (let i = 0; i < input.length; i++) {
  //   newArray.push(input[i] * 2);
  // }
  // console.log(newArray);
  
  function transform(i)
  {
    return i*2;
  }
  // map(arr,transform)
  const ans3=input.map(transform);
  console.log(ans3)
  
  //another way
  const ans4=input.map(function(i){
    return i*2;
  })
  console.log(ans4)
  
  
  function customMap(arr, transformFn) {
    const transformedArray = [];
    for (let i = 0; i < arr.length; i++) {
      transformedArray.push(transformFn(arr[i]));
    }
    return transformedArray;
  }
  
  // Example usage:
  const inputArray = [1, 2, 3, 4, 5];
  
  // Example transform function to double each element
  function doubleValue(value) {
    return value * 2;
  }
  
  // Using the custom map function
  const transformedArray = customMap(inputArray, doubleValue);
  console.log(transformedArray); // Output: [2, 4, 6, 8, 10]
  //filtering 
  //give even values from it
  const arr1=[1,2,3,4,5,6,7,8]
  const newArr=[];
  for(let i=0;i<arr1.length;i++)
    {
      if(arr1[i]%2===0)
      {
        newArr.push(arr1[i]);
      }
    }
  
  console.log(newArr)
  //filter
  // Define the filtering condition function
  function filtering(n) {
    if (n % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  const names = ['harkirat', 'kiran', 'kartik'];
  
  // Use the filter method with a callback function
  const ans11 = names.filter(function (name) {
    // Check if the name starts with 'k'
    if (name.startsWith('k')) {
      return true; // Return true if the condition is met
    } else {
      return false; // Return false otherwise
    }
  });
  
  console.log(ans11); // Output the filtered array