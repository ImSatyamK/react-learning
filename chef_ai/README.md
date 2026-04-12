# Chef AI 🍳

A React app that suggests recipes based on ingredients you have at home, powered by the Llama 3.1 model via Hugging Face Inference API.

## Features

- Add ingredients one by one
- Delete ingredients from the list
- Get an AI-generated recipe based on your ingredients
- Recipe is rendered as formatted HTML

## Tech Stack

- React (Vite)
- Hugging Face Inference API (`@huggingface/inference`)
- Model: `meta-llama/Llama-3.1-8B-Instruct` via Novita provider

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ImSatyamK/react-learning.git
cd react-learning/chef_ai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root of the project:

```
VITE_HF_ACCESS_TOKEN=your_huggingface_token_here
```

Get a free token from [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens) and enable inference providers at [huggingface.co/settings/inference-providers](https://huggingface.co/settings/inference-providers).

### 4. Run the app

```bash
npm run dev
```

## Usage

1. Type an ingredient into the input field and click **+ ADD INGREDIENT**
2. Keep adding ingredients to build your list
3. Click **Get Recipe** to generate a recipe
4. The AI will suggest a recipe using some or all of your ingredients

## Notes

- Never commit your `.env` file — it's already listed in `.gitignore`
- The free Hugging Face tier is used, no paid API key required