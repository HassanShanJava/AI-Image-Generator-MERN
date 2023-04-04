import { surpriseMePrompts } from "../constants";

export const getRandomPrompt=(inputPrompt)=>{
    // get random index from 0->49
    const randomIndex=Math.floor(Math.random()*surpriseMePrompts.length)

    // returm random prompt
    // return surpriseMePrompts[randomIndex]


    // to make sur you dont get the same random prompt twice in a row
    const randomPrompt=surpriseMePrompts[randomIndex]
    if(randomPrompt===inputPrompt) return getRandomPrompt(inputPrompt)

    return randomPrompt

}