export default function runningSum(nums: number[]): number[] {
    let i = 1
    let running = []
    const firstNumber = nums[0]
    running.push(firstNumber)
    while (i < nums.length){
        running.push(running[i-1] + nums[i])
        ++i
    }
    return running 
}
