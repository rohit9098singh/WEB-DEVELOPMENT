
const prompt=require("prompt-sync")();
const numStu=parseInt(prompt("enter the number of  the students:"));
const numSub=parseInt(prompt("enter the number of subjects:"))
const Allmark=[];
for(let i=0;i<numStu;i++){
    console.log(`enter the marks of the student ${i+1}:`);
    const studentMarks=[];
    for(let j=0;j<numSub;j++){
        const marks=parseFloat(prompt(`enter the marks for the subject ${j+1}:`));
        studentMarks.push(marks);
    }
    Allmark.push(studentMarks);
}
console.log("marks enterd by the usrs are ",Allmark);