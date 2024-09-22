var _a;
(_a = document.getElementById("editableresume")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var btn = document.getElementById("btn");
    var username = document.getElementById("name");
    var dp = document.getElementById("dp");
    var userNumber = document.getElementById("number");
    var userskills = document.getElementById("skills");
    var userEducation = document.getElementById("education");
    var userExperience = document.getElementById("experience");
    var resumeOutput = document.getElementById("resumeOutput");
    var outputNameVal = document.getElementById("outputNameVal");
    var outputNameVal1 = document.getElementById("outputuserNameVal");
    var outputNumberVal = document.getElementById("outputNumberVal");
    var outputSkillVal = document.getElementById("outputSkillVal");
    var outputEduVal = document.getElementById("outputEduVal");
    var outputexperienceVal = document.getElementById("outputexperienceVal");
    var outputimgeVal = document.getElementById("imge");
    function updateImagePreview() {
        var _a;
        var file = (_a = dp.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            outputimgeVal.src = URL.createObjectURL(file);
        }
    }
    if (username && dp && userNumber && userskills && userEducation && userExperience) {
        var usernameVal = username.value;
        var userNumberVal = userNumber.value;
        var userskillsVal = userskills.value;
        var userEducationVal = username.value;
        var userExperienceVal = username.value;
        var userdp = dp.value;
        outputNameVal.innerHTML = usernameVal;
        outputNameVal1.innerHTML = usernameVal;
        outputNumberVal.innerHTML = userNumberVal;
        outputSkillVal.innerHTML = userskillsVal;
        outputEduVal.innerHTML = userEducationVal;
        outputexperienceVal.innerHTML = userExperienceVal;
        updateImagePreview();
    }
    function realtimeChanges() {
        outputNameVal.textContent = username.value;
        outputNameVal1.textContent = username.value;
        outputNumberVal.textContent = userNumber.value;
        outputSkillVal.textContent = userskills.value;
        outputEduVal.textContent = userEducation.value;
        outputexperienceVal.textContent = userExperience.value;
    }
    username.addEventListener("input", realtimeChanges);
    username.addEventListener("input", realtimeChanges);
    userNumber.addEventListener("input", realtimeChanges);
    userskills.addEventListener("input", realtimeChanges);
    userEducation.addEventListener("input", realtimeChanges);
    userExperience.addEventListener("input", realtimeChanges);
    dp.addEventListener("change", updateImagePreview);
    btn.addEventListener("click", function () {
        resumeOutput.style.display = "block";
    });
    realtimeChanges();
});
