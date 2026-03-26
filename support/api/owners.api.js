export class OwnersAPI {
  constructor(request) {
    this.request = request;
  }

  list() {
    // Usando o caminho completo para garantir a comunicação
    return this.request.get("http://localhost:9966/petclinic/api/owners");
  }

  getById(id) {
    // Adicionamos o "/petclinic" para bater com a rota real da API
    return this.request.get(`http://localhost:9966/petclinic/api/owners/${id}`);
  }
}