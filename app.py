import os
import json
from flask import Flask, render_template, request, jsonify
from dotenv import load_dotenv
from google import genai
from google.genai import types

load_dotenv()

app = Flask(__name__)

# API key
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/extract", methods=["POST"])
def extract():
    file = request.files["receipt"]
    image_bytes = file.read()

    prompt = """
    Extract receipt data and return ONLY valid JSON:

    {
      "merchant_name": "",
      "date": "",
      "total_amount": "",
      "currency": ""
    }
    """

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=[
            types.Part.from_text(text=prompt),
            types.Part.from_bytes(
                data=image_bytes,
                mime_type="image/png"
            )
        ]
    )

    # Gemini response
    cleaned = response.text.strip()

    cleaned = cleaned.replace("```json", "")
    cleaned = cleaned.replace("```", "")

    # Convert string to JSON
    data = json.loads(cleaned)

    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)