document
  .getElementById("editableresume")
  ?.addEventListener("submit", (event) => {
    event.preventDefault();

    let btn = document.getElementById("btn") as HTMLButtonElement;
    let username = document.getElementById("name") as HTMLInputElement;
    let dp = document.getElementById("dp") as HTMLInputElement;
    let userNumber = document.getElementById("number") as HTMLInputElement;
    let userskills = document.getElementById("skills") as HTMLTextAreaElement;
    let userEducation = document.getElementById(
      "education"
    ) as HTMLTextAreaElement;
    let userExperience = document.getElementById(
      "experience"
    ) as HTMLTextAreaElement;
    let resumeOutput = document.getElementById(
      "resumeOutput"
    ) as HTMLDivElement;

    let outputNameVal = document.getElementById(
      "outputNameVal"
    ) as HTMLHeadingElement;
    let outputNameVal1 = document.getElementById(
      "outputuserNameVal"
    ) as HTMLParagraphElement;
    let outputNumberVal = document.getElementById(
      "outputNumberVal"
    ) as HTMLParagraphElement;
    let outputSkillVal = document.getElementById(
      "outputSkillVal"
    ) as HTMLParagraphElement;
    let outputEduVal = document.getElementById(
      "outputEduVal"
    ) as HTMLParagraphElement;
    let outputexperienceVal = document.getElementById(
      "outputexperienceVal"
    ) as HTMLParagraphElement;
    let outputimgeVal = document.getElementById("imge") as HTMLImageElement;

    function updateImagePreview() {
      const file = dp.files?.[0];
      if (file) {
        outputimgeVal.src = URL.createObjectURL(file);
      }
    }
    if (
      username &&
      dp &&
      userNumber &&
      userskills &&
      userEducation &&
      userExperience
    ) {
      let usernameVal = username.value;
      let userNumberVal = userNumber.value;
      let userskillsVal = userskills.value;
      let userEducationVal = username.value;
      let userExperienceVal = username.value;
      let userdp = dp.value;

      outputNameVal.innerHTML = usernameVal;
      outputNameVal1.innerHTML = usernameVal;
      outputNumberVal.innerHTML = userNumberVal;
      outputSkillVal.innerHTML = userskillsVal;
      outputEduVal.innerHTML = userEducationVal;
      outputexperienceVal.innerHTML = userExperienceVal;
      updateImagePreview();
    }

    function realtimeChanges(): void {
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

    btn.addEventListener("click", () => {
      resumeOutput.style.display = "block";
    });
    realtimeChanges();
  });
