var cpf = require('gerador-validador-cpf')
export default{

  deliver: function (){

    var data = {
      name: 'Michael Couto',
      cpf:cpf.generate(),
      email: 'michael@michael.com',
      whatsapp: '11999999999',
      address:{
        postalcode:'04534011',
        street: 'Rua Joaquim Floriano',
        number: '1000',
        details: 'Ap 142',
        district:'Itaim Bibi',
        city_state:'São Paulo/SP'      
      },
      delivery_method: 'Moto',
      cnh:'cnh-digital.jpg'
  }
    return data
  }
}