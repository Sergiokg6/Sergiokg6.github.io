import os
import google.generativeai as genai
import time
from rich.console import Console
from rich.markdown import Markdown
from rich.prompt import Prompt
from rich.panel import Panel
from rich.live import Live
from rich.spinner import Spinner
import json
from datetime import datetime
import signal
import sys


class GeminiChat:
    def __init__(self, api_key):
        self.console = Console()
        self.chat_history = []
        self.initialize_api(api_key)
        self.setup_model()

    def initialize_api(self, api_key):
        """Initialize the Gemini API with error handling"""
        try:
            genai.configure(api_key=api_key)
        except Exception as e:
            self.console.print(
                f"[red]Failed to initialize API: {str(e)}[/red]")
            sys.exit(1)

    def setup_model(self):
        """Configure the Gemini model with enhanced parameters"""
        self.generation_config = {
            "temperature": 0.9,  # Slightly reduced for more focused responses
            "top_p": 0.95,
            "top_k": 40,
            "max_output_tokens": 8192,
            # Changed to markdown for rich formatting
            "response_mime_type": "text/markdown",
        }

        try:
            self.model = genai.GenerativeModel(
                model_name="gemini-2.0-flash-exp",
                generation_config=self.generation_config
            )
            self.chat_session = self.model.start_chat(history=[])
        except Exception as e:
            self.console.print(f"[red]Failed to setup model: {str(e)}[/red]")
            sys.exit(1)

    def save_chat_history(self):
        """Save chat history to a JSON file"""
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"chat_history_{timestamp}.json"

        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(self.chat_history, f, ensure_ascii=False, indent=2)

        self.console.print(f"[green]Chat history saved to {filename}[/green]")

    def load_chat_history(self, filename):
        """Load chat history from a JSON file"""
        try:
            with open(filename, 'r', encoding='utf-8') as f:
                self.chat_history = json.load(f)
            self.console.print(
                "[green]Chat history loaded successfully[/green]")
        except FileNotFoundError:
            self.console.print(
                "[yellow]No previous chat history found[/yellow]")

    def display_thinking_animation(self):
        """Display a thinking animation while waiting for response"""
        return Spinner('dots', text="Thinking...")

    def format_response(self, response_text):
        """Format the response with syntax highlighting and markdown"""
        try:
            return Markdown(response_text)
        except Exception:
            return response_text

    def handle_exit(self, signum, frame):
        """Handle graceful exit"""
        self.console.print(
            "\n[yellow]Saving chat history and exiting...[/yellow]")
        self.save_chat_history()
        sys.exit(0)

    def run(self):
        """Main chat loop with enhanced features"""
        signal.signal(signal.SIGINT, self.handle_exit)

        # Welcome message
        self.console.print(Panel.fit(
            "[bold blue]Welcome to Enhanced Gemini AI Chat[/bold blue]\n"
            "Type 'exit' to quit, 'save' to save history, 'load' to load history"
        ))

        while True:
            try:
                # Get user input with a styled prompt
                user_input = Prompt.ask("\n[bold green]You[/bold green]")

                # Handle special commands
                if user_input.lower() == 'exit':
                    self.handle_exit(None, None)
                elif user_input.lower() == 'save':
                    self.save_chat_history()
                    continue
                elif user_input.lower() == 'load':
                    filename = Prompt.ask("Enter filename to load")
                    self.load_chat_history(filename)
                    continue

                # Store user message
                self.chat_history.append(
                    {"role": "user", "content": user_input})

                # Display thinking animation while waiting for response
                with Live(self.display_thinking_animation(), refresh_per_second=10):
                    start_time = time.time()
                    response = self.chat_session.send_message(user_input)
                    response_time = time.time() - start_time

                # Store and display response
                self.chat_history.append(
                    {"role": "assistant", "content": response.text})

                # Display formatted response with timing information
                self.console.print("\n[bold blue]Assistant[/bold blue]")
                self.console.print(self.format_response(response.text))
                self.console.print(
                    f"[dim]Response time: {response_time:.2f}s[/dim]")

            except Exception as e:
                self.console.print(f"[red]Error: {str(e)}[/red]")
                continue


def main():
    # You can store this in an environment variable instead, This is from google ai studio - FREE AI LLM
    API_KEY = "AIzaSyCa24nWFs1Zh6Bm-_3axv_T_s9Cn9UMOdQ"

    chat = GeminiChat(API_KEY)
    chat.run()


if __name__ == "__main__":
    main()
