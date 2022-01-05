/* 

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109

inputs::::

[9,1,4,7,3,-1,0,5,8,-1,6] => 7
[100,4,200,1,3,2] => 4
[0,3,7,2,5,8,4,6,0,1] => 9
[00] => 1
[0] => 1
[] => 0

*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length < 1){
        return 0;
    }
    
    const as = nums.sort((a,b) => a - b);
    const s = [...new Set(as)];
    let i = 0;
    let hash = []
    if(s.length === 1 && s[0] === 0){
        return 1;
    }
    let count = 1;
    while(i <= s.length - 1){
       
        if(s[i]+1 === s[i+1]){
            count++;
        }
        else{
           hash.push(count);
           count=1;
        }
        i++
    }
    return Math.max(...hash)
};
/* 
 nums=Array.from(new Set(nums)).sort((a,b)=>a-b)
  if(nums.length==0) return 0
  if(nums[0]==0 && nums.length==1) return 1
  const res=[]
  let counter=1

  for(let i=0; i<nums.length-1;i++){
    if(nums[i]+1==nums[i+1]){
      counter++
    }else{
      res.push(counter)
      counter=1
    }
    res.push(counter)
  }

    return Math.max(...res)
 */