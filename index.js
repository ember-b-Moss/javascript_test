function logOutNumbers() {
    for (let i = 1; i < 100; i++){
        if (i % 3) {
       console.log("This is divisible by 3")
        }else if(i % 5){
       console.log("This is divisible by 5")
        }else if(i % 3 && i % 5) {
        console.log("Jackpot!")
        }else{
            console.log(i)
        }
    }
 
}
logOutNumbers()


