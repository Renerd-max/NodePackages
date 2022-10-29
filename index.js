const { format } = require("date-fns")
//if you want to import a package as another name, destructure it has shown below. we import version 4 of uuid as "uuid."
const { v4: uuid } = require("uuid")

//to save a package as devDependency, install the package as (node i packageName -D)

console.log(format(new Date(), 'yy-MM-dd\tHH:mm:ss'))

console.log(uuid())

// when uninstalling a package, ensure to remove it from "scripts" since it will only be removed from the dependency array.