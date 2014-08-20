$(document).ready(function() {
  $('.bs-form-signup').bootstrapValidator({
    live: 'enabled',
    message: 'This value is not valid',
    fields: {
      name: {
          message: 'Nome de usuário inválido',
          validators: {
            notEmpty: {
                message: 'Nome de usuário é obrigatório.'
            },
            stringLength: {
                min: 6,
                max: 30,
                message: 'Nome do usuário deve ter entre 6 e 30 caracteres.'
            }
          }
        },
        email: {
          message: 'E-mail é obrigatório.',
          validators: {
            notEmpty: {
              message: 'E-mail é obrigatório'
            },
            stringLength: {
                min: 6,
                max: 30,
                message: 'Nome do usuário deve ter entre 6 e 30 caracteres.'
            },
            regexp: {
              regexp: /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
              message: 'Seu e-mail parece inválido. Corrija-o.'
            }
          }
        }
      }
  });
});