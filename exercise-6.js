function angkaPalindrome(num) {
    for (var i = 0; i < num; i++) {
        num++

        var numString = String(num)
        var str = ''
        for (var j = numString.length - 1; j >= 0; j--) {
            str += numString[j]
        }
        if (str === numString) {
            return num
        }

    }
}
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001