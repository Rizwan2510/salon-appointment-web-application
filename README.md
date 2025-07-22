# 💈 Salon Appointment Web Application

A full-stack microservice-based platform designed to modernize salon booking and management. This project empowers users to seamlessly schedule appointments while helping salon owners onboard, promote, and manage their businesses digitally.

---

## 🚀 Project Overview

This web application streamlines the salon experience with real-time booking, secure payments, notifications, and user reviews. Built using a modular microservice architecture, each service handles a specific domain, ensuring scalability and maintainability.

---

## 🧩 Core Microservices

| Service        | Responsibility                                                |
|----------------|---------------------------------------------------------------|
| User           | Handles user registration, authentication, and profiles       |
| Salon          | Enables salon onboarding and business management              |
| Category       | Manages service categories (e.g., hair, skin)                 |
| Offering       | Defines individual services like haircut, facial, etc.        |
| Booking        | Facilitates appointment scheduling and calendar updates       |
| Payment        | Integrates Razorpay/Stripe for secure transactions            |
| Notification   | Sends booking confirmations and reminders                     |
| Review         | Collects and displays user ratings and feedback               |

---

## 💻 Tech Stack

- **Backend**: Spring Boot
- **Frontend**: ReactJS
- **Database**: SQL

---

## 🔧 Tools & Infrastructure

| Tool            | Purpose                                                          |
|------------------|------------------------------------------------------------------|
| Gateway Server   | Centralized routing for incoming requests                        |
| Eureka Server    | Service registry for dynamic discovery of microservices         |
| Keycloak + JWT   | Authentication and role-based access control                    |
| Feign Client     | Declarative REST client for service-to-service communication     |
| RabbitMQ         | Asynchronous messaging for event handling                        |
| Docker           | Containerization for deployment consistency                      |
| CORS Configuration | Secure cross-origin access policy enforcement                 |

---

## ✨ Highlights

- Modular design allows for independent development and deployment
- Secure login and role handling using Keycloak & JWT
- Scalable messaging system via RabbitMQ
- API-level security and cross-service communication streamlined with Feign & Gateway

---

## 🗣️ Feedback & Collaboration

I’d love to connect with fellow developers, product thinkers, and tech enthusiasts. Feel free to clone, contribute, or suggest improvements!

---

## 📜 License

This project is open source under the MIT License.
