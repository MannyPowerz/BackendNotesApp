# 🛡️ JWT Authentication Notes App API

## 📖 Description
This is a **learning-based backend project** that demonstrates how to implement **JWT authentication** in a Notes App API.  

The primary goal of this project was not just to build a working API, but to **understand and practice core backend concepts** such as authentication, password hashing, middleware, and secure data access.  

By completing this project, I gained hands-on experience with:  
- How **JWTs** (JSON Web Tokens) work for authentication.  
- Protecting routes in an Express.js API.  
- Storing user information securely with hashed passwords.  
- Creating and testing a simple CRUD API.  

---

## 🛠️ Technologies Used
- **Programming Language:** JavaScript (Node.js)  
- **Framework:** Express.js  
- **Authentication:** bcrypt, jsonwebtoken  
- **Database:** In-memory array (optional: MongoDB)  
- **Tools:** Postman / Thunder Client (for testing), dotenv (environment variables)  

---

## 🎓 Learning Outcomes
Through building this project, I learned:  
1. **JWT Basics**: Signing tokens, verifying them, and attaching user data.  
2. **Secure Passwords**: Using bcrypt to hash and compare passwords.  
3. **Middleware in Express**: Creating custom middleware to protect routes.  
4. **Error Handling**: Handling expired/invalid tokens and user input validation.  
5. **Separation of Concerns**: Structuring authentication, routes, and middleware clearly.  

### 🚧 Challenges and Solutions
- **Challenge:** Initially struggled with attaching user information to JWTs.  
  **Solution:** Learned to embed the user ID in the payload and access it in protected routes.  
- **Challenge:** Forgetting to hash passwords properly during login caused failed comparisons.  
  **Solution:** Reviewed bcrypt’s `hash` vs `compare` functions to ensure secure and correct checks.  
- **Challenge:** Handling token expiration gracefully.  
  **Solution:** Added middleware that checks for expiration and returns a clear error response.  

---

## ⚙️ Installation and Setup

### Prerequisites
- Node.js (v16 or above recommended)  
- npm (Node package manager)  

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/jwt-auth-notes-app.git
   cd jwt-auth-notes-app
  

2. **Install Dependencies**
```bash
npm install
```

3. **Set Up Environment Variables**
Create a .env file in the project root:
```env
PORT=5000
JWT_SECRET=your_jwt_secret_key
```

4. **Run the Server**
```bash
npm start
```

---

### ▶️ Usage
## 🔑 Authentication
Register

POST /auth/register
## Body: 
```json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "mypassword"
}
```

## Login

POST /auth/login
Body:
```json
{
  "email": "john@example.com",
  "password": "mypassword"
}
```
---

Response includes a JWT token to be used in subsequent requests.

### 📝 Notes (Protected Routes)

All routes require Authorization: Bearer <JWT> header

GET /notes → Fetch all notes

POST /notes → Create a new note

```json
{
  "title": "Learning JWT",
  "content": "Today I implemented JWT authentication!"
}
```

PUT /notes/:id → Update a note

DELETE /notes/:id → Delete a note

---

## 🎯 Key Takeaways

This project solidified my understanding of authentication in backend APIs. It also improved my confidence in:

- Structuring small Express projects

- Implementing secure login/registration flows

- Using tools like Postman to test APIs

It was built with a strong emphasis on learning by doing, and can serve as a foundation for more advanced projects with databases, refresh tokens, and user authorization.

