import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    // usar la version Async (readFile)
    // const json =
    const file = "./contacts.json";
    const promesa =  jsonfile.readFile(file)
    promesa.then(obj => this.data = obj);

    return promesa
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    // usar la version Async (writeFIle)
    const file = "./contacts.json"
    const promesa = jsonfile.writeFile(file, this.data, function(msj){
      console.log("Se agregó correctamente.")
    });
    // promesa.catch(err => console.log(err));
    
  }
  getOneById(id) {
    const encontrado = this.data.find((contacto) => {
      if (contacto.id == id) {
        return true;
      }
    });

    return encontrado;
  }
}
export { ContactsCollection, Contact };
