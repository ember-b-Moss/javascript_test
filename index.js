function logOutNumbers() {
    for (let i = 1; i < 100; i++){
        if (i % 3 && i % 5 === 0) {
       console.log("Jackpot!")
        }else if(i % 3 === 0){
       console.log("This is divisible by 3")
        }else if (1 % 5 === 0) {
        console.log("This is divisibe by 5")
        }else{
            console.log(i)
        }
    }
 
}
logOutNumbers()


