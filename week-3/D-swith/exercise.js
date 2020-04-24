function startWindows() {
    console.log("Windows has started");
  }
  function startLinux() {
    console.log("Linux has started");
  }
  function startOSX() {
    console.log("OSX has started");
  }
  function prompt() {
    console.log("The OS provided is not supported");
  }
  
var os = "osx";

  function init(os) {
    // write your code here
    switch (os){
        case "windows":
            startWindows();
            break;
          case "linux":
            startLinux();
            break;
          case "osx":
            startOSX();
            break;
            default: 
            prompt();
            break;
                  
    }
  }
  
  init("linux");
  init("osx");
  init("other");