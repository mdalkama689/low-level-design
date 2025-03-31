// learn about abstraction
// abstraction means we will hide the complexity 
// 🚀 Rule of Thumb: If a piece of code is complex, repeated, or hard to manage, abstract it!

// How Much Repetition Before Abstracting?
// There's no strict rule, but a general guideline is:

// ✅ If the same code appears 2-3 times → Consider abstraction.
// ✅ If it appears 4+ times → Must abstract it!
// ✅ If the logic might change in the future → Abstract it early.



// 📌 Where Do We Need Abstraction? (Notes)

// 1️⃣ Utility Functions → Avoid repeating logic (e.g., sum(a, b)).
// 2️⃣ API Calls → Centralize fetch logic for maintainability.
// 3️⃣ Database Queries → Keep DB logic separate from business logic.
// 4️⃣ Authentication → Separate login, token handling, and authorization.
// 5️⃣ Error Handling → Centralize error messages and handling.
// 6️⃣ Logging → Abstract console logs or analytics tracking.
// 7️⃣ Configuration Management → Store API keys, DB URLs in one place.
// 8️⃣ Form Validations → Avoid repeating validation rules.
// 9️⃣ Component Reusability (Frontend) → Create reusable UI components.
// 🔟 State Management (React, Redux, etc.) → Abstract complex state logic.

// 🚀 Rule: If logic repeats or might change, abstract it!



const sum = (a, b) => {
    const ans = a + b;
    return ans;
}


console.log(sum(1,2))