package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")

    // Declare and initialize variables
    var name string = "Alice"
    age := 30 // Type inference
    
    // Print variables
    fmt.Printf("Name: %s\n", name)
    fmt.Printf("Age: %d\n", age)

    // Basic operations
    a := 10
    b := 5
    
    sum := a + b
    difference := a - b
    product := a * b
    quotient := a / b
    
    fmt.Printf("Sum: %d\n", sum)
    fmt.Printf("Difference: %d\n", difference)
    fmt.Printf("Product: %d\n", product)
    fmt.Printf("Quotient: %d\n", quotient)

    // Array declaration and initialization
    var numbers [5]int
    numbers[0] = 1
    numbers[1] = 2
    numbers[2] = 3
    numbers[3] = 4
    numbers[4] = 5
    

    if age < 18 {
        fmt.Println("You are a minor.")
    } else if age >= 18 && age < 65 {
        fmt.Println("You are an adult.")
    } else {
        fmt.Println("You are a senior citizen.")
    }

    // For loop
    for i := 1; i <= 5; i++ {
        fmt.Println("Iteration", i)
    }
    
    // While loop equivalent
    j := 1
    for j <= 5 {
        fmt.Println("Iteration", j)
        j++
    }
    
    // Infinite loop with break
    k := 1
    for {
        fmt.Println("Iteration", k)
        k++
        if k > 5 {
            break
        }
    }

    // Declare and initialize a slice
    var numbersNew []int
    
    // Append elements to the slice
    numbersNew = append(numbersNew, 1)
    numbersNew = append(numbersNew, 2)
    numbersNew = append(numbersNew, 3)
    
    // Print the slice
    fmt.Println("Slice:", numbersNew)
    
    // Length and capacity of the slice
    fmt.Printf("Length: %d, Capacity: %d\n", len(numbersNew), cap(numbersNew))
    
    // Create a slice using a literal
    fruits := []string{"Apple", "Banana", "Cherry"}
    fmt.Println("Fruits:", fruits)
    
    // Append elements to the fruit slice
    fruits = append(fruits, "Date")
    fruits = append(fruits, "Elderberry")
    fmt.Println("Fruits after appending:", fruits)
}
