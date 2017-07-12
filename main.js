// The Form Data
// Write your code below this array
let formData = [{
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [{
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobil Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
]

// Looping
// Sample of how to loop over the formData

const fieldset = document.querySelector("fieldset")

for (let i = 0; i < formData.length; i++) {


  if (formData[i].type === "select") {

    let select = document.createElement("select")

    select.label = formData[i].label
    select.id = formData[i].id

    fieldset.appendChild(select)

    const option = document.createElement("option")
    option.label = "Select Language..."
    option.disabled = true
    option.selected = true
    select.appendChild(option)

    for (var g = 0; g < formData[i].options.length; g++) {

      let selectOption = document.createElement("option")

      selectOption.label = formData[i].options[g].label
      selectOption.value = formData[i].options[g].value

      select.appendChild(selectOption) }


    } else if (formData[i].type === "textarea") {

    let textArea = document.createElement("textarea")

    textArea.label = formData[i].label
    textArea.id = formData[i].id
    textArea.placeholder = formData[i].label
    fieldset.appendChild(textArea)
  }

    else{

      let input = document.createElement("input")
      input.type = formData[i].type
      input.placeholder = formData[i].label
      input.label = formData[i].label
      input.id = formData[i].id
      fieldset.appendChild(input)

    }
}
