var process = () => {
    console.log("Process 1 is running ");
  
    var current_time = new Date().getTime();
  
    while (current_time + 3000 >= new Date().getTime()) {}
  
    console.log("Process 1 is Done ");
  };
  
  var current_time = new Date().getTime();
  console.log("Start");
  process();
  
  console.log("Done");
  