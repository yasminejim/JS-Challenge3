
const PII = (privateNumber) => {
    const person = "Hello, welcome back Yasmine!"
    const SNN = privateNumber;
  
    return {
      getName: function() {
        return person;
      },
    };
  };
  
  const account = PII();
  
  console.log(account.getName());  

  
  