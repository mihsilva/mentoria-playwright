export class OwnersAPI {
  constructor(request) {
    this.request = request;
  }
  list() {
    return this.request.get("http://localhost:9966/petclinic/api/owners");
  }
  getById(id) {
    return this.request.get(`/api/owners/${id}`);
  }
}