# Krishi Setu — SIH 26132

Full-stack SIH prototype for strengthening market linkages and price discovery for farmers.

## UX
The farmer journey is designed around a real sale decision:
1. Onboarding/profile context
2. Create a crop lot
3. Compare market price + arrivals + demand + transport + handling
4. Explain net-realization recommendation
5. Match verified buyers
6. Review/accept offers
7. Coordinate logistics
8. Track transaction and payment
9. Maintain profile, FPO and admin verification views

## Stack
- Frontend: React + Vite + TypeScript + Tailwind CSS v4 + Recharts + Lucide
- Backend: Node + Express + TypeScript
- Database: MongoDB + Mongoose
- i18n: English, Hindi, Marathi with localStorage persistence

## Run on Windows
From this root folder:

```powershell
npm install
npm run install-all
npm run dev
```

Frontend: http://localhost:5173
API: http://localhost:5000/api/health

MongoDB is optional for the demo endpoints; set `server/.env` from `.env.example` when you want persistence.
