// inventory model for machine
const drinks = {
    1: {
        name: "Mango Juice",
        stock: 2
    },
    2: {
        name: "Banana Smoothies",
        stock: 2
    },
    3: {
        name: "Gauva Mix",
        stock: 1
    },
    4: {
        name: "Citrus Blend",
        stock: 3
    }
};

// Vm need inventory object to give result 
// const vm = new VM(drinks) -> drinks is an inventory object in VM
const VM = (inventory) => {
    const drinks = inventory;

    if (!drinks) {
        throw new Error("No Inventory: cannot added New VM! ")
    }





let sale = (keyid) => {
    let stock = () => {
        const stockRange = Object.keys(drinks).reduce((count, number) => count + drinks[number].stock, 0)
        return stockRange;
    }
    if(!drinks[keyid]) {
        return -1;
    }



if(drinks[keyid].stock > 0) {
    drinks[keyid].stock--;
    return `1 ${drinks[keyid].name} - Thank you, come again`
} else {
    drink[keyid].stock = 0;
    return `${drinks[keyid].name} is out of stock come again`
} 

return sale
}
}
const any_varible= VM(drinks);

// const emptyVM = new VM(); we are not passing inventory so error 
// if inventory is not there , error 

// vm. drinks should output undefined that is private (constructor )
// vm. drinks sale(1) - delete stock by 1 ( reduce medthod )