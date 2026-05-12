# Receipt AI Auto-Fill Web App

## How it works
Upload a receipt image → Gemini AI extracts:
- Merchant name
- Date
- Total amount
- Currency

Then auto-fills a form for user review.

## Tech Stack
- Flask
- HTML + JavaScript
- Google Gemini API

## Setup

1. create virtual environment
python -m venv venv

2. Activate virtual environement:
(Mac)
source venv/bin/activate
(windows)
venv\Scripts\activate

3. Install dependencies:
pip install -r requirements.txt

4. Create a .env file:
GEMINI_API_KEY=your_key

5. Run app:
python app.py

## AI Prompt Used
You are a receipt data extraction system.

Extract the following fields from the receipt image:
- merchant_name
- date
- total_amount
- currency

Return ONLY valid JSON in this format:
{
  "merchant_name": "",
  "date": "",
  "total_amount": "",
  "currency": ""
}

## Ouput Example
{
  "merchant_name": "Starbucks",
  "date": "2026-05-12",
  "total_amount": "15.90",
  "currency": "MYR"
}

## Screenshot of the Web
![Receipt AI Web App Screenshot](https://raw.githubusercontent.com/FarhanaAdnin/receipt-ai-app/main/screenshot.png)
