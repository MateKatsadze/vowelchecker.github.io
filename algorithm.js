function countVowels() {
    var text = document.getElementById("textarea").value;
    var vowelsCount = 0;
    var vowels = ['ა', 'ე', 'ი', 'ო', 'უ'];
    var result = document.getElementById("result");


    for (var i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            vowelsCount++;
        };
    };

    result.innerText = vowelsCount;

}