## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- in getElementById we can get id, in getElementsByClassName we can get class and in querySelector / querySelectorAll we can get like the css ..And getClassName we get the HTMLCollection but in query er get nodeList..

## How do you create and insert a new element into the DOM?
- For creating a element we can use createElement and for inserting we can use appendChild() method.

## What is Event Bubbling and how does it work?
- It is a method where it target the lowest child and then it getting rise up like child, father , grandFather , great- grandFather. It works when a event tiggerged then step by step it goes to the parent element like-- div--> body--> html-->document

## What is Event Delegation in JavaScript? Why is it useful?
- It is a mathod where i catch the parent and under that parent we can access any child through event.target and it is useful cause it held to target sepcific element with less code 

## What is the difference between preventDefault() and stopPropagation() methods?
- preventDefault() helps to reload autometic after refresh like , if we use form after assignment click event we must use preventDefault() . On the other hand stopPropagation() helps tho stop the bubbling 