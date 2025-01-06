import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const e=document.querySelector(".feedback-form"),o="feedback-form-data";console.log(o);function a(m){m.preventDefault();const t={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};console.log(t.email);const s=JSON.stringify(t);localStorage.setItem(o,s)}e.addEventListener("submit",a);
//# sourceMappingURL=02-form.js.map
