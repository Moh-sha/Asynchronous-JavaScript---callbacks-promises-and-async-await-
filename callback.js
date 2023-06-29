const takeorder = (customer, callback) => {
  console.log(`order is given by ${customer}`);
  callback(customer);
};

const processing = (customer, callback) => {
  console.log("order is proceesing ");

  setTimeout(() => {
    console.log("order done !");
    console.log(`order is processing ${customer}`);
  }, 3000);
  callback(customer);
};

const done = (customer) => {
  console.log(`done ${customer}`);
};

takeorder("Customer1", (customer) => {
  //processing callback
  processing(customer, (customer) => {
    done(customer);
  });
});

console.log("shafin");
