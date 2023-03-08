# Homework #27 Array 

Minimum.

1. Create an array "Shopping list". Each element of the array is an object that contains the name of the product, the quantity and whether it is purchased or not, the price per unit, and the amount. Write several functions to work with such an array:
2. 1.a. Display the entire list on the screen in such a way that the products that have not yet been purchased go first, and then those that have already been purchased.
3. 1.b. Purchase a product. The function takes the name of the product and marks it as purchased.

Normal.

1. Deleting a product from the list (deletion should be done by creating a new array in which the product we are looking for will be absent)
2. Adding a purchase to the list. Keep in mind that when adding a purchase with a product already in the list, you need to increase the quantity in the existing purchase, not add a new one. In this case, the amount should also change, for example, if the price per unit is 12, and the number of products has become 2, then the amount will be 24.

Maximum

1. Calculating the sum of all products (including the quantity of each) in the list.
2. Counting the sum of all (not) purchased products.
3. Displaying products depending on the amount (from greater to lesser / from lesser to greater, depending on the function parameter it accepts)
