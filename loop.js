// node myFile.js



const pendingTimers = [];
const pendingOsTasks = [];
const pendingOperations = [];


//New timers, timers, tasks, operations are recoreded from myFile running
myFile.runContents();

function shouldContinue() {
	//Check one: Any pending setTimeout, SetInterval, setImmediate?
	//Check two: Any pending Os tasks? (like server Listining to port)
	//Check trhe: Any pending long running operations? (Like fs module)
	
	return pendingTimers.length || pendingOsTasks.length || pendingOperation.length
}


//Entire body executes in one 'tick'
while(shouldContinue()) {
	// 1) Node looks at pendingTimers and sees if any functions are ready to be called
	// 2) Node looks at pendingOsTasks and pendingOperations and calls relevant callbacks
	// 3) Pause execution. Continue when...
	//    a new PendingOsTask is done
	//    a new PendingOperation is done
	//    a timer is about to complete
	//
	// 4) Look at pendingTimers. Call any setImmediate
	// 5) Handle any 'close' events
}




// exit back to terminal
