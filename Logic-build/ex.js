// problem 1 
function newPrice(currentPrice, discount) {

    
    if (typeof currentPrice !== "number" || typeof discount !== "number") {
        return "Invalid";
    }

    if (discount < 0 || discount > 100) {
        return "Invalid";
    }

    
    let discountAmount = (currentPrice * discount) / 100;
    let finalPrice = currentPrice - discountAmount;

    
    return finalPrice.toFixed(3);
}


// problem 2 
function validOtp(otp) {

    
    if (typeof otp !== "string") {
        return "Invalid";
    }

    
    if (otp.length !== 8) {
        return false;
    }

    
    if (!otp.startsWith("ph-")) {
        return false;
    }

    return true;
}


// problem 3  
function finalScore(obj) {

    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
        return "Invalid";
    }

    let { right, wrong, skip } = obj;


    if (
        typeof right !== "number" || typeof wrong !== "number" || typeof skip !== "number"
    )
     {
        return "Invalid";
    }

    if (right + wrong + skip !== 100) {
        return "Invalid";
    }
    let score = right - (wrong * 0.5);

    return Math.round(score);
}


// problem 4 
function gonoVote(votes) {
    // validation
    if (!Array.isArray(votes)) {
        return "Invalid";
    }

    let haCount = 0;
    let naCount = 0;

    // count votes
    votes.forEach(vote => {
        if (vote === "ha") haCount++;
        else if (vote === "na") naCount++;
    });

    if (haCount > naCount) return true;
    else if (haCount < naCount) return false;
    else return "equal";
}


// problem 5 
function analyzeText(text) {

    // validation
    if (typeof text !== "string" || text.trim() === "") {
        return "Invalid";
    }
    let token = text.split(" ").join("").length;

    let words = text.split(" ");
    let longwords = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longwords.length) {
            longwords = words[i];
        }
    }

    return {
        longwords: longwords,
        token: token
    };
}
