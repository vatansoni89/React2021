# `Transient` Vs `Scoped` Vs `Singleton`

`Transient` objects are `always different`. A new instance is provided to every controller and every service.

`Scoped` objects are the `same within a request, but different across different requests`.

`Singleton` objects are the `same` for every object and every request.

# == Vs Equals()
## `==`: Compares the reference identity.\
## `Equals()`: Compares only contents

