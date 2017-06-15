var formData = [
  {
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
    "options": [
      {
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
];

/* START HERE */

// Sample of how to loop over the formData
for (let i = 0; i < formData.length; i++) {

  let form = document.querySelector('.form');

  if (formData[i].type === "select") {

    let select = document.createElement('select');

    select.id = formData[i].id;

    form.appendChild(select);

    for (let j = 0; j < formData[i].options.length; j++) {
      let ops = document.createElement('option');
      ops.textContent = formData[i].options[j].label;
      ops.value = formData[i].options[j].value;
      select.appendChild(ops);
    }
  } else {

    let input = document.createElement('input');

    input.type = formData[i].type;
    input.placeholder = formData[i].label;
    input.id = formData[i].id3
    input.style = "margin: 2.5%; width: 90%; ";
    form.appendChild(input);
  }
};
