function mincost(arr)
{ 
//write your code here
// r
	 let minHeap = [...arr].sort((a, b) => a - b); // Sorting initially to simulate a min heap
    let totalCost = 0;

    while (minHeap.length > 1) {
        // Extract the two smallest ropes
        let first = minHeap.shift();
        let second = minHeap.shift();
        
        // Calculate the cost to connect them
        let cost = first + second;
        totalCost += cost;
        
        // Insert the new merged rope back, keeping the heap sorted
        minHeap.push(cost);
        minHeap.sort((a, b) => a - b);
    }
    
    return totalCost;
	
  
}

module.exports=mincost;
