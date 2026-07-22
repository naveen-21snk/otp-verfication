let generatedOTP = "";
function sendOTP() {
    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    alert("Demo OTP: " + generatedOTP);
    document.getElementById("result").innerHTML = "OTP Sent Successfully!";
}
function verifyOTP() {
    let userOTP = document.getElementById("otp").value;
    if (userOTP === generatedOTP) {
        document.getElementById("result").innerHTML = "✅ OTP Verified Successfully!";
    } else {
        document.getElementById("result").innerHTML = "❌ Invalid OTP!";
    }
}