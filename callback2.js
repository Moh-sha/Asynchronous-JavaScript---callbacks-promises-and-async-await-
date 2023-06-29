const takeorder = (customer, callback) => {
  console.log(`order take ${customer}`);
  callback();
};

const processing = (customer, callback) => {
  console.log("order is proceesing ");

  setTimeout(() => {
    console.log("order done !");
    console.log(`order is processing ${customer}`);
  }, 3000);
  callback();
};

const waiter = (customer, callback) => {
  console.log(`waiter is give food ${customer}`);
  callback();
};

const done = () => {
  console.log("order  is done shafin");
};
takeorder("Shafin", () => {
  processing("Shafin", () => {
    waiter("shafin", () => {
      done();
    });
  });
});

console.log("enjoy");
