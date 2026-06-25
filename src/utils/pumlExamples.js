export const pumlExamples = {
  sequence: `@startuml
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response
@enduml`,
  class: `@startuml
class User {
  String username
  String password
  void login()
}
class Admin {
  void deleteUser()
}
User <|-- Admin
@enduml`,
  usecase: `@startuml
actor Customer
Customer -> (Place Order)
Customer -> (Check Order Status)
(Place Order) ..> (Payment) : include
@enduml`
};
