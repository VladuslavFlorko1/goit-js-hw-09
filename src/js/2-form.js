const STORAGE_KEY = 'feedback-form-state';


let formData = {
  email: '',
  message: '',
};


const form = document.querySelector('.feedback-form');


const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);

  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}


form.addEventListener('input', event => {
  const { name, value } = event.target;
  if (name in formData) {
    formData[name] = value.trim(); // прибираємо пробіли на краях
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});


form.addEventListener('submit', event => {
  event.preventDefault();


  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  
  console.log(formData);


  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
});
