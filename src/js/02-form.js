const form = document.querySelector(".feedback-form")
const FORM_DATA = "feedback-form-data"

console.log(FORM_DATA)

function saveFormItem(event) {
    event.preventDefault()
    const formList = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim()
    }
    console.log(formList.email)

    const transformedList = JSON.stringify(formList)
    localStorage.setItem(FORM_DATA, transformedList)
}

form.addEventListener("submit", saveFormItem)