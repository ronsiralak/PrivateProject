import unittest
from Calculator import Calculator

class TestCalculator(unittest.TestCase):

    def test_add(self):
        calculator = Calculator()
        result = calculator.add(3, 5)
        self.assertEqual(result, 8)
    
    def test_subtract(self):
        calculator = Calculator()
        result = calculator.subtract(10, 4)
        self.assertEqual(result, 6)
    
    def test_multiply(self):
        calculator = Calculator()
        result = calculator.multiply(4, 6)
        self.assertEqual(result, 24)
    
    def test_divide(self):
        calculator = Calculator()
        result = calculator.divide(15, 3)
        self.assertEqual(result, 5)

    def test_integration(self):
        calculator = Calculator()
        result = calculator.add(4, 5)
        result = calculator.multiply(result, 2)
        result = calculator.divide(result, 4)
        result = calculator.subtract(result, 1)
        self.assertEqual(result, 3.0)

if __name__ == '__main__':
    unittest.main()
